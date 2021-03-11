const express = require ("express") //pedindo o express, o epress vai voltar e ficar na variavel express
const server = express ()//executando a função express

//pegar o banco de dados
const db = require("./database/db")


// antes de chegar no GET, configurar pasta publica .. css, js
server.use(express.static("public"))

//habilitar  o uso do req.body
server.use(express.urlencoded({ extend: true}))

//utilizando template engine
const nunjucks = require ("nunjucks") //dando up no html. Dependencia dentro do node
nunjucks.configure("src/views",{
    express: server,
    noCache: true //enquanto testa, não tenha cache

})

// configurar caminhos da aplicação
// página inicial
//req: Requisição (pedido)
//res: Resposta
server.get("/", (req, res) => {
    return res.render("index.html", { title: "Um titulo"})//title, variavel la no index.htmldirname, diretorio que estou no momento src...antes do render res.sendFile(__dirname + "/views/index.html")
        
})

server.get("/create-point", (req, res) => {

    //req.query : query strings da nossa url (parametros)
    console.log(req.query)


    return res.render("create-point.html")//dirname, diretorio que estou no momento src. Como nunjacks está ligado ao express, ele ja entende o render, sem ter que passsar o caminho e concatenar
        
})

server.post("/savepoint", (req, res) => {//fazendo um post no create ponit
       
   // console.log(req.body)

   //Inserir dados no banco de dados
    // Inserir dados na tabela

            const query =  `
            INSERT INTO places  (
            image,
               name,
             address,
                address2,
               state,
               city,
                items
                ) VALUES (?,?,?,?,?,?,?);

            `

  
         const values = [
             req.body.image,
             req.body.name,
             req.body.address,
             req.body.address2,
             req.body.state,
             req.body.city,
             req.body.items

           ]

           function afterInsertData(err) {

            if(err) {
                console.log(err)
                return res.send("Erro no cadastro!")  
                
            }
                
                console.log("Cadastrado com sucesso")
            console.log(this)//traz o que esta escrito dentro da funcao

            return res.render("create-point.html", { saved: true})  
     }

     db.run(query, values, afterInsertData)
      
    
    

})


server.get("/search", (req, res) => {

const search = req.query.search
if(search == "") {
    //pesquisa vazia
       //mostrar a pagina html os dados do banco de dados
       return res.render("search-results.html", { total: 0})
}


    //pegar dados do banco de dados
     db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {

              if(err) {
               return console.log(err)
             }
           
          const total = rows.length
             //traz o que esta escrito dentro da funcao
             //mostrar a pagina html os dados do banco de dados
             return res.render("search-results.html", { places: rows, total})
            })


    //dirname, diretorio que estou no momento src. Como nunjacks está ligado ao express, ele ja entende o render, sem ter que passsar o caminho e concatenar


})



//ligar o servidor
server.listen(3000)

