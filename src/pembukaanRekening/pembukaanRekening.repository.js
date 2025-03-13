const prisma = require("../db")

async function insertPembukaanRekening(dataRekening) {
    const newPembukaanRekening = await prisma.pembukaanRekening.create({
        data:{
            kodeSatker : dataRekening.kodeSatker,
            noTelpon : dataRekening.noTelpon,
            jenisRekening : dataRekening.jenisRekening,
            unggahDokumen : dataRekening.unggahDokumen
        }
    })
    return newPembukaanRekening
}

async function findPembukaanRekening() {
    const pembukaanRekening = await prisma.pembukaanRekening.findMany({
        select:{
            id: true,
            kodeSatker : true,
            noTelpon : true,
            jenisRekening : true,
            unggahDokumen : true
        }
    })
    return pembukaanRekening 
}

async function findPembukaanRekeningById(id) {
    const pembukaanRekening = await prisma.pembukaanRekening.findUnique({
        where:{
            id: parseInt(id)
        },
        select:{
            id: true,
            kodeSatker : true,
            noTelpon : true,
            jenisRekening : true,
            unggahDokumen : true
        }
    })
    return pembukaanRekening  
}

async function editPembukaanRekening(id, dataRekening) {
    const updatePembukaanRekening = await prisma.pembukaanRekening.update({
        where:{
            id: parseInt(id)
        },
        data:{
            kodeSatker : dataRekening.kodeSatker,
            noTelpon : dataRekening.noTelpon,
            jenisRekening : dataRekening.jenisRekening,
            unggahDokumen : dataRekening.unggahDokumen
        }
    })
    return updatePembukaanRekening 
}

async function deletePembukaanRekening(id) {
    await prisma.pembukaanRekening.delete({
        where:{
            id: parseInt(id)
        }
    })
    
}

module.exports = {
    insertPembukaanRekening,
    findPembukaanRekening,
    findPembukaanRekeningById,
    editPembukaanRekening,
    deletePembukaanRekening
}