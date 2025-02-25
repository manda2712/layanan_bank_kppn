const prisma = require('../db')

async function InsertPenerbitanBukti(dataBukti) {
    const newPenerbitan = await prisma.penerbitanBukti.create({
        data: {
            kodeSatker : dataBukti.kodeSatker,
            noTelpon : dataBukti.noTelpon,
            alasanRetur : dataBukti.alasanRetur,
            unggah_dokumen :dataBukti.unggah_dokumen
        }
    })
    return newPenerbitan 
}

async function findPenerbitan() {
    const penerbitanBukti = await prisma.penerbitanBukti.findMany({
        select:{
            kodeSatker : true,
            noTelpon : true,
            alasanRetur : true,
            unggah_dokumen :true
        }

    })
    return penerbitanBukti
    
}

module.exports = {InsertPenerbitanBukti, findPenerbitan}