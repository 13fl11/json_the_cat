const request = require('request');


const breedFetcherDescription = function (breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, function (error, response, body) {
    if (error) {
      return callback(error);
    }
    if (response.statusCode !== 200) {
      return callback("site error:", null)
    }
    const data = JSON.parse(body)
      //console.log(data);
      //console.log(typeof data);
    if (data.length === 0) {
      error = "Requested breed was not found";
      return callback(error);
      } else {
        return callback(null, data[0].description);
      }  
  })
}


module.exports = { breedFetcherDescription };
