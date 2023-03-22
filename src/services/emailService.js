import emailjs from '@emailjs/browser';
// service@musense.tw //
// const EMAIL_SERVICE_KEY = 'service_4jii99l';
// const EMAIL_TEMPLATE_KEY = 'template_lh9jlmm';
// const EMAIL_PUBLIC_KEY = 'A8pR6FnD07-Z4fU7Q';

// wilson.wan@musense.tw //
// const EMAIL_SERVICE_KEY = 'service_wt5sued';
// const EMAIL_TEMPLATE_KEY = 'template_ov59lti';
// const EMAIL_PUBLIC_KEY = '3J0CP1LYb-vJKxViN';


export default function sendEmail(
    { companyName, name, phone, email, askString, ask },
    { service_key, template_key, public_key }
) {
    switch (import.meta.env.MODE) {
        case 'development':
            return sendEmail_test(
                { companyName, name, phone, email, askString, ask },
                { service_key, template_key, public_key })
            // return sendEmail_prod(
            //     { companyName, name, phone, email, askString, ask },
            //     { service_key, template_key, public_key }
            // )
        case 'production':
        default:
            return sendEmail_prod(
                { companyName, name, phone, email, askString, ask },
                { service_key, template_key, public_key }
            )
    }
}
function sendEmail_prod(
    { companyName, name, phone, email, askString, ask },
    { service_key, template_key, public_key }
) {

    return new Promise((resolve, reject) => {

        let err = "";
        if (companyName === "") err += "「公司/品牌名稱」必填！\n"
        if (name === "") err += "「聯絡人」必填！\n"
        if (phone === "") err += "「電話」必填！\n"
        if (email === "") err += "「E-mail」必填！\n"
        if (askString === "" && ask === "") (err += "「合作需求」與「其他需求」請擇一填寫！\n")

        if (err !== "") return reject(err)
        const templateParams = {
            companyName,
            name,
            phone,
            email,
            askString,
            ask,
        };

        return emailjs
            .send(
                service_key,
                template_key,
                templateParams,
                public_key
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    resolve(response.text);
                },
                (err) => {
                    console.log('FAILED...', err);
                    reject(err);
                }
            );
    })
}

function sendEmail_test(
    { companyName, name, phone, email, askString, ask },
    { service_key, template_key, public_key }
) {
    console.log("🚀 ~ file: emailService.js:82 ~ ask:", ask)
    console.log("🚀 ~ file: emailService.js:82 ~ askString:", askString)
    console.log("🚀 ~ file: emailService.js:86 ~ service_key:", service_key)
    console.log("🚀 ~ file: emailService.js:86 ~ template_key:", template_key)
    console.log("🚀 ~ file: emailService.js:86 ~ public_key:", public_key)

    return new Promise((resolve, reject) => {

        let err = "";
        if (companyName === "") err += "「公司/品牌名稱」必填！\n"
        if (name === "") err += "「聯絡人」必填！\n"
        if (phone === "") err += "「電話」必填！\n"
        if (email === "") err += "「E-mail」必填！\n"
        if (askString === "" && ask === "") (err += "「合作需求」與「其他需求」請擇一填寫！\n")

        if (err !== "") return reject(err)
        const templateParams = {
            companyName,
            name,
            phone,
            email,
            askString,
            ask,
        };

        console.log("🚀 ~ file: emailService.js:62 ~ return new Promise ~ templateParams:", templateParams)

        return resolve("success")
    })
}


