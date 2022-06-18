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

app.listen("8081", function(){
    console.log("Servidor rodando com sucesso!")
})