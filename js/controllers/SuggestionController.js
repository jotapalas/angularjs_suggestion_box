app.controller('SuggestionController', [
  '$scope',
  'suggestions',
  '$routeParams', 

  function($scope, suggestions, $routeParams){
    console.log("HOLA");
    $scope.suggestion = suggestions[$routeParams.id];

    $scope.upvote = function(comment){
      comment.upvotes++;
    };

    $scope.addComment = function(){
      //if input empty, don't submit
      if(!$scope.comment || $scope.comment === {}) {
        return;
      }
      
      //push suggestion comment in suggestions.js
      $scope.suggestion.comments.push({
        title: $scope.comment.title,
        description: $scope.comment.description,
        author: $scope.comment.author,
        upvotes: 0,
      });
      
      //after submit, clear input
      $scope.comment = {};
    };
  }
]);