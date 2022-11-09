const chalk = require('chalk')
const express = require('express')
const debug = require('debug')
const app = express()
const port = 3000

app.get("/", (req,res) => {
    res.send('Hello borntoDev')
})

app.listen(port, ()=>{
    console.log("Listening on port "+ chalk.red(port))
})