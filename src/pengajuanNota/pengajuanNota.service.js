const prisma = require("../db")
const { pengajuanNota } = require("../db")
const { findPenerbitanBuktiById } = require("../penerbitanBukti/penerbitanBukti.repository")
const {insertPengajuanNota, findPengajuanNota, findPengajuanNotaById, editPengajuanNota, deletePengajuanNota} = require("./pengajuanNota.repository")

async function createPengajuanNota(newpengajuanNota) {
    const newpengajuan = await insertPengajuanNota(newpengajuanNota)
    return newpengajuan 
}

async function getAllPengajuanNota() {
    const pengajuanNota = findPengajuanNota()
    return pengajuanNota 
}

async function getPengajuanNotaById(id) {
    const pengajuanNota = findPengajuanNotaById(id)
    if (!pengajuanNota) {
        throw new Error("Tidak Dapat Menemukan Penerbitan Nota"); 
    }
    return pengajuanNota
}

async function editPengajuanNotaById(id, dataPengajuan) {
    await getPengajuanNotaById(id)
    const updatePengajuanNota = await editPengajuanNota(id, dataPengajuan)
    return updatePengajuanNota  
}

async function deletePengajuanNotaById(id) {
    await getPengajuanNotaById(id)
    await deletePengajuanNota(id)  
}

module.exports = {
    createPengajuanNota,
    getAllPengajuanNota,
    getPengajuanNotaById,
    editPengajuanNotaById,
    deletePengajuanNotaById
}