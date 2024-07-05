import express from "express"
const app = express()
const port = 3000

app.get("/", (req, res) =>{
    res.send('<h1>Home Page</h1>')
})

app.get("/contact", (req, res) =>{
    res.send('<p>+995 000 000 000</p>')
})

app.get("/about", (req, res) =>{
    res.send('My name is Giga Kurtanidze')
})

app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})