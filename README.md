# Kittensaver app
 You have a basic interfaces, where you have to guess the number of the kitten hidden behind a number combindation. Try your luck to free the kitten.
## Stack
- expressjs
- bare html frontend
## Installation
- npm install
- node index.js
## usage
- Start liveserver in frontend
- Use interface to guess the kitten
- curl http://localhost:3000/kitten\?kitten\=54
- curl http://localhost:3000/survivors
- curl -X POST -d '{"kitten": "43"}' -H "Content-Type: application/json" http://localhost:3000/kitten 
	- {"message":"Saved Kitten Linda"}%
