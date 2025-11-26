import express  from 'express'
import { database } from "./src/database/connect.js"
import { loadSQLDir } from './src/sql/sqlLoader.js'
import { initdatabase } from './src/database/initializeDatabase.js'
import { authRoute } from "./src/api/routes.js"
import { verifyAllToken } from './src/api/token.js'
import consts from "./src/constants.js"
import { generateInitKey } from './generate_server_token.js'


/*
  DATABASE SETUP
*/
await database.Connect()
loadSQLDir()

await initdatabase()




/*
  EXPRESS SETUP
*/
const app = express()
app.use(express.json());


setInterval(verifyAllToken, consts.ONE_HOUR * 6)

//self call
app.get('/health', (req, res) => {
  res.send({ response:"OK" })
})

authRoute(app)
//in main route file
app.listen(process.env.API_PORT, () => {
  
  console.log(`Example app listening on port ${process.env.API_PORT}`)
})