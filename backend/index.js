var express = require('express')
var cors = require('cors')
var app = express()
app.use(express.json());
app.use(cors())
// TODO we want to persist the state of the released kitten also after server stop
// 1. Before we did curl localhost:3000/kitten?kitten=54  54 is actually POST info. Make app.get('/kitten ) to a POST endpoint
// 2. Call that endpoinit from the fronend also with POST
// 3. Install postgres npm packaae
// 3. Store that stuff in the DB
// 4. Read from DB in /survivors

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



app.post('/kitten', (req, res) => {
    console.log(Date.now(), req.body) // Print a time stamp in the server console

    const foundKitten = prisonedKittens.find(kitten => req.body.kitten == kitten.code)
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