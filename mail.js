const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '93be54dd0460d5de70777350e27a160f-9776af14-4e0b20ed',
        domain: 'https://api.mailgun.net/v3/sandbox8912a1312a1e45899da29dd50e027f20.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, text) => {
    const mailOptions = {
        sender: name,
        from: email,
        to: 'ziestwilky@gmail.com',
        text: text
    };
    transporter.sendMail(mailOptions);
}

// Exporting the sendmail
module.exports = sendMail;