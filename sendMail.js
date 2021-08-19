const express = require('express');
const sendMail = express.Router();
const path = require('path');

const emailUtil = require('./mail');
const { sendEmail } = emailUtil;
sendMail.post('/', async (req, res, next) => {
  const { name, email, text } = req.body;
  try {
      await sendEmail(name,email, text);
      res.sendFile(path.join(__dirname, 'views', 'submit.html'));
     } catch (e) {
      await next(e);
   }
 });
module.exports = sendMail;