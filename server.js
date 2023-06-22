// first lesson
const express = require('express');
const app = express();

// configure server
app.use(express.json());
app.use(express.urlencoded());

// direct routes
app.get('/hello', (req, res) => {
    res.send('Hellow World!');
});

app.get('/hello-abelle', (req, res) => {
    res.send('<h1>Hellow Abelle</h1>');
});

//routes
require('./routes/tutorial.routes')(app);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is currently running: ${PORT}`)
});