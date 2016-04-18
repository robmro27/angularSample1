(function() {
    
    var app = angular.module('store', []); 
    
    app.controller("StoreController", function() {
        this.products = gems
    });
    
    var gems = [
        {
            name: "Dodecahedron",
            price: 2.95,
            description: "...",
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full: "img1",
                    thumb: "img11",
                },
                {
                    full: "img2",
                    thumb: "img22",
                }
            ]
        },
        {
            name: "Pentagonal Gem",
            price: 5.55,
            description: "...",
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full: "img1",
                    thumb: "img11",
                },
                {
                    full: "img2",
                    thumb: "img22",
                }
            ]
        }
    ]
     
})();

