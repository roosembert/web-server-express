const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/parciales');

// middleware --- carga los datos publicos
app.use(express.static(__dirname + '/public'));

// Express  hbs engine
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

   res.render('home', {
      nombre: 'rocko b m',
      anio: new Date().getFullYear()
   });
});

app.get('/about', (req, res) => {

   res.render('about',{
      anio: new Date().getFullYear()
   });
});
app.listen(port, () => {
   console.log(`Escucchando en el port ${port}`);
});
