const express = require('express');
const app = express();
const path = require('path');


app.use(express.urlencoded({
    extend: false
}));
app.use(express.json());
const sendMail = require('./sendMail');




app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});
app.use('/', sendMail);










const PORT = process.env.PORT || 6030;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});