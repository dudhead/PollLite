// public/js/controllers/SearchCtrl.js
angular.module('SearchCtrl', []).controller('SearchController', ['$scope','RestApi',function($scope,RestApi) {
    
    $scope.clickAlert = function(book){
        var promise = RestApi.postBooks(book);
        promise.then(function(payload) { 
            alert(payload.data.message);
        },
        function(errorPayload) {
          alert('failure loading movie', errorPayload);
        });
        return promise;
    }
    
    $scope.searchList = function(message){
        var promise;
        if(message === ''){
            promise = {};
            promise = RestApi.getBooks();
            promise.then(function(payload) { 
              $scope.Books = payload.data;
            },
            function(errorPayload) {
              console.log('failure loading movie', errorPayload);
            });
            return promise;
        }
        else {
            promise = {};
            promise = RestApi.getBooksByISBN(message);
            promise.then(function(payload) { 
              $scope.Books = payload.data;
            },
            function(errorPayload) {
              console.log('failure loading movie', errorPayload);
            });
            return promise;
        }
    }
}]);

