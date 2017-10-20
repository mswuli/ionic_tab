// home功能路由
angular.module('home.route', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tab.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'res/home/home.html'
          }
        }
      })
  });
