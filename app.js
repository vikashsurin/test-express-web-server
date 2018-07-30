const express = require('express');

const ejs = require('ejs');


const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/',(req , res)=>{
    res.render('index');
});
app.get('/home', (req , res )=>{
    res.render('index');
});
app.get('/login', (req, res) => {
    res.render('login');
});
app.get('/about-us',(req, res)=>{
    res.render('aboutus');
});
app.get('/reach-us', (req, res) =>{
 res.render('reachus');
});
app.listen(port, ()=>{
    console.log('server is runnig at port 3000....');
});