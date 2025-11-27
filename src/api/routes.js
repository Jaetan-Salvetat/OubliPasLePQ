import { CheckAuthToken } from './auth.js'
import { createToken } from './token.js'

export async function authRoute(app) {
    app.post('/auth', (req, res) => {
        if(req.body) {
            if(CheckAuthToken(req.body.key) == true) {
                let token = createToken()
                res.send({ "success": true, "token":token.value })
                return
            }
            res.send({ "success":false, data:"invalid_token"})
            return
        }
        res.send({ "success":false, data:"no_body"})
        return
    })
}
