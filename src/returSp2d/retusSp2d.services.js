const { returSp2d } = require("../db")
const {insertRetur, findRetur, findReturById, editRetur, deleteDataRetur} = require("./returSp2d.repository")


async function createRetur(newDataRetur) {
    const newRetur = await insertRetur(newDataRetur)
    return newRetur
     
}

async function getAllRetur() {
    const returSp2d = findRetur()
    return returSp2d  
}

async function getAllReturById(id) {
    const returSp2d = await findReturById(id)
    if(!returSp2d){
        throw new Error("Tidak dapat menemukan data retur");
    }
    return returSp2d  
}

async function editReturById(id, dataRetur) {
    await getAllReturById(id)
    const updateRetur = await editRetur(id, dataRetur)
    return updateRetur  
}

async function deleteReturById(id) {
    await getAllReturById(id);
    await deleteDataRetur(id);    
}


module.exports= {createRetur, getAllRetur, getAllReturById, editReturById, deleteReturById}