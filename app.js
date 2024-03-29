const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.static('dist', { dotfiles: 'allow' } ))

app.get('/', (req, res) => res.sendFile('dist/index.html'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
