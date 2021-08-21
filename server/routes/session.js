var express = require('express');
var router = express.Router();

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

router.get('/dash', function(req, res, next) {
 
    res.render('index', {title:'Prova', date: new Date()});
  });

module.exports = router;

