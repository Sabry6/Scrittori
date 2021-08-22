var express = require('express');
var router = express.Router();

const users = require('../users.json');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({ uploadDir:'./uploads'})

router.post('/upload',multipartMiddleware,function(req,res,next){
    res.render('upload',{title:'Upload test',fileName: req.files.filetoupload.name});
    //res.send("File caricato!");
})

router.get('/upload', function(req, res, next){
    res.render('upload', {title:'Upload Test'});
});

/* GET users listing. */
router.post('/', function(req, res, next) {
    let username = req.body.username;
    let email = req.body.email;
    let psw = req.body.psw;
    let rpsw = req.body.rpsw;

    if(psw == rpsw){
        res.render('account', {title:'Prova', date: new Date(),user: username, mail: email}); 
    } else{
        res.send("<p style= \"color:red\"> Le password non coincidono!</p>")
    }
  
});

router.post('/', function(req, res, next) {
    let username = req.body.username;
    let email = req.body.email;
    let psw = req.body.psw;
    let rpsw = req.body.rpsw;

    if(psw != rpsw){
        res.send("<p style= \"color:red\"> Le password non coincidono!</p>")
    } else{
        res.send("<p style= \"color:green\"> Registrazione completata!</p>")
    }
  
});

/*router.get('/', function(req, res, next){
    let mail=req.query.user;
    let user = users.find(el=>el.email == mail); 
    user["color"]=req.query.color;
    res.render('user',user);

});*/

router.get('/:email/:color', function(req, res, next){
    let mail=req.params.email;
    let user = users.find(el=>el.email == mail); 
    user["color"]=req.params.color;
    res.render('user',user);
});

router.get('/users', function(req,res,next){
    res.render('users', {users: users});
});
router.get('/users/:email', function (req,res,next){
    let user = users.find(u =>  u.email == req.params.email);
    res.render('user',user);
});

module.exports = router;

