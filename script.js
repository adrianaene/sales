var myApp = angular.module('myApp', []);

myApp.controller('myAppCtrl', function ($scope) {

  $scope.totalPapers = [];
  $scope.totalBooks = [];
  $scope.totalCDs = [];
  $scope.showSell = false;
  $scope.sellDetails = [];

  $scope.papers = [{ name : 'Click', category : 'Tabloide', price : 1, book : 28, cd : 10},
    { name : 'Practic in bucatarie', category : 'Culinar', price : 2, book : 27, cd : 15},
    { name : 'Libertatea', category : 'Tabloide', price : 1, book : 26, cd : 10},
    { name : 'Click! de Duminica', category : 'Publicatie de weekend', price : 1, book : 25, cd : 10},
    { name : 'Libertatea pentru femei', category : 'Femei', price : 1, book : 24, cd : 10},
    { name : 'Click pofta buna!', category : 'Culinar', price : 2, book : 5, cd : 10},
    { name : 'TVMania', category : 'Ghid TV', price : 3, book : 23, cd : 12},
    { name : 'Click! pentru femei', category : 'Femei', price : 1, book : 22, cd : 10},
    { name : 'Libertatea - Editia de duminica', category : 'Publicatie de weekend', price : 1, book : 21, cd : 10},
    { name : 'Femeia de azi', category : 'Femei', price : 2, book : 20, cd : 10},
    { name : 'TV Satelit', category : 'Ghid TV', price : 4, book : 19, cd : 20},
    { name : 'Click SANATATE', category : 'Sanatate & ingrijire personala', price : 2, book : 18, cd : 10},
    { name : 'Libertatea pentru femei - Retete', category : 'Culinar', price : 1, book : 17, cd : 10},
    { name : 'Sanatatea de azi', category : 'Sanatate & ingrijire personala', price : 1, book : 16, cd : 10},
    { name : 'Gazeta Sporturilor', category : 'Sport', price : 1, book : 15, cd : 10},
    { name : 'Ziarul Lumina', category : 'Religie', price : 1, book : 14, cd : 10},
    { name : 'Lumina de duminica', category : 'Religie', price : 1, book : 13, cd : 10},
    { name : 'Practic Carticica Practica', category : 'Culinar', price : 1, book : 12, cd : 10},
    { name : 'OK! Romania', category : 'Celebritati', price : 1, book : 11, cd : 10},
    { name : 'Ciao!', category : 'Vedete', price : 1, book : 10, cd : 10},
    { name : 'Weekend Adevarul', category : 'Publicatie de weekend', price : 1, book : 9, cd : 10},
    { name : 'Jurnal Aradean', category : 'Cotidian generalist, local sau regional', price : 1, book : 8, cd : 10},
    { name : 'Practic - Idei pentru casa, gradina si apartament', category : 'Home&Deco', price : 1, book : 7, cd : 10},
    { name : 'Super Bravo Girl', category : 'Reviste pentru adolescenti', price : 1, book : 6, cd : 10},
    { name : 'ELLE', category : 'Femei (Lifestyle / moda)', price : 1, book : 5, cd : 10},
    { name : 'Ioana', category : 'Femei', price : 1, book : 4, cd : 10}];

  function contains(number, array) {
    for(var i = 0; i < array.length; i++){
      if(array[i] === number)
        return true;
    }
    return false;
  }

  $scope.rowClicked = function(index){    
    $('#rowID' + index).css('background-color', '#004466');
    if(!contains(index, $scope.totalPapers))
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

  $scope.cdClicked = function(index){
    if($('#cdID' + index).attr('src') === 'delete.png') {   
      $('#cdID' + index).attr('src', 'check.png');
      $scope.totalCDs.push(index);
    }
    else
      $('#cdID' + index).attr('src', 'delete.png');
  };

   $scope.sellClicked = function(index){
    $scope.sellDetails = [];
    var total = 0;
      for(var i = 0; i < $scope.totalPapers.length; i++){
        $scope.sellDetails.push($scope.papers[$scope.totalPapers[i]].name + " : " + $scope.papers[$scope.totalPapers[i]].price + ' RON');
        total += $scope.papers[$scope.totalPapers[i]].price;
        if(contains($scope.totalPapers[i], $scope.totalBooks)) {
          $scope.sellDetails.push("Book : " + $scope.papers[$scope.totalPapers[i]].book + ' RON');
          total += $scope.papers[$scope.totalPapers[i]].book;
        }
        if(contains($scope.totalPapers[i], $scope.totalCDs)) {
          $scope.sellDetails.push("CD : " + $scope.papers[$scope.totalPapers[i]].cd + ' RON');
          total += $scope.papers[$scope.totalPapers[i]].cd;
        }
      }
      $scope.sellDetails.push('Total : ' + total + ' RON');
      $scope.showSell = true;
   };

   $scope.cancelSellPushed = function() {
    $scope.showSell = false;
    for(var i = 0; i < $scope.totalPapers.length; i++){
      $('#rowID' + $scope.totalPapers[i]).css('background-color', '#000033');
    }
    for(var i = 0; i < $scope.totalBooks.length; i++){
     $('#bookID' + $scope.totalBooks[i]).attr('src', 'delete.png');
    }
    for(var i = 0; i < $scope.totalCDs.length; i++){
     $('#cdID' + $scope.totalCDs[i]).attr('src', 'delete.png');
    }
      $scope.totalBooks = [];
      $scope.totalCDs = [];
      $scope.totalPapers = [];
   };

   $scope.sellPushed = function() {
      $scope.showSell = false;
      for(var i = 0; i < $scope.totalPapers.length; i++){
        $('#rowID' + $scope.totalPapers[i]).css('background-color', '#000033');
      }
      for(var i = 0; i < $scope.totalBooks.length; i++){
       $('#bookID' + $scope.totalBooks[i]).attr('src', 'delete.png');
      }
      for(var i = 0; i < $scope.totalCDs.length; i++){
       $('#cdID' + $scope.totalCDs[i]).attr('src', 'delete.png');
      }      
      $scope.totalBooks = [];
      $scope.totalCDs = [];
      $scope.totalPapers = [];
   };

});
