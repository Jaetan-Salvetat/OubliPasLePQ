import express  from 'express'
import { database } from "./src/database/connect.js"
import { loadSQLDir } from './src/sql/sqlLoader.js'
import { initdatabase } from './src/database/initializeDatabase.js'

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



//self call
app.get('/health', (req, res) => {
  res.send({ response:"OK" })
})


//in main route file
app.listen(process.env.API_PORT, () => {
  
  console.log(`Example app listening on port ${process.env.API_PORT}`)
})