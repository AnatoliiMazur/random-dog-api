// не заморачивайтесь, эти 2 строки скопированы из документации
var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());
app.get('/', (req, res) => res.redirect('/randomdog'));

// >>> НАЧАЛО КОДА СЕРВЕРА
const dogs = require('./dogs');

app.get('/randomdog', function (req, res) {
  const randomNum = Math.floor( Math.random() * dogs.length );
  res.set('Content-Type', 'application/json');
  res.send({ message: dogs[randomNum] });
});
// >>> КОНЕЦ КОДА СЕРВЕРА

// не заморачивайтесь, эти 3 строки скопированы из документации
app.listen(3000, function () {
  console.log('Example app listening on http://localhost:3000/randomdog');
});
