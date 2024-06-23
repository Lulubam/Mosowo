const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to mosowo.com!');
});

app.listen(port, () => {
    console.log(`mosowo.com server running on port ${port}`);
});
