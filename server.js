const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    for (let i = 0; i < 30; i++) {
        console.log('doneeeeee'); // This will print in the server's console
    }
    res.send('Done 30 times! Check the server console for logs.');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
