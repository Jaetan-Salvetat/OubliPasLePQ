import { Client } from 'pg'


let db = {}

db.client = new Client({
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: 'pq_svp',
})


db.Connect = async function() {
    try {
        await db.client.connect()
    } catch(e) {
        console.error(e)
    }
}

db.Disconnect = async function() { 
    try {
        await db.client.end()
    } catch(e) {
        console.error(e)
        process.exit(0)
    }
}

export const database = db