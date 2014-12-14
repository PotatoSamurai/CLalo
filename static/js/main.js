  requirejs.config({
    baseUrl: 'static/js/',
    paths: {
      angular: 'http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.3/angular.min',
      jquery: 'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min',
      materialize: 'materialize'
    },
    shim: {
      materialize: ['jquery']
    }
  });
  requirejs(['materialize'],function(){
    $(document).ready(function(){
      $('ul.tabs').tabs();
    });
  });
