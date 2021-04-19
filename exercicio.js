const http = require('http')

http.createServer((req,res)=>{
	res.end('Hello World com node.js')
}).listen(8081)
//console.log('Servidor funcionando')