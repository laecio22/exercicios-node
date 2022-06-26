const express =  require("express")

const app = express()

app.get("/" , function(req, res){
 
    res.sendFile(__dirname + "/html/index.html")
})

app.get("/sobre" , function(req , res){
   res.sendFile(__dirname + "/html/sobre.html")
})

app.get("/contato" , function(req, res){
     res.sendFile(__dirname + "/html/contato.html")
})

app.get("/aluno/:nome/:idade" , function(req, res){
    res.send(`<h1> O aluno se chama ${req.params.nome} </h1> <h2>a  idade é ${req.params.idade}</h2>`  )
})

app.listen("8081", function(){
    console.log("Servidor rodando com sucesso!")
})