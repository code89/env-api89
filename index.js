require('dotenv').config()
const express = require('express')
const app = express()


console.log("Hi!")
console.log("Your API_KEY is: ", process.env.API_KEY)
console.log(process.env.PROCESSOR_ARCHITECTURE)
console.log(process.env.PROCESSOR_IDENTIFIER)
console.log(process.env.USERDOMAIN)
console.log(process.env.USERNAME)


app.get('/', (req, res) => res.send('<h1>env-app</h1>'))

app.get('/api', (req, res) => res.send(process.env.API_KEY))


const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

