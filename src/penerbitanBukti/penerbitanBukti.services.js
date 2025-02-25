const {InsertPenerbitanBukti, findPenerbitan} = require("./penerbitanBukti.repository")

async function createPenerbitanBukti(newPenerbitanBukti) {
    const newPenerbitan = await InsertPenerbitanBukti(newPenerbitanBukti)
    return newPenerbitan 
}

async function getAllPenerbitanBukti() {
    const penerbitanBukti = findPenerbitan()
    return penerbitanBukti  
}

module.exports ={createPenerbitanBukti, findPenerbitan, getAllPenerbitanBukti}