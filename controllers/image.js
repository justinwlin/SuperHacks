const Clarifai = require('clarifai');

//You must add your own API key here from Clarifai.
const app = new Clarifai.App({
 apiKey: '150500f8fb424f57a89dbb731b79ae2a'
});

const handleApiCall = (req, res) => {
  res.send(req.body);
  // app.models
  //   .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
  //   .then(data => {
  //     res.json(data);
  //   })
  //   .catch(err => res.status(400).json('unable to work with API'))
}

module.exports = {
  handleApiCall
}