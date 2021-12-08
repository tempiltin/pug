const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res) => {
    // res.send('Hello express js')
    // res.sendFile(path.join(__dirname, 'index.html'))
    res.render('index', {
        title: 'About'
    })
})

app.set('view engine', 'pug')
app.use(express.static('public'))



app.get('/books', (req, res) => {
    res.sendFile(path.join(__dirname, 'books.html'))
})

app.listen(3000, () => {
    console.log('Server is running on port 3000...');
})