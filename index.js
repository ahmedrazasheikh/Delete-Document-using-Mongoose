import express from 'express';
const app = express()
const port = process.env.PORT || 8000
import './Models/firstSchema.js'
import updateFunction  from  './Models/firstSchema.js'
// import familyMembers from './Models/firstSchema.js';
import Database from './Database/dataBase.js'
// import updateFunction from './Models/firstSchema.js'
// const dataBase = process.env.dataBase || 
// 'mongodb://hello_admin:hello123@0.0.0.0:27017/rtm?authSource=rtm'
const dataBase = process.env.dataBase || 'mongodb://0.0.0.0:27017'
Database(dataBase)
updateFunction('63918ed2d06f9c81883f8f18')
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})