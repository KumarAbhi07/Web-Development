const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public')) // it is used to show the file in public

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/contact', (req, res) => {
  res.send('Contact us')
})
app.get('/about', (req, res) => {
  res.send('About US')
})
app.get('/connect', (req, res) => {
  res.send('Hello connections')
})

app.get('/blogs/:slug', (req, res) => {
    //logic to fetch slug
    // console.log(req)
    console.log(req.params) //output(slug: 'intro-to-js'')
    
    console.log(req.query) // output(slug: 'intro-to- padosi'', 'name': 'harry' )
    
    res.send(`hello ${req.params.slug}`)
})
// app.get('/blogs/intro-to-js', (req, res) => {
//     //logic to fetch intro to js from the db 
//     res.send('Hello intro to js ')
// })

// app.get('/blogs/intro-to-python', (req, res) => {
//     //logic to fetch intro to js from the db 
//     res.send('Hello intro to pythonm ')
// })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
