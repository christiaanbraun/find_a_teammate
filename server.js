const express = require('express')
const app = express()
const port = 5000

// Set EJS as templating engine
app.set('view engine', 'ejs')
// Set views as views dir

// Get homepage
app.get('/', (req, res) => {
   res.render('home')
})

// Set about page
app.get('/profile', (req, res) => {
    res.render('my_profile')
 })

// Set login page
app.get('/settings', (req, res) => {
    res.render('settings')
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