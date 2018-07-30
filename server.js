const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


// routes for api
const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const exercises = require('./routes/api/exercises')

const app = express();
// middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())




// mLab info for db 
const database = require('./config/keys').mongoURI

// Connecting to MongoDB
mongoose
.connect(database)
.then(() => console.log('MongoDB up and running!'))
.catch(err => console.log(err))


app.get('/', (req, res) => res.send('Working'))



// App Routes
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/exercises', exercises)


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running ${port}`))