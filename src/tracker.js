var configs = require('./configs');
var utils = require('./utils');
//Be a good citizen and respect doNotTrack
var dnt = navigator.doNotTrack || window.doNotTrack ||  navigator.msDoNotTrack;
if(!dnt){
  window.addEventListener('error', function(e) {
    var errorObject = {
      message: e.message,
      filename: e.filename,
      lineno: e.lineno,
      colno: e.colno
    };
    utils.sendError(errorObject, configs.collectorUrl);
  });
  //Attach listener to error load failures which do not bubble up to window.
  if(configs.imageFailures){
    window.addEventListener('DOMContentLoaded', function(){
      var images = document.querySelectorAll('img');
      for(var i = 0; i < images.length; i++){
        utils.bindImgError(images[i], configs.collectorUrl);
      }
    });

  }
}
