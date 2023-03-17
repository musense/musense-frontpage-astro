import React, { useRef, useState } from 'react';
import styles from './css/contactUs.module.css';
import Modal from "./modal";
import sendEmail, { sendEmail_test } from "./../../service/emailService";


export default function ContactUs() {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [headerContent, setHeaderContent] = useState(null);
  const [bodyContent, setBodyContent] = useState(null);
  function tolocaleDateTimeString(dateTime) {
    return `${new Date(dateTime).toLocaleDateString()} ${new Date(dateTime).toLocaleTimeString()}`
  }
  function getFormData(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));
    const userData = Object.fromEntries(formData);
    const templateParams = {
      name: userData.name,
      phone: userData.phone,
      email: userData.email,
      contactTime: tolocaleDateTimeString(userData.contact),
      ask: userData.ask,
    };
    sendEmail_test(templateParams)
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
      setHeaderContent("Error")
      setBodyContent(err)
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
          <div className={`${styles['enter-box']} ${styles['contact']}`}>
            <input
              type='datetime-local'
              name='contact'
            />
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
        </form>
      </div>
    </div>
  );
}
