const emailConfig = require('./email-config')();
const mailgun = require('mailgun-js')(emailConfig);
exports.sendEmail = (name, email, text, attachment) =>
  new Promise((resolve, reject) => {
    const data = {
      from: name +'<'+ email +'>',
      to: 'ziestwilky@gmail.com',
      subject: 'Contact form submission',
      text: text,
      inline: attachment,
      html: text,
    };

    mailgun.messages().send(data, (error) => {
      if (error) {
        return reject(error);
      }
      return resolve();
    });
  });