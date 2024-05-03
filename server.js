const express = require('express');
const mysql = require('mysql2');
const axios = require('axios');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
const path = require('path');

dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'karpenko',
    password: process.env.DB_PASS || 'vemRbvTh1g54a',
    database: process.env.DB_NAME || 'metallserviceDB',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    const data = {
        path: 'index.html',
        title: 'Метал сервис',
        message: 'Ви здогадуєте про назву сайту?',
    };
    res.render('index', data);
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running at http://localhost:${process.env.PORT || 3000}`);
});
