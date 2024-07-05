import express from "express"
import ejs from "ejs"
import { dirname } from "path"
import { fileURLToPath } from "url"
let __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()
const port = 3000
const date = new Date()

app.get("/", (req, res) =>{
    console.log(date.getDay())
    res.render(__dirname + '/views/express.ejs',
        {
            weekDay: (date.getDay() === 0 || date.getDay() === 6) ? 'the weekend': 'a workday',
        }
    )
})

app.listen(port, () =>{
    console.log('Currently listening on port ' + port)
})