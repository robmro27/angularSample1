(function() {
    
    var app = angular.module('app-products', []);
    
    app.directive('productTitle', function() {
        return {
           restrict: 'A',
           templateUrl: 'directives/product-title.html',
        };
    });

    app.directive("productReviews", function() {
       return {
           restrict: 'E',
           templateUrl: 'directives/product-reviews.html',
           controller: function () {
                this.review = {};
                this.addReview = function(product) {
                    product.reviews.push(this.review)
                    this.review = {};
                };
           },
           controllerAs: 'reviewCtrl'
       }; 
    });

    app.directive("productPanels", function() {
        return {
            restrict: 'E',
            templateUrl: 'directives/product-panels.html',
            controller: function () {
                this.tab = 1;
                this.selectTab = function(setTab) {
                    this.tab = setTab;
                };
                this.isSelected = function(checkTab) {
                    return this.tab === checkTab;
                }
            },
            controllerAs: 'panel'
        };
    });
    
})();

