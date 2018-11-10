const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const image = require('./controllers/image')

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res)=>{res.send('it is working');})

app.post('/test', (req, res)=>{
  console.log(req.body);
  const user = {
    user: "test"
  }
  res.send(user);
})

app.post('/test2', (req, res)=>{image.handleApiCall(req, res)})
app.listen(3000);