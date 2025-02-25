const express = require("express");
const router = express.Router();

const PenerbitanBukstiService = require("./penerbitanBukti.services")

router.post('/create', async (req, res) => {
    try {
        const penerbitanBukti = req.body
        const newPenerbitanBukti = await PenerbitanBukstiService.createPenerbitanBukti(penerbitanBukti)
        res.status(201).json({newPenerbitanBukti, message :"Penerbitan Bukti Berhasil dibuat"})
    } catch (error) {
        
    }  
})

router.get("/", async (req, res) => {
    try {
        const penerbitanBukti = await PenerbitanBukstiService.getAllPenerbitanBukti()
        res.send(penerbitanBukti)
    } catch (error) {
        res.status(500).send(error.message)
        
    } 
})

module.exports = router