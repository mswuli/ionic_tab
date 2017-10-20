
// 整个项目的启动文件
angular.module('starter', ['ionic','route','ionicLazyLoad'])
    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    });

// 总路由模块
angular.module('route', [
  'tabs.route',
  'category.route',
  'home.route',
    'cart.route',
    'goodsList.route'
])
  .config(function($stateProvider, $urlRouterProvider) {
    // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/tab/category');
  });
