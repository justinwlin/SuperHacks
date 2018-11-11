const Clarifai = require('clarifai');
let app = new Clarifai.App({apiKey: 'fa72cd380d3e4218b151b2f97d3a7e73'});
const traffic = (req, res) => {
  app.models.predict({id:'Traffic-Detection', version:'99e6c3c31d1747de9d778911bcd95ca0'}, req.body.input).then(
    function(response) {
      let status = response.outputs[0].data.concepts[0].id;
      let percentage = response.outputs[0].data.concepts[0].value;
      let returnResp = status + ";" + percentage;
      res.send(returnResp);
    },
    function(err) {
      // there was an error
    }
  );
}

module.exports = {
  traffic
};

