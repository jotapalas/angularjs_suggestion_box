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
      let commentIsEmpty = !$scope.comment || $scope.comment === {};
      let noDescription = !commentIsEmpty && (!$scope.comment.description || $scope.comment.description === '');
      if(commentIsEmpty || noDescription) {
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