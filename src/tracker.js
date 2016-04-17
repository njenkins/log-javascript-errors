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
}
