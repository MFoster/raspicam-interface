require.config({
					paths : {
            "backbone" : "vendor/backbone-amd/backbone",
            "underscore" : "vendor/underscore-amd/underscore",
            "jquery" : "vendor/jquery/jquery",
            "marionette" : "vendor/marionette/lib/core/amd/backbone.marionette",
            "backbone.wreqr" : "vendor/backbone.wreqr/lib/amd/backbone.wreqr",
            "backbone.babysitter" : "vendor/backbone.babysitter/lib/amd/backbone.babysitter",
            "app" : "src/ui/app",
            "template" : "src/ui/template/compile"
            //"require" : "vendor/requirejs/require"
          },
          shim : {
            jquery : {
              exports : "jQuery"
            }
          }
    		});