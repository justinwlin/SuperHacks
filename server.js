const express = require('express')
const app = express();


app.get('/', (req, res)=>{
    res.send('Server Online....');
})

//Ex
/*
app.post('/text', (req, res)=>{

})
*/

app.listen(3000, ()=>{
    console.log("running on 3000");
})