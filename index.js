const express = require('express');
const app = express();
const path = require('path');

const ejs = require('ejs');

// Создание методов для вывода статических файлов, таких как css, js, images, fonts, etc.
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/inputmask/dist')))

// Создание маршрута для index страницы
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}./public/index.html`);
});

// Создание маршрута для authorization страницы
app.get('/authorization', (req, res) => {
    res.sendFile(path.join(__dirname, './public/authorization.html'));
});

app.listen(34567, () => {
    console.log('Application listening on port 3333!');
});

ejs.renderFile('views/pagehome.ejs', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  });