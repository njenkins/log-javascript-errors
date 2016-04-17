/**
Generates a request for tracking pixel with required paramaters;
@param {Object} errorObject Object containing error parameters to be sent
@param {String} collectorUrl url of the tracking pixel
*/
function sendError(errorObject, collectorUrl){
  var errorString = Object.keys(errorObject).map(function(key) {
  return key + '=' + encodeURIComponent(errorObject[key]);
  }).join('&');
  var i = document.createElement("img");
  i.src = collectorUrl + '?' + errorString;
}

module.exports = {
  sendError: sendError
};
