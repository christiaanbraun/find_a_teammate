const express = require('express')
const app = express()
const port = 5000

// Set EJS as templating engine
app.set('view engine', 'ejs')

// Set homepage
app.get('/', function(req, res){
    res.send('kaas')
})

// Set about page
app.get('/about', function(req, res){
    res.send('about')
})

// Set login page
app.get('/login', function(req, res){
    res.send('login')
})

// Set 404 page
app.use(function(req, res){
    res.status(404).send('404 not found')
})

// Static files are in public folder
app.use(express.static('public'))

// Set port and verify the server is working
app.listen(port, function(){
    console.log(`Server is up and running on ${port}`)
})