var express = require('express');
var router = express.Router();

const users = require('../users.json');

/* GET users listing. */
router.post('/', function(req, res, next) {
    let username = req.body.username;
    let email = req.body.email;
    let psw = req.body.psw;
    let rpsw = req.body.rpsw;

    if(psw == rpsw){
        res.render('account', {title:'Prova', date: new Date(),user: username, mail: email}); 
    } else{
        res.send("<p style= \"color:red\"> Le password non coincidono!</p>");
    }
  
});

router.get('/', function(req, res, next){
    console.log(users);
});


module.exports = router;

