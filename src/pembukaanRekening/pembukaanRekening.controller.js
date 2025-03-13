const express = require("express")
const router = express.Router()

const pembukaanRekeningService = require("./pembukaanRekening.service")


router.post("/create", async (req, res) => {
    try {
        const pembukaanRekening = req.body
        const dataRekening = await pembukaanRekeningService.createPembukaanRekening(pembukaanRekening)
        res.status(201).json({dataRekening, message:"Pembukaan  Rekening Berhasil Dibuat"})
    } catch (error) {
        res.status(400).send(error.message)
    } 
})

router.get("/", async (req, res) => {
    try {
        const pembukaanRekening = await pembukaanRekeningService.getAllPembukaanRekening()
        res.send(pembukaanRekening)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const pembukaanRekeningById = parseInt(req.params.id)
        const pembukaanRekening = await pembukaanRekeningService.getPembukaanRekeningById(pembukaanRekeningById)
        res.status(200).send(pembukaanRekening)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const pembukaanRekeningId = req.params.id
        const dataRekening = req.body
        const updatePembukaanRekening = await pembukaanRekeningService.editPembukaanRekeningById(pembukaanRekeningId, dataRekening)
        res.status(200).json({updatePembukaanRekening, message: "Pembukaan Rekening Berhasil Diubah"})
    } catch (error) {
        res.status(400).json({error: error.message})  
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const pembukaanRekeningId = req.params.id
        await pembukaanRekeningService.deletePembukaanRekeningById(pembukaanRekeningId)
        res.status(200).json({message:"Pembukaan Rekening Berhasil Dihapus"})
    } catch (error) {
        res.status(400).send(error.message)
        
    }
    
})

module.exports= router