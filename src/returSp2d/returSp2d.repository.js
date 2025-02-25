const prisma = require('../db')

async function insertRetur(dataRetur) {
    const newRetur = await prisma.returSp2d.create({
        data:{
            kodeSatker : dataRetur.kodeSatker,
            noTelpon : dataRetur.noTelpon,
            alasanRetur : dataRetur.alasanRetur, 
            unggah_dokumen : dataRetur.unggah_dokumen   
        }
    })
    return newRetur 
}

async function findRetur() {
    const returSp2d = await prisma.returSp2d.findMany({
        select:{
            id: true,
            kodeSatker : true,
            noTelpon : true,
            alasanRetur : true, 
            unggah_dokumen : true        
        }
    })
    return returSp2d
} 

async function findReturById(id) {
    const returSp2d = await prisma.returSp2d.findUnique({
        where: {
            id: parseInt(id)
        },
        select: {
            id: true,
            kodeSatker : true,
            noTelpon : true,
            alasanRetur : true, 
            unggah_dokumen : true   
            
        }
    })
    return returSp2d 
}

async function editRetur(id, dataRetur) {
    const updateRetur = await prisma.returSp2d.update({
        where:{
            id: parseInt(id)
        },
        data :{
            kodeSatker : dataRetur.kodeSatker,
            noTelpon : dataRetur.noTelpon,
            alasanRetur : dataRetur.alasanRetur, 
            unggah_dokumen : dataRetur.unggah_dokumen 
        }
    })
    return updateRetur
}

async function deleteDataRetur(id) {
    await prisma.returSp2d.delete({
        where: {
            id: parseInt(id)
        }
    })  
}
        
    
module.exports = {insertRetur, findRetur, findReturById, editRetur, deleteDataRetur}