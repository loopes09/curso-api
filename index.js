const express = require("express")
const mysql =  require("mysql2/promise")
const rotasProfessores = require("./routes/professores.routes")
const rotasCurso = require("/.routes/cursos.routes")
const app = express ()

app.use(express.json())
app.use("/cursos", rotasCurso)
app.use("/professores", rotasProfessores)

app.listen(3000, () => console.log("API no ar"))