const express = require("express");
const router = express.Router()

const koreksiPenerimaanService = require("./koreksiPenerimaan.service");
const { pengajuanNota } = require("../db");

router.post('/create', async (req, res) => {
    try {
        const koreksiPenerimaan = req.body
        const dataKoreksi = await koreksiPenerimaanService.createKoreksiPenerimaan(koreksiPenerimaan)
        res.status(201).json({dataKoreksi, message: "Koreksi Penerimaan Berhasil Dibuat"})
    } catch (error) {
        res.status(400).send(error.message)  
    } 
})

router.get("/", async (req, res) => {
    try {
        const koreksiPenerimaan = await koreksiPenerimaanService.getAllKoreksiPenerimaan()
        res.send(koreksiPenerimaan)
    } catch (error) {
        res.status(500).send(error.message)
    } 
})

router.get("/:id", async (req, res) => {
    try {
        const koreksiPenerimaanId = parseInt(req.params.id)
        const koreksiPenerimaan = await koreksiPenerimaanService.getKoreksiPenerimaanById(koreksiPenerimaanId)
        res.status(200).send(koreksiPenerimaan)
    } catch (error) {
        res.status(400).send(error.message) 
    } 
})

router.patch("/:id", async (req, res) => {
    try {
        const koreksiPenerimaanId = req.params.id
        const dataBukti = req.body
        const updateKoreksiPenerimaan = await koreksiPenerimaanService.editKoreksiPenerimaanById(koreksiPenerimaanId, dataBukti)
        res.status(200).json({updateKoreksiPenerimaan, message: "Koreksi Penermaan Berhasil Diubah"})
    } catch (error) {
        res.status(400).json({error: error.message})  
    }  
})

router.delete("/:id", async (req, res) => {
    try {
        const koreksiPenerimaanId = req.params.id
        await koreksiPenerimaanService.deleteKoreksiPenerimaanById(koreksiPenerimaanId)
        res.status(200).json({message:"Koreksi Penerimaan Berhasil Dihapus"})
    } catch (error) {
        res.status(400).send(error.message)
        
    }
    
})

module.exports = router