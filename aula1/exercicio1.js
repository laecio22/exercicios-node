//função que cria um servidor  e executa um comando para renderizar na tela o hello world
const http = require('http')

const hostname = 'localhost'
const port = '8081'

const server = http.createServer((req,res)=>{
	res.end('Hello World com node.js')
})

server.listen(hostname , port, ()=>{
   console.log(`Servidor Funcionando em ${hostname}:${port}`)
})
