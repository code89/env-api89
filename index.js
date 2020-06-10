require('dotenv').config()
const express = require('express')
const app = express()


console.log("Hi!")
console.log("Your API_KEY is: ", process.env.API_KEY)
console.log(process.env.PROCESSOR_ARCHITECTURE)
console.log(process.env.PROCESSOR_IDENTIFIER)
console.log(process.env.USERDOMAIN)
console.log(process.env.USERNAME)

const port = 3000

app.get('/', (req, res) => res.send('<h1>env-app</h1>'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

