app.controller('MainController', [
  '$scope',
  'suggestions', 

  function($scope, suggestions){
    $scope.suggestions = suggestions;

    $scope.addSuggestion = function(){
      //if input empty, don't submit
      if(!$scope.title || $scope.title === "") {
        return;
      }
      
      //push suggestion posts in suggestions.js
      $scope.suggestions.push({
        title: $scope.title,
        upvotes: 0,
      });
      
      //after submit, clear input
      $scope.title = '';
    };

    $scope.upvote = function(suggestion){
      suggestion.upvotes++;
    }
  }
]);