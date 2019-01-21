const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())

// '/' == root
app.get('/', function(req, res) { 
    res.json({
        message : 'Hello, World',
    })
})

app.listen(PORT, function () {
    console.log('http://localhost:' + PORT + '에서 서버가 동작중입니다')
})