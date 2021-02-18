const express = require('express')
const app = express()
const port = 5000

// Set EJS as templating engine
app.set('view engine', 'ejs')

// Static files are in public folder
app.use(express.static('public'))

// Get homepage
app.get('/', (req, res) => {
   res.render('pages/home', {
    username: 'ChrisBreezy',
    age: '21',
    favoritePrimary: 'AN-94',
    favoriteSecondary: 'Combat Knife'
})
})

// Get about page
app.get('/profile', (req, res) => {
    res.render('pages/my_profile')
 })

// Get login page
app.get('/settings', (req, res) => {
    res.render('pages/settings')
 })

// Get 404 page
app.use(function(req, res){
    res.status(404).send('404 not found')
})

// Set port and verify the server is working
app.listen(port, function(){
    console.log(`Server is up and running on localhost:${port}`)
})