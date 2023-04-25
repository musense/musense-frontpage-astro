import React, { useRef, useState } from 'react';
import styles from './css/contactUs.module.css';
import Modal from "./modal";
import sendEmail from "@services/emailService";

const checkList = new Map([
  ['advertising', { select: 0, alias: "廣告投放代理" }],
  ['socialMedia', { select: 0, alias: "社群口碑行銷" }],
  ['seo', { select: 0, alias: "SEO網站優化" }],
  ['design', { select: 0, alias: "數位形象設計" }],
])
export default function ContactUs({ emailProps }) {
  // console.log(import.meta.env.MODE);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [headerContent, setHeaderContent] = useState(null);
  const [bodyContent, setBodyContent] = useState(null);

  function getAskString(checkList) {
    let askString = '';
    for (const { select, alias } of checkList.values()) {
      select === 1 && (askString += `${alias}/`)
    }
    return askString.lastIndexOf("/") === askString.length - 1 && (askString = askString.slice(0, -1))
  }
  function getFormData(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));

    const askString = getAskString(checkList)
    const userData = Object.fromEntries(formData);
    const templateParams = {
      companyName: userData['company-name'],
      name: userData.name,
      phone: userData.phone,
      email: userData.email,
      askString: askString,
      ask: userData.ask
    };
    sendEmail(templateParams, emailProps)
      .then(message => {
        console.log("🚀 ~ file: contactUs.jsx:64 ~ subFormData ~ message:", message)
        openModal()
      })
      .catch(err => {
        console.log("🚀 ~ file: contactUs.jsx:70 ~ subFormData ~ err:", err)

        openModal(err)
      })
  }
  function openModal(err) {
    if (err) {
      setHeaderContent("資料錯誤")
      if (typeof err === 'string') {
        const errorMessage = '「請填寫完整欄位資訊後再點擊送出」';
        setBodyContent(errorMessage)
      } else {
        setBodyContent('出了點問題，請稍後再試！')
      }
    } else {
      setHeaderContent()
      setBodyContent()
    }
    setIsOpen(true)
  }
  function closeModal() {
    console.log("🚀 ~ file: contactUs.jsx:49 ~ closeModal ~ closeModal: clicked!!!!!")

    setIsOpen(false)
  }
  function onCheckBoxChange(e) {
    // checkList.

    console.log(e.target.name);
    console.log(e.target.checked);
    const originValue = checkList.get(e.target.name)
    checkList.set(e.target.name,
      Object.assign({}, originValue, { select: e.target.checked ? 1 : 0 })
    )
    console.log("🚀 ~ file: contactUs.jsx:64 ~ onCheckBoxChange ~ checkList:", checkList)

  }
  return (
    <div id='contact' className={styles['contact-us-wrapper']}>
      <Modal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        headerContent={headerContent}
        bodyContent={bodyContent}
      />
      <div className={styles['contact-us']} />
      <div className={styles['contact-us-content']}>
        <div className={styles['img-wrapper']}>
          <div className={styles['image-down']} />
          <div className={styles['orange-box']} />
        </div>
        <form
          name='contactForm'
          className={styles['contact-us-form']}
          onSubmit={getFormData}
        >

          <div className={styles['left-form']}>

            <div className={`${styles['enter-box']} ${styles['company-name']}`}>
              <input
                type='text'
                name='company-name'
              />
            </div>
            <div className={`${styles['enter-box']} ${styles['name']}`}>
              <input
                type='text'
                name='name'
              />
            </div>
            <div className={`${styles['enter-box']} ${styles['phone']}`}>
              <input
                type='tel'
                name='phone'
              />
            </div>
            <div className={`${styles['enter-box']} ${styles['email']}`}>
              <input
                type='email'
                name='email'
              />
            </div>
          </div>

          <div className={styles['right-form']}>

            <div className={`${styles['enter-checkbox-list']}`}>
              <div className={`${styles['enter-checkbox']} ${styles['advertising']}`}>
                <input
                  type='checkbox'
                  name='advertising'
                  onChange={onCheckBoxChange}
                />
              </div>
              <div className={`${styles['enter-checkbox']} ${styles['socialMedia']}`}>
                <input
                  type='checkbox'
                  name='socialMedia'
                  onChange={onCheckBoxChange}
                />
              </div>
              <div className={`${styles['enter-checkbox']} ${styles['seo']}`}>
                <input
                  type='checkbox'
                  name='seo'
                  onChange={onCheckBoxChange}
                />
              </div>
              <div className={`${styles['enter-checkbox']} ${styles['design']}`}>
                <input
                  type='checkbox'
                  name='design'
                  onChange={onCheckBoxChange}
                />
              </div>
              {/* {checkList.forEach((value, key) => {
              console.log(`${key} = ${value}`);
              return (<div className={`${styles['enter-checkbox']} ${styles[key]}`} key={key}>
                <input
                  type='checkbox'
                  name={key}
                  onChange={onCheckBoxChange}
                />
              </div>
              )

            })} */}
            </div>

            <div className={`${styles['enter-box']} ${styles['ask']} ${styles['large']}`}>
              <textarea
                type='text'
                name='ask'
              />
            </div>
            <button
              title='send button'
              className={styles['send-button']}
              type='submit'
            />
          </div>

        </form>
      </div>
    </div>
  );
}
