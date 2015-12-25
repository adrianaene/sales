var myApp = angular.module('myApp', []);

myApp.controller('myAppCtrl', function ($scope) {

  $scope.papers = [{ name : 'Click', category : 'Tabloide'},
    { name : 'Practic in bucatarie', category : 'Culinar'},
    { name : 'Libertatea', category : 'Tabloide'},
    { name : 'Click! de Duminica', category : 'Publicatie de weekend'},
    { name : 'Libertatea pentru femei', category : 'Femei'},
    { name : 'Click pofta buna!', category : 'Culinar'},
    { name : 'TVMania', category : 'Ghid TV'},
    { name : 'Click! pentru femei', category : 'Femei'},
    { name : 'Libertatea - Editia de duminica', category : 'Publicatie de weekend'},
    { name : 'Femeia de azi', category : 'Femei'},
    { name : 'TV Satelit', category : 'Ghid TV'},
    { name : 'Click SANATATE', category : 'Sanatate & ingrijire personala'},
    { name : 'Libertatea pentru femei - Retete', category : 'Culinar'},
    { name : 'Sanatatea de azi', category : 'Sanatate & ingrijire personala'},
    { name : 'Gazeta Sporturilor', category : 'Sport'},
    { name : 'Ziarul Lumina', category : 'Religie'},
    { name : 'Lumina de duminica', category : 'Religie'},
    { name : 'Practic Carticica Practica', category : 'Culinar'}];

  $scope.rowClicked = function(index){
    //alert(index);
  };

  $scope.bookCliked = function(index){    
    $("#bookID" + index).attr('src', 'check.png');
  };

});
