const express = require('express');
const app = express();
const PORT = 3000;

// Render HTML
app.get('/', (req, res) => {
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
