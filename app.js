const express = require('express');
const app = express();
const path = require('path');
const sendMail = require('./mail');

app.use(express.urlencoded({
    extend: false
}));
app.use(express.json());




app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});
app.post('/contact', (req, res) => {
    //Send an email here but currently dummy email
    const { name, email, text } = req.body;
    console.log('Data: ', req.body);

    sendMail(name, email, text, function(err, data) {
        if (err) {
            res.status(500).json({ message: 'Internal Error' });
        } else {
            res.status({ message: 'Email sent!!!' });
        }
    });
});












const PORT = process.env.PORT || 6030;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});