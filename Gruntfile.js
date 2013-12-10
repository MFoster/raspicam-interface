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
      capture : {
        options : {
          name : "src/ui/capture.js",
          mainConfigFile : "config/dev.js",
          baseUrl : "./",
          out : "src/public/javascripts/capture.js",
        }
      },
      history : {
        options : {
          name : "src/ui/history/main",
          mainConfigFile : "config/dev.js",
          baseUrl : "./",
          out : "src/public/javascripts/history.js",
          optimize : "none"
        }
      }
    },
    jst : {
      compile : {
        options : {
          amd : true,
          namespace : 'compiled',
          processName : function(name){
            var parts = name.split('/');
            var namespace = parts[parts.length - 3];
            var name = parts[parts.length - 1];
            name = (name.match(/^[^.]+/))[0];
            return namespace + '/' + name;
          }
        },
        files : {
          "src/ui/template/compile.js" : "src/ui/**/template/*.html"
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
      jst : {
        files : 'src/ui/**/template/*.html',
        tasks : ['jst'],
        options : {
          interrupt : true
        }
      },
      require : {
        files : 'src/ui/**/*.js',
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
  grunt.loadNpmTasks('grunt-contrib-jst');
  // Default task(s).
  grunt.registerTask('default', ['less', 'requirejs', 'jst', 'watch']);

};
