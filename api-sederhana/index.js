const express = require('express');
const app = express();
app.use(express.json());

app.get('/hello', (req, res) => {
    res.status(200).json({
        status: "success",
        message: "welcome to Maqdis Academy"
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})