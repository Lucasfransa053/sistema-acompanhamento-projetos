const express = require('express')
const cors = require('cors')

const rotasProjeto = require('./rotas/projetosRoutes')


const app = express()

app.use(cors())
app.use(express.json())

app.use("/projetos", rotasProjeto);

module.exports = app;