const express = require('express');
const app = express();
const { validatePost, validateDeleteByData, validateDelete } = require('./utils/validation');

app.use(express.json());

app.get('/hello', (req, res) => {
    res.status(200).json({
        status: "success",
        message: "welcome to Maqdis Academy"
    });
});

// endpoint untuk post data, membutuhkan data pada body request
app.post('/', (req, res) => {
    // Cek apakah body request ada
    if (!req.body) {
        return res.status(400).json({
            error: "data is required"
        });
    }

    // Validasi data
    const { error, value } = validatePost(req.body);
    if (error) {
        return res.status(400).json({ 
            error: error.details.map(detail => detail.message).join(', ')
         });
    }

    res.status(201).json({
        data: value.data,
        status: "berhasil"
    })
});

// endpoint untuk menghapus data berdasarkan data yang dikirimkan pada body request
app.post('/hapus', (req, res) => {
    // Cek apakah body request ada
    if (!req.body) {
        return res.status(400).json({
            error: "data is required"
        });
    }

    // Validasi data
    const { error, value } = validateDeleteByData(req.body);
    if (error) {
        return res.status(400).json({ 
            error: error.details.map(detail => detail.message).join(', ')
         });
    }

    res.status(200).json({
        data: value.data,
        status: "berhasil dihapus"
    })
})


// gunakan query parameters mengirimkan id_setoran, id_user, dan id_juz data yang mau dihapus
// contoh: http://localhost:3000/hapus?id_setoran=20&id_user=21&id_juz=14
app.get('/hapus', (req, res) => {
    // validasi query parameters
    const { error, value } = validateDelete(req.query);
    if (error) {
        return res.status(400).json({ 
            error: error.details.map(detail => detail.message).join(', ')
         });
    }

    res.status(200).json({
        message: "berhasil",
        id_setoran: value.id_setoran,
        id_user: value.id_user,
        id_juz: value.id_juz
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})