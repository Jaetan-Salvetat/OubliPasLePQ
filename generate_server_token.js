import bcrypt from "bcrypt"


const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"



export async function generateInitKey() {
    let generatedKey = ""
    let hashKey = ""

    for(let i = 0; i < 100; i++) {
        generatedKey = generatedKey + alphabet[Math.floor(Math.random() * alphabet.length)]
    }
    console.log("Salt: " + bcryptSalt)
    console.log("No hash: " + generatedKey)

    const salt = await bcrypt.genSalt(process.env.BCRYPT_SALT) 
    hashKey = await bcrypt.hash(generatedKey, salt)
    console.log("Hash: " + hashKey)
}
