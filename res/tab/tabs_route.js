// tab功能路由
angular.module('tabs.route', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'res/tab/tab.html'
      })
  });
