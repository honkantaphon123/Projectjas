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
  res.render('sparkall.ejs')
})
app.get('/room1',(req,res) =>{
  res.render('room1.ejs')
})
app.get('/room2',(req,res) =>{
  res.render('room2.ejs')
})
app.get('/room3',(req,res) =>{
  res.render('room3.ejs')
})
app.get('/room4',(req,res) =>{
  res.render('room4.ejs')
})

app.post('/register',(req,res) =>{})
app.post('/login',(req,res) =>{})
app.post('/sparkall',(req,res) =>{})
app.post('/room1',(req,res) =>{})
app.post('/room2',(req,res) =>{})
app.post('/room3',(req,res) =>{})
app.post('/room4',(req,res) =>{})


app.listen(5000 , () => console.log('Server Started'))