module.exports = function(app){

    const bodyParser = require('body-parser')
    const urlencodedParser = bodyParser.urlencoded({ extended: false })

// Get homepage
    app.get('/', (req, res) => {
        res.render('pages/home')
 })
  n
// Get profile page
    app.get('/profile', (req, res) => {
        res.render('pages/my_profile')
  })
 
// Get settings page
    app.get('/settings', (req, res) => {
        res.render('pages/settings')
  })
  
// Handle post request on settings page
    app.post('/settings', urlencodedParser, (req, res) => {
        console.log(req.body)
        res.render('pages/settings-succes', {data: req.body})
  })

// Handle edit request on settings page 
    app.post('/settings-succes', urlencodedParser, (req, res) => {
        console.log(req.body)
        res.render('pages/settings', {data: req.body})
})
 
// Get 404 page
    app.use(function(req, res){
        res.status(404).send('404 not found')
 })

} 


