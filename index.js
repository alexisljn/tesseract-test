const express = require('express');
const app = express();
const Tesseract = require("tesseract.js");

app.set('view engine', 'ejs');

// app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit: 1000000}))
app.get('/', (req, res) => {
    res.render('index');
})

app.post('/detect', async (req, res) => {
    const data = await Tesseract.recognize('Toto-logo.jpg', 'fra', {logger: m => console.log(m)});
    console.log(data);
})

app.listen(3000, () => {
    console.log('server launched');
});
