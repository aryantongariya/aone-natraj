const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')

connectToMongo();
const app = express()
const port = 5005

app.use(cors())

//  Middleware
app.use(express.json())


// Available Routes
// app.use('/api/auth', require('./routes/auth'))
// app.use('/api/notes', require('./routes/notes'))


app.get('/', (req, res) => {
  res.send('Hello Aryan!')
})

app.listen(port, () => {
  console.log(`A1natraj app listening at http://localhost:${port}`)
})