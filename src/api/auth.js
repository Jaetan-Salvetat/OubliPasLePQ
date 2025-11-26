import { Token } from "./token.js";
import bcrypt from "bcrypt"



export function CheckWSToken(token) {
    for (let t in tokenList) {
        if (t.value == token.value && !token.isExpired()) {
            return true
        }
    }
    return false
}

export function CheckAuthToken(token) {
    return bcrypt.compareSync(token, process.env.HASH_KEY)
}

