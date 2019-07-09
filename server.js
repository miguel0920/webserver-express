const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

//Express HBS Engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     let salida = {
//         nombre: 'Miguel Barahona',
//         edad: 22,
//         url: req.url
//     };
//     res.send(salida);
// });

app.get('/', (req, res) => {
    res.render('home', {
        Nombre: 'Miguel Ángel'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/data', (req, res) => {
    res.send('Hola Data');
});

app.listen(port, () => console.log(`Escuchando por el puerto ${port}`));