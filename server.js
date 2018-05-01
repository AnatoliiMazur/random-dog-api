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

const PORT = process.env.PORT || '3000';
// не заморачивайтесь, эти 3 строки скопированы из документации
app.listen(PORT, function () {
  console.log(`Example app listening on http://localhost:${PORT}/randomdog`);
});
