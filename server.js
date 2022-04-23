require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')


app.set('views', './views')
app.set ('view-engine', 'ejs')
app.use(express.static('public'))

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open',() => console.log('Connected to Database'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.get("/",(req, res) =>{
    res.render("index.ejs");
  });

app.get('/login',(req,res) =>{
    res.render('login.ejs')
})
app.get('/register',(req,res) =>{
  res.render('register.ejs')
})
app.get('/sparkall',(req,res) =>{
  res.render('login.ejs')
})

app.post('/register',(req,res) =>{})
app.post('/login',(req,res) =>{})
app.post('/sparkall',(req,res) =>{})


app.listen(5000 , () => console.log('Server Started'))