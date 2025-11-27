import consts from "../constants.js"
import { generateToken } from "../generate_random_token.js";


let tokenList = []


export class Token {
    constructor() {
        this.value = generateToken();
        this.expiration_date = Date.now() + consts.ONE_HOUR
        this.last_use_date = Date.now()
    }

    isExpired() {
        return this.expiration_date < Date.now()
            || Date.now() - this.last_use_date > consts.TEN_MINUTES;
    }
    update() {
        this.last_use_date = Date.now()
    }
}

export function verifyAllToken() {
    for(let i = tokenList.length - 1; i >= 0; i--) {
        if (tokenList[i].isExpired()) {
            tokenList.splice(i, 1);
        }
    }
}

export function createToken() {
    let token = new Token
    tokenList.push(token)
    return token
}

export function verifyToken(token) {
    for(let t of tokenList) {
        if(t.value == token) {
            if(!t.isExpired()){
                return true
            }
            return false
        }
    }
    return false
}