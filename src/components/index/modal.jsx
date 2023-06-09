import { useEffect, useRef, useId } from 'react';
import styles from './css/modal.module.css';

export default function Modal({
    modalIsOpen = false,
    closeModal,
    headerContent = '信件已寄出',
    bodyContent = '我們將會盡快與您聯繫，謝謝！'
}) {
    console.log('🚀 ~ file: modal.jsx:10 ~ bodyContent:', bodyContent)
    console.log('🚀 ~ file: modal.jsx:10 ~ headerContent:', headerContent)

    const modalRef = useRef(null);
    const id = useId()
    const modalShowClassRef = useRef('hide')
    const modalHeaderClassRef = useRef('success')

    modalHeaderClassRef.current = headerContent === '資料錯誤' ? 'fail' : 'success'
    modalShowClassRef.current = modalIsOpen ? 'show' : 'hide'


    useEffect(() => {
        if (modalRef.current === null) {
            modalRef.current = id
            const root = document.getElementById('root')
            const modal = document.getElementById(modalRef.current)
            const modalCloseButton = document.getElementById('close-button')
            root.appendChild(modal)
            modalCloseButton.addEventListener('click', () => closeModal())
        }
    }, [modalRef]);

    return (
        <div id={id} className={`${styles['modal-layout']} ${styles[modalShowClassRef.current]}`}>
            <div className={styles['modal-wrapper']}>
                <div className={styles['modal-container']}>
                    <div id="close-button" className={styles['modal-close']} />
                    <div className={`${styles['modal-header']} ${styles[modalHeaderClassRef.current]}`}>
                        {headerContent}
                    </div>
                    <div className={styles['modal-body']}>
                        {bodyContent}
                    </div>
                    <div className={styles['modal-footer']}></div>
                </div>
            </div>
        </div>
    )
}
