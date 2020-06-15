const express = require('express')
const app = express()
const port = 3000

app.use(express.static('dist'))

app.get('/', (req, res) => res.sendFile('dist/index.html'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))