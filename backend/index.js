var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

const port = 3000
const prisonedKittens = [ // Server side data - invisible to the frontend/client. Nobody sees what you do in the backend, except you expose it to the clients with res.json/res.text
    {
        name: "Linda",
        code: 43
    },
    {
        name: "Tommy",
        code: 54
    },
    {
        name: "Gaby",
        code: 38
    },
]
// TODO DONE Create a const with released Kittens
let releasedKittens = [] // Here we use a classical stack pattern. First we have a list of prisoneCats, then we fill a `stack` with the ones we wanna filter

app.get('/kitten', (req, res) => {
    console.log(Date.now(), req.query) // Print a time stamp in the server console

    const foundKitten = prisonedKittens.find(kitten => req.query.kitten == kitten.code)
    if (foundKitten) {
        // TODO DONE Push into this array, when somebody submitted a key, that is found in the prisoned kittes
        releasedKittens.push(foundKitten)
        return res.json({ message: 'Saved Kitten ' + foundKitten.name })
    }
    else {
        return res.json({ message: 'Kitten Missed!' })
    }

})
app.get('/survivors', (req, res) => {
    // Respond at /survivors with the previosly filled array
    console.log(releasedKittens) // Just server admins see this message, since is a server side loggin statement
    return res.json({ message: releasedKittens }) // This will response to the client or frontend, who ever calls this endpoint
})

// If you run node index.js, the server starts to listen
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})