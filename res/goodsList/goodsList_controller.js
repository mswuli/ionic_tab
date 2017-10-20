/**
 * Created by Administrator on 2017/10/19.
 */
angular.module("goodsList.controller",["goodsList.service"])
    .controller("GoodsListCtrl",function($scope,GoodsListFty){
        //列表数据
        $scope.data = [];
        $scope.$on('$ionicView.beforeEnter',function(){
            $scope.func_refreshGoodsList();//初始化数据
        })

        /**
         *页面参数
         */
        $scope.paggingInfo = {
            pageNum:1,
            pageSize:10,
            typeNumber:''
        }

        $scope.func_refreshGoodsList = function(){
            $scope.data = GoodsListFty.refreshGoodsList();
            //console.log($scope.data)
        }

        $scope.func_loadMoreGoodsList = function(){

        }
    })