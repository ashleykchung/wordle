const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 4000

/*
behind the scenes: middleware
- tells the app to read/write JSON files
*/
app.use(express.json())

// endpoints


