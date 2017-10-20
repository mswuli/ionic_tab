// 分类页面
angular.module('category.route', ['category.controller'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tab.category', {
        url: '/category',
        views: {
          'tab-category': {
            controller:'CategoryCtrl',
            templateUrl: 'res/category/category.html'
          }
        }
      })
  });
