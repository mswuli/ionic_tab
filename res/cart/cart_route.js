angular.module("cart.route",[])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tab.cart', {
                url: '/cart',
                views: {
                    'tab-cart': {
                        templateUrl: 'res/cart/cart.html'
                    }
                }
            })
    });
