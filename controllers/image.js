const Clarifai = require('clarifai');

//You must add your own API key here from Clarifai.
const app = new Clarifai.App({
 apiKey: '5afcdd03318441ba8d1cdccdb1672d27'
});
/*
{
    "input": "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/b/bb/Tony_Stark_Promo.jpg/revision/latest?cb=20141129202546"
}
*/
const handleApiCall = (req, res) => {
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then(data => {
      res.json(data);
    })
    .catch(err => res.status(400).json('unable to work with API'))
}

app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg').then(
  function(response) {
    console.log(response);
  },
  function(err) {
    console.error(err);
  }
);

module.exports = {
  handleApiCall
};
