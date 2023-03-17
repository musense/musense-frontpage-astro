import emailjs from '@emailjs/browser';

const EMAIL_SERVICE_KEY = 'service_4jii99l';
const EMAIL_TEMPLATE_KEY = 'template_lh9jlmm';
const EMAIL_PUBLIC_KEY = 'A8pR6FnD07-Z4fU7Q';

export default function sendEmail({ name, phone, email, contactTime, ask }) {

    return new Promise((resolve, reject) => {


        if (name === "") reject("「姓名」必填！\n")
        if (phone === "") reject("「電話」必填！\n")
        if (email === "") reject("「電子信箱」必填！\n")
        if (contactTime === "") reject("「方便聯絡時間」必填！\n")
        if (ask === "") reject("「詢問內容」必填！\n")

        const templateParams = {
            name: name,
            phone: phone,
            email: email,
            contactTime: tolocaleDateTimeString(contactTime),
            ask: ask,
        };

        return emailjs
            .send(
                EMAIL_SERVICE_KEY,
                EMAIL_TEMPLATE_KEY,
                templateParams,
                EMAIL_PUBLIC_KEY
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    resolve(response.text);
                },
                (err) => {
                    console.log('FAILED...', err);
                    resolve(err);
                }
            );
    })
}

export function sendEmail_test({ name, phone, email, contactTime, ask }) {

    return new Promise((resolve, reject) => {

        let err = "";
        if (name === "") err += "「姓名」必填！\n"
        if (phone === "") err += "「電話」必填！\n"
        if (email === "") err += "「電子信箱」必填！\n"
        if (contactTime === "") err += "「方便聯絡時間」必填！\n"
        if (ask === "") err += "「詢問內容」必填！\n"
        if (err !== "") reject(err)

        const templateParams = {
            name: name,
            phone: phone,
            email: email,
            contactTime: tolocaleDateTimeString(contactTime),
            ask: ask,
        };
        // console.log("🚀 ~ file: emailService.js:62 ~ return new Promise ~ templateParams:", templateParams)

        return resolve("success")
    })
}


