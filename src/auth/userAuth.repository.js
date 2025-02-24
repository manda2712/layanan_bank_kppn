const prisma = require("../db");

async function createUser(user) {
    try {
        // console.log("Cek Prisma:", prisma); // Debug
        const validJenisKelamin = ['perempuan', 'lakiLaki'];
        if (!validJenisKelamin.includes(user.jenisKelamin)) {
        throw new Error('jenisKelamin tidak valid!');
        }

        const newUser = await prisma.user.create({ data: user });
        return newUser;
    } catch (error) {
        console.error("Error saat membuat user:", error);
        throw new Error("Failed to Create User");
    }
}

async function findUserAuth(namaLengkap) {
    return await prisma.user.findFirst({
        where: { namaLengkap }
    });
}
module.exports = { createUser, findUserAuth };
