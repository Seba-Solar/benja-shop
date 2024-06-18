const express = require('express');
const app = express();
const path = require('path');
const port = 8080;
const mysql = require('mysql');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));


let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'benjas'
  });


app.listen(port,()=>{
    console.log(`Servidor: http://localhost:${port}`)
});
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/index.html'));
});

