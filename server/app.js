require('dotenv').config() // Load environment variables from .env file
const express = require('express')
const app = express()
const mongoose = require('mongoose');

const workoutRoutes = require('./routes/workout')

app.get('/', workoutRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Example app listening on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error)
    })