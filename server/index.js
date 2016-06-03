var connect= require('connect');
var serveStatic = require('serve-static');
console.log(__dirname+'/');
connect().use(serveStatic(__dirname+'/../dist/'))
  .listen(8081,function(){
    console.log('Server running at 8081...')
  });
