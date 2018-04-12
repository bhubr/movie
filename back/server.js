const express = require('express')
const path = require('path')
const app = express()

// Chemin parent du répertoire back (__dirname est le répertoire courant)
const rootPath = path.normalize(`${__dirname}/..`)
// Permet à l'application de servir des fichiers statiques
app.use(express.static(rootPath))

console.log('Server listening on http://127.0.0.1:4000')
app.listen(4000)
