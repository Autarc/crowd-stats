require('pretty-error').start(function(){

  // install ? ||
  // require('node-jsx').install(); || couldn tinstall before -> express throughs an error
  // works as using amd


  require('./lib/app.js');
});
