const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.post('/astrology', (req, res) => {
    const { name, age, starSign, tob } = req.body;
    // You can perform any desired logic with the received data here
    console.log(name, age, starSign, tob);

    res.send('Hello World');
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});