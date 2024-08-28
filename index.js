const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const convert = require('./routes/praktikumRoutesSoal2')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use('/convert', convert)

app.get("/test", (req, res) => {


    let response = {
        message: "Ini end-point pertama ku",
        method: req.method,
        code: res.statusCode,
        query: req.query
    }
    res.json(response)
})

app.listen(8000, () => {
    console.log("Server run on port 8000");
})
