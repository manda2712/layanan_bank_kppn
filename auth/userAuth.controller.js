const express = require('express');
const router = express.Router();

const userAuthService = require('./userAuth.services');
// const { Role } = require('@prisma/client');
// const { user } = require('../db');

router.post('/register', async (req, res, next) => {
    const {namaLengkap, email, noTelepon, jenisKelamin, password} = req.body
    try {
        const newUser = await userAuthService.register(namaLengkap, email, noTelepon, jenisKelamin, password);
        res.status(201).json({data: {namaLengkap: newUser.namaLengkap, email: newUser.email, noTelepon: newUser.noTelepon, jenisKelamin: newUser.jenisKelamin, password}, message: 'Registration Success' });
    } catch (error) {
        res.status(400).json({ error: error.message });     
    }  
})

router.post('/login', async (req, res) => {
    const { namaLengkap, password } = req.body;

    if (!namaLengkap || !password) {
        return res.status(400).json({ error: 'Nama lengkap dan password wajib diisi' });
    }

    try {
        const user = await userAuthService.login(namaLengkap, password);
        res.status(200).json({ data: user, message: 'Login berhasil' });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});

module.exports = router;