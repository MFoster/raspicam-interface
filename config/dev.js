require.config({
					paths : {
            "backbone" : "vendor/backbone-amd/backbone",
            "underscore" : "vendor/underscore-amd/underscore",
            "jquery" : "vendor/jquery/jquery",
            //"require" : "vendor/requirejs/require"
          },
          shim : {
            jquery : {
              exports : "jQuery"
            }
          }
    		});