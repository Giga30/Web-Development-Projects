import express from "express"
import bodyParser from "body-parser"
import { dirname } from "path"
import { fileURLToPath } from "url"
let __dirname = dirname(fileURLToPath(import.meta.url))
let userIsAuthorised = false
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))

function passwordCheck(req, res, next){
    if(req.body.password === 'Giga'){
        userIsAuthorised = true
    }
    next()
}

app.use(passwordCheck)

app.get('/', (req, res) =>{
    console.log(req.body)
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/check', (req, res) =>{
    if(userIsAuthorised){
        res.sendFile(__dirname + '/public/secret.html')
        userIsAuthorised = false
    }else{
        res.sendFile(__dirname + '/public/index.html')
    }
})

app.listen(port, () =>{
    console.log("Running on port " + port)
})