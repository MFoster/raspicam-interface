module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          paths: ["assets/css"]
        },
        files: {
          "src/public/stylesheets/main.css": "src/less/interface.less"
        }
      } 
    },
    requirejs: {
      compile : {
        options : {
          name : "src/ui/dev.js",
          mainConfigFile : "config/dev.js",
          baseUrl : "./",
          out : "src/public/javascripts/main.js",

        }
      }
    },
    watch : {
      less : {
        files : 'src/less/*.less',
        tasks : ['less'],
        options : { 
          interrupt : true
        }
      },
      require : {
        files : 'src/ui/*.js',
        tasks : ['requirejs'],
        options : {
          interrupt : true
        }
      }
    }

  });


  // Load the plugin that provides the "less" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  // Default task(s).
  grunt.registerTask('default', ['less', 'requirejs', 'watch']);

};
