const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Post = require('./tcc/Models/Post')
//Body-Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/tcc'));

app.get("/", function(req, res) {
    Post.findAll().then(function(posts){
        res.sendFile(__dirname+ "/tcc/html/home.html", {posts: posts});
    })
});
app.get("/cadastro.html", function(req, res) {
    res.sendFile(__dirname+ "/tcc/html/login.html");
});
app.post("/add", function(req, res) {
    Post.create({
        Nome: req.body.Nome,
        Email:req.body.Email,
        Senha:req.body.Senha
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send('Houve um erro ' + erro)
    })
})
app.get("/login.html", function(req, res) {
    res.sendFile(__dirname+ "/tcc/html/login.html");
});

app.listen(8081, function(){console.log("servidor rodando");});