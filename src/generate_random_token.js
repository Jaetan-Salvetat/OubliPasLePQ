const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

export function generateToken() {
    let token = ""
    for(let i = 0; i < 100; i++) {
        token = token + alphabet[Math.floor(Math.random() * alphabet.length)]
    }
    return token
}
