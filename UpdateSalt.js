import bcrypt from "bcrypt"



export async function genSalt() {
    const salt = await bcrypt.genSalt(process.env.BCRYPT_SALT)
}