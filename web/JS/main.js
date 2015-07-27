/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('myApp', []);
var apiKey = 'MDE5OTkxMjkyMDE0MzgwMTg3MzBiOWEyOA001',
    nprUrl = 'http://api.npr.org/query?id=61&fields=relatedLink,title,byline,text,audio,image,pullQuote,all&output=JSON';

app.controller('PlayerController', ['$scope', function($scope, $http) {
  $scope.playing = false;
  $scope.audio = document.createElement('audio');
  $scope.audio.src = '/media/npr.mp4';
  $scope.play = function() {
    $scope.audio.play();
    $scope.playing = true;
  };
    
  $scope.stop = function() {
    $scope.audio.pause();
    $scope.playing = false;
  };
  $scope.audio.addEventListener('ended', function() {
    $scope.$apply(function() {
      $scope.stop();
    });
  });
  
  $http({
    method: 'JSONP',
    url: nprUrl + '&apiKey=' + apiKey + '&callback=JSON_CALLBACK'
  }).success(function(data, status) {
      
      
      $scope.programs = data.list.story;
  }).error(function(data, status) {
    //error message here
  });
}]);

app.controller('RelatedController', ['$scope', function($scope) {
        
}]);

