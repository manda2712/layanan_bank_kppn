const express = require("express")
const router = express.Router()

const pengajuanNotaService = require("./pengajuanNota.service")

router.post("/create", async (req, res) => {
    try {
        const pengajuanNota = req.body
        const dataPengajuan = await pengajuanNotaService.createPengajuanNota(pengajuanNota)
        res.status(201).json({dataPengajuan, message:"Pengajuan Nota Berhasil Dibuat"})
    } catch (error) {
        res.status(400).send(error.message) 
    }
})

router.get("/", async (req, res) => {
    try {
        const pengajuanNota = await pengajuanNotaService.getAllPengajuanNota()
        res.send(pengajuanNota)  
        
    } catch (error) {
        res.status(500).send(error.message)  
    }
})

router.get("/:id", async (req, res) => {
    try {
        const pengajuanNotaId = parseInt(req.params.id)
        const pengajuanNota = await pengajuanNotaService.getPengajuanNotaById(pengajuanNotaId)
        res.status(200).send(pengajuanNota)
    } catch (error) {
        res.status(400).send(error.message)   
    } 
})

router.patch("/:id", async (req, res) => {
    try {
        const pengajuanNotaId = req.params.id
        const dataPengajuan = req.body
        const updatePengajuanNota = await pengajuanNotaService.editPengajuanNotaById(pengajuanNotaId, dataPengajuan)
        res.status(200).json({updatePengajuanNota, message: "Update Penerbitan Bukti Berhasil"})
    } catch (error) {
        res.status(400).json({error: error.message})
    } 
})

router.delete("/:id", async (req, res) => {
    try {
        const pengajuanNotaId = req.params.id
        await pengajuanNotaService.deletePengajuanNotaById(pengajuanNotaId)
        res.status(200).json({message: "Pengajuan Nota Berhasil Dihapus"})
    } catch (error) {
        res.status(400).send(error.message)  
    }
})
module.exports = router