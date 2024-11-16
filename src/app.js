const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('hello world');
})

app.get('/about',(req, res)=>{
    res.send('hello from about page');
    
})


app.listen(3000, ()=>{
    console.log('app is running on port 3000');  
})