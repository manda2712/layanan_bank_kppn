const express = require("express");
const router = express.Router();

const PenerbitanBukstiService = require("./penerbitanBukti.services")

router.post('/create', async (req, res) => {
    try {
        const penerbitanBukti = req.body
        const newPenerbitanBukti = await PenerbitanBukstiService.createPenerbitanBukti(penerbitanBukti)
        res.status(201).json({newPenerbitanBukti, message :"Penerbitan Bukti Berhasil dibuat"})
    } catch (error) {
        res.status(400).send(error.message) 
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

router.get("/:id", async (req, res) => {
    try {
        const penerbitanBuktiId = parseInt(req.params.id)
        const dataBukti = await PenerbitanBukstiService.getPenerbitanBuktiById(penerbitanBuktiId)
        res.status(200).send(dataBukti)
    } catch (error) {
        res.status(400).send(error.message) 
    } 
})

router.patch("/:id", async (req, res) => {
    try {
        const penerbitanBuktiId = req.params.id
        const dataBukti = req.body
        const updateBukti = await PenerbitanBukstiService.editPenerbitanBuktiById(penerbitanBuktiId, dataBukti)
        res.status(200).json({updateBukti, message: "Update Penerbitan Bukti Berhasil"})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
})

router.delete("/:id", async (req, res) => {
    try {
        const penerbitanBuktiId = req.params.id
        await PenerbitanBukstiService.deletePenerbitanBuktiById(penerbitanBuktiId)
        res.status(200).json({message: "Pengajuan Penerbitan Bukti Berhasil"});
    } catch (error) {
        res.status(400).send(error.message);   
    }
});

module.exports = router