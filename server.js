// first lesson
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get('/hello', (req, res) => {
    res.send('Hellow World!');
});

app.get('/hello-abelle', (req, res) => {
    res.send('<h1>Hellow Abelle</h1>');
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is currently runnig: ${PORT}`)
});