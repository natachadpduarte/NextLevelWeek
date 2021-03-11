// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose() //.verbose objeto...sempre que tiver algum problema, o verbose ira me dar mais informações

//Criar o objeto que ira fazer operacoes no banco de dados
const db = new sqlite3.Database("./src/database/database.db") //new, estou criando um objeto. criando datavase,db, dentro desse caminho

module.exports = db
// utilizar o obejto de banco de dados para nossas operações

//db.serialize(() => {
   // criar uma tabela com comandos sql
//     db.run(`
     
 //       CREATE TABLE IF NOT EXISTS places (

   //         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         image TEXT,
//            name TEXT,
//            address TEXT,
 //           address2 TEXT,
 //           state TEXT,
 //           city TEXT,
 //           items TEXT
 //       );
  //   `)

   // Inserir dados na tabela

  //          const query =  `
    //        INSERT INTO places  (
    //        image,
   //             name,
    //          address,
     //           address2,
     //          state,
     //          city,
      //          items
      //          ) VALUES (?,?,?,?,?,?,?);

       //     `

  
         //const values = [
//           "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=874&q=87",
  //                "Colectoria",
    //                "Guilherme Gemballa, Jardim América",
      //              "Número 260",
  //                "Santa Catarina",
  //               "Rio do Sul",
  //                "Resíduos Eletrônicos, Lâmpadas"

    //       ]

      //     function afterInsertData(err) {

        //    if(err) {
          //      return console.log(err)
            //   }
                
     //           console.log("Cadastrado com sucesso")
  //          console.log(this)//traz o que esta escrito dentro da funcao

           
    // }

    // db.run(query, values, afterInsertData)
      
              //Consultar dados da tabela
        //  db.all(`SELECT * FROM places`, function(err, rows) {

          //    if(err) {
            //   return console.log(err)
           //  }

           //  console.log("Aqui estão seus registros:")
           // console.log(rows)//traz o que esta escrito dentro da funcao
       //  })

          
          //Deletar dados da tabela
           // db.run(`DELETE FROM places WHERE id = ?`, [13], function(err){
           // if(err) {
               //    return console.log(err)
             //  }

                //console.log("Registro deletado com sucesso!")
                

          //})//deletar registro com id 1



              
//})//serialize vai rodar um conjunto de dados. rodo uma função que ira rodar alguns passos a passos