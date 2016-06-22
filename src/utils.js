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
/**
As image load errors do not bubble up to window, this method observes failures
on any image resource
@param {Object} The image to attach listener to
@param {String} collectorUrl url of the tracking pixel
*/
function bindImgError(image, collectorUrl){
  image.addEventListener('error', function(e){
    var errorObject = {
      message: e.target.currentSrc,
      filename: e.srcElement.baseURI
    };
    sendError(errorObject, collectorUrl);
  });
}

module.exports = {
  sendError: sendError,
  bindImgError: bindImgError
};
