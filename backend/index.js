var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

const port = 3000

app.get('/kitten', (req, res) => {
    console.log(Date.now(), req.query)
    if (req.query.kitten == 5) {
        res.json({ message: 'Saved Kitten!' })
    }
    else {
        res.json({ message: 'Kitten Missed!' })
    }

})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})