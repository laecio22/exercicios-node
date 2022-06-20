const express =  require("express")

const app = express()

app.get("/" , function(req, res){
    res.send("Página inicial")
})

app.get("/sobre" , function(req , res){
   res.send("Página sobre")
})

app.get("/contato" , function(req, res){
     res.send("Entre em contato conosco")
})

app.get("/aluno/:nome/:idade" , function(req, res){
    res.send(`<h1> O aluno se chama ${req.params.nome} </h1> <h2>a  idade é ${req.params.idade}</h2>`  )
})

app.listen("8081", function(){
    console.log("Servidor rodando com sucesso!")
})