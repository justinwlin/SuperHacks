const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const image = require('./controllers/image')

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res)=>{res.send('it is working');})
app.post('/traffic', (req, res)=>{image.traffic(req, res)})
app.listen(3000);
