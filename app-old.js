const http = require('http');

http.createServer((req, res) => {
   res.writeHead(200, {'Content-type':'application/json'});
   let salida = {
      nombre: 'Roos',
      age : 27,
      url: req.url
   }
   res.write(JSON.stringify(salida));
   // res.write('Holi');
   res.end();
}).listen(8080);

console.log('Escuchando el port 8080');
