(function() {
    
    var app = angular.module('store', ['app-products']); 
    
    // store controller
    app.controller("StoreController", [ '$http' , function($http) {
        var store = this;
        $http.get('products.json').success(function(data) {
            store.products = data;
        });
    }]);
    
})();

