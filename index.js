var express = require('express')
var app = express()

app.get('/', function(req, res){
    res.send('kaas')
})

app.get('/about', function(req, res){
    res.send('about')
})

app.get('/login', function(req, res){
    res.send('login')
})

app.use(function(req, res){
    res.status(404).send('404 not found')
})


// Static files are in public folder
app.use(express.static('public'))

app.listen(4000)
console.log('Test 1 2 1 2');