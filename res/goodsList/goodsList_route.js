angular.module("goodsList.route",["goodsList.controller"])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('goodsList', {
                url: '/goodsList/:typeNumber',
                templateUrl: 'res/goodsList/goodsList.html',
                controller:'GoodsListCtrl'
            })
    });

