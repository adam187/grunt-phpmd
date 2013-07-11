// Generated by CoffeeScript 1.6.2
/*
grunt-phpmd

Copyright (c) 2013 Andreas Lappe
http://kaeufli.ch
Licensed under the BSD license.
*/
module.exports = function(grunt) {
  var phpmd;

  phpmd = (require('./lib/phpmd')).init(grunt);
  return grunt.registerMultiTask('phpmd', 'Run phpmd', function() {
    phpmd.setup(this);
    return phpmd.run();
  });
};
