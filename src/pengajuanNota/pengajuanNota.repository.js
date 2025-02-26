const prisma = require("../db")

async function insertPengajuanNota(dataPengajuan) {
    const newPengajuanNota = await prisma.pengajuanNota.create({
        data:{
            kodeSatker : dataPengajuan.kodeSatker,
            noTelpon : dataPengajuan.noTelpon,
            tahunSteoran : dataPengajuan.tahunSteoran,
            unggahDokumem :dataPengajuan.unggahDokumem
        }
    })
    return newPengajuanNota
}

async function findPengajuanNota() {
    const pengajuanNota = await prisma.pengajuanNota.findMany({
        select:{
            kodeSatker : true,
            noTelpon : true,
            tahunSteoran : true,
            unggahDokumem :true    
        }
    })
    return pengajuanNota 
}

async function findPengajuanNotaById(id) {
    const pengajuanNota = await prisma.pengajuanNota.findUnique({
        where:{
            id: parseInt(id)
        },
        select:{
            id: true,
            kodeSatker : true,
            noTelpon : true,
            tahunSteoran : true,
            unggahDokumem :true 
        }
    })
    return pengajuanNota 
}

async function editPengajuanNota(id, dataPengajuan) {
    const updatePengajuanNota = await prisma.pengajuanNota.update({
        where:{
            id: parseInt(id)
        },
        data:{
            kodeSatker : dataPengajuan.kodeSatker,
            noTelpon : dataPengajuan.noTelpon,
            tahunSteoran : dataPengajuan.tahunSteoran,
            unggahDokumem :dataPengajuan.unggahDokumem
        }
    })
    return updatePengajuanNota 
}

async function deletePengajuanNota(id) {
    await prisma.pengajuanNota.delete({
        where:{
            id: parseInt(id)
        }
    })  
}

module.exports = {
    insertPengajuanNota, 
    findPengajuanNota,
    findPengajuanNotaById,
    editPengajuanNota,
    deletePengajuanNota
}