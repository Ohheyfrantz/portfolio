const express = require('express')
const app = express()
const https = require("https");

const port = 3001


app.use(express.static("public"))

app.get('/', (req, res) => res.sendFile(__dirname + "/index.html"))
app.listen(process.env.PORT || 3001, () => console.log(`Server is running in port 3001`))