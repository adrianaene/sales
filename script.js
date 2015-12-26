var myApp = angular.module('myApp', []);

myApp.controller('myAppCtrl', function ($scope) {

  $scope.totalPapers = [];
  $scope.totalBooks = [];

  $scope.papers = [{ name : 'Click', category : 'Tabloide', price : 1, book : 3, cd : 10},
    { name : 'Practic in bucatarie', category : 'Culinar', price : 2, book : 7, cd : 15},
    { name : 'Libertatea', category : 'Tabloide', price : 1, book : 3, cd : 10},
    { name : 'Click! de Duminica', category : 'Publicatie de weekend', price : 1, book : 3, cd : 10},
    { name : 'Libertatea pentru femei', category : 'Femei', price : 1, book : 3, cd : 10},
    { name : 'Click pofta buna!', category : 'Culinar', price : 2, book : 5, cd : 10},
    { name : 'TVMania', category : 'Ghid TV', price : 3, book : 6, cd : 12},
    { name : 'Click! pentru femei', category : 'Femei', price : 1, book : 3, cd : 10},
    { name : 'Libertatea - Editia de duminica', category : 'Publicatie de weekend', price : 1, book : 3, cd : 10},
    { name : 'Femeia de azi', category : 'Femei', price : 2, book : 6, cd : 10},
    { name : 'TV Satelit', category : 'Ghid TV', price : 4, book : 13, cd : 20},
    { name : 'Click SANATATE', category : 'Sanatate & ingrijire personala', price : 2, book : 3, cd : 10},
    { name : 'Libertatea pentru femei - Retete', category : 'Culinar', price : 1, book : 3, cd : 10},
    { name : 'Sanatatea de azi', category : 'Sanatate & ingrijire personala', price : 1, book : 3, cd : 10},
    { name : 'Gazeta Sporturilor', category : 'Sport', price : 1, book : 3, cd : 10},
    { name : 'Ziarul Lumina', category : 'Religie', price : 1, book : 3, cd : 10},
    { name : 'Lumina de duminica', category : 'Religie', price : 1, book : 3, cd : 10},
    { name : 'Practic Carticica Practica', category : 'Culinar', price : 1, book : 3, cd : 10},
    { name : 'OK! Romania', category : 'Celebritati', price : 1, book : 3, cd : 10},
    { name : 'Ciao!', category : 'Vedete', price : 1, book : 3, cd : 10},
    { name : 'Weekend Adevarul', category : 'Publicatie de weekend', price : 1, book : 3, cd : 10},
    { name : 'Jurnal Aradean', category : 'Cotidian generalist, local sau regional', price : 1, book : 3, cd : 10},
    { name : 'Practic - Idei pentru casa, gradina si apartament', category : 'Home&Deco', price : 1, book : 3, cd : 10},
    { name : 'Super Bravo Girl', category : 'Reviste pentru adolescenti', price : 1, book : 3, cd : 10},
    { name : 'ELLE', category : 'Femei (Lifestyle / moda)', price : 1, book : 3, cd : 10},
    { name : 'Ioana', category : 'Femei', price : 1, book : 3, cd : 10}];

  function contains(number, array) {
    for(var i in array){
      if(i === number)
        return true;
    }
    return false;
  }

  $scope.rowClicked = function(index){    
    $('#rowID' + index).css('background-color', '#004466');
    if(contains(index, $scope.totalPapers))
     $scope.totalPapers.push(index);
  };

  $scope.bookCliked = function(index){
    if($('#bookID' + index).attr('src') === 'delete.png') {   
      $('#bookID' + index).attr('src', 'check.png');
      $scope.totalBooks.push(index);
    }
    else
      $('#bookID' + index).attr('src', 'delete.png');
  };

   $scope.sellClicked = function(index){
      for(var i in $scope.totalPapers){
        alert($scope.papers[$scope.totalPapers[i]].name + " : " + $scope.papers[$scope.totalPapers[i]].price);
      }
   };

});
