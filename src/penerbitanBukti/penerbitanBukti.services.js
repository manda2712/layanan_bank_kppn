const {InsertPenerbitanBukti, findPenerbitan, findPenerbitanBuktiById, editPenerbitanBukti, deletePenerbitanBukti} = require("./penerbitanBukti.repository")

async function createPenerbitanBukti(newPenerbitanBukti) {
    const newPenerbitan = await InsertPenerbitanBukti(newPenerbitanBukti)
    return newPenerbitan 
}

async function getAllPenerbitanBukti() {
    const penerbitanBukti = findPenerbitan()
    return penerbitanBukti  
}

async function getPenerbitanBuktiById(id) {
    const penerbitanBukti = await findPenerbitanBuktiById(id)
    if (!penerbitanBukti) {
        throw new Error("Tidak Dapat Menemukan Penerbitan Bukti Yang dicari");  
    }
    return penerbitanBukti
    
}

async function editPenerbitanBuktiById(id, dataBukti) {
    await getPenerbitanBuktiById(id)
    const updateBukti = await editPenerbitanBukti(id, dataBukti)
    return updateBukti   
}

async function deletePenerbitanBuktiById(id) {
    await getPenerbitanBuktiById(id)
    await deletePenerbitanBukti(id)
    
}

module.exports ={createPenerbitanBukti, 
    findPenerbitan, 
    getAllPenerbitanBukti, 
    getPenerbitanBuktiById, 
    editPenerbitanBuktiById,
    deletePenerbitanBuktiById
}