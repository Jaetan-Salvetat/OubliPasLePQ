import bcrypt from "bcrypt"


const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

let generatedKey = ""
let hashKey = ""

let bcryptSalt = Math.random() * 10


function generateInitKey() {
    for(let i = 0; i < 100; i++) {
        generatedKey = generatedKey + alphabet[Math.floor(Math.random() * alphabet.length)]
    }
}


//generate key

generateInitKey()

console.log("No hash: " + generatedKey)

const salt = await bcrypt.genSalt(bcryptSalt) 
hashKey = await bcrypt.hash(generatedKey, salt)
console.log("Hash: " + hashKey)
