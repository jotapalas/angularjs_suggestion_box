app.controller('MainController', [
  '$scope',
  'suggestions', 

  function($scope, suggestions){
    $scope.suggestions = suggestions;
  }
]);