const jwt = require('jsonwebtoken')
const userAuthRepository = require('./userAuth.repository')

const bcrypt = require('bcrypt');

async function register(namaLengkap, email, noTelepon, jenisKelamin, password) {
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const user ={
            namaLengkap, 
            email, 
            noTelepon, 
            jenisKelamin, 
            password: hashedPassword,
            role : "admin"
        };
        const newUser = await userAuthRepository.createUser(user)
        return newUser
    } catch (error) {
        throw new Error("Failed Register User");        
    }
    
}

// async function login(namaLengkap, password) {
//     const user = await userAuthRepository.findUserAuth(namaLengkap);
//     if (!user) {
//         throw new Error("Invalid username or password");
//     }

//     const isValidPassword = await bcrypt.compare(password, user.password);
    
//     if (!isValidPassword) {
//         throw new Error("Invalid username or password");
//     }
    
// }

async function login(namaLengkap, password) {
    const user = await userAuthRepository.findUserAuth(namaLengkap);
    
    console.log('User ditemukan:', user); // Debugging output

    if (!user) {
        throw new Error('Invalid username or password');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    
    if (!isValidPassword) {
        throw new Error('Invalid username or password');
    }

    const token = jwt.sign(
        {
            userId: user.userId,
            namaLengkap: user.namaLengkap,
            role: user.role,
        },
        process.env.JWT_SECRET || 'secret_key', // Gunakan variabel lingkungan untuk keamanan
        { expiresIn: '1h' }
    );

    return {
        userId: user.userId,
        namaLengkap: user.namaLengkap,
        role: user.role,
        token
    };
}


module.exports ={register, login}