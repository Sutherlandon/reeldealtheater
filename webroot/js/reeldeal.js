window.onload = function(){
  console.log("Stuff");
  var imdb = require('imdb-api');
  imdb.get('Rogue One').then(function(data) { console.log("data:" + data) });
}
