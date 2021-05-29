const express  = require('express');
const app = express();
const bodyparser = require('body-parser');
//ROUTES
const functions = require('./function/PupeteerFunctions');
//static files
app.use('/beauty',express.static(__dirname+'/beauty'));
app.use('/form',express.static(__dirname+'/form'));
app.use('/function',express.static(__dirname+'/function'));
app.use('/images',express.static(__dirname+'/images'));

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.get('/indexV13.html',(req,res)=>{
    res.sendFile(__dirname + '/indexV13.html');
})

app.listen(5502,()=>{
    console.log("Listening to port 5502 :-)");
})
app.use('/functions',functions);