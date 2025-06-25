const express = require('express');
const app = express();
app.use(express.json());

app.get('/hello', (req, res) => {
    res.status(200).json({
        status: "success",
        message: "welcome to Maqdis Academy"
    });
});

app.post('/', (req, res) => {
    res.status(201).json({
        data: 100,
        status: "berhasil"
    })
});

app.post('/hapus', (req, res) => {
    res.status(200).json({
        data: 0,
        status: "berhasil dihapus"
    })
})


// gunakan query parameters mengirimkan id_setoran, id_user, dan id_juz data yang mau dihapus
// contoh: http://localhost:3000/hapus?id_setoran=20&id_user=21&id_juz=14
app.get('/hapus', (req, res) => {
    const { id_setoran, id_user, id_juz } = req.query;

    if (!id_setoran || !id_user || !id_juz) {
        return res.status(400).json({
            error: "id_setoran, id_user, and id_juz are required in query parameters"
        });
    }

    res.status(200).json({
        message: "berhasil",
        id_setoran,
        id_user,
        id_juz
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})