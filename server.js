const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = 5000

// Set the parser for later use
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Set EJS as templating engine
app.set('view engine', 'ejs')

// Static files are in public folder
app.use(express.static('public'))

// Get homepage
app.get('/', (req, res) => {
   res.render('pages/home')
})

// Get about page
app.get('/profile', (req, res) => {
    res.render('pages/my_profile')
 })

// Get login page
app.get('/settings', (req, res) => {
    res.render('pages/settings')
 })
 
 // Handle post request on settings page and log data to console
 app.post('/settings', urlencodedParser, (req, res) => {
    console.log(req.body)
    res.render('pages/settings-succes')
 })

// Get 404 page
app.use(function(req, res){
    res.status(404).send('404 not found')
})

// Set port and verify the server is working
app.listen(port, function(){
    console.log(`Server is up and running on localhost:${port}`)
})