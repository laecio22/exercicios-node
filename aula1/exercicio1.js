//função que cria um servidor  e executa um comando para renderizar na tela o hello world
const http = require('http')

http.createServer((req,res)=>{
	res.end('Hello World com node.js')
}).listen(8081)
console.log('Servidor funcionando')