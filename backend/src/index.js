const express = require ('express')
const cors = require('cors')
const routes = require ('./routes') // ./ referencia a mesma pasta do arquivo index
const multer = require("multer")

/*novas funcionalidades */
const storage = multer.diskStorage({
    destination: function(request, file, cb){
        cb(null, "uploads/")
    },
    filename: function(request, file, cb){
            cb(null, file.originalname)
        }
})

const upload = multer({storage})
/*termina aqui*/


const app = express();



app.use(cors())
app.use(express.json())
app.use(routes)
/*
 * Métodos HTTP:
 * GET: Busca informação no backend
 * POST: Cria informação no backend
 * PUT: Altera informação no backend
 * DELETE: Deleta informação no backend
 */

 /**
 * Parâmetros:
 * Query Params: Parametros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Identifica recursos
 * Request Body: corpo da requisição, para criar ou alterar recursos
 */

 /* daqui pra baixo adicionei novas funcionalidades */


app.get("/", (request, response) => {
    response.render("index")
})

app.post("/upload", upload.single("file"),(request, response) =>{
    response.send("Arquivo recebido")
})
/*e elas terminam aqui*/

app.listen(3333)