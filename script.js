var myApp = angular.module('myApp', []);

myApp.controller('myAppCtrl', function ($scope) {

  $scope.totalPapers = [];
  $scope.totalBooks = [];
  $scope.totalCDs = [];
  $scope.showSell = false;
  $scope.sellDetails = [];
  $scope.inputValue = "";

  $scope.papers = [{ name : 'Click', category : 'Tabloide', price : 1, book : 28, cd : 10, hasCD : true, hasBook : true},
    { name : 'Practic in bucatarie', category : 'Culinar', price : 2, book : 27, cd : 15, hasCD : false, hasBook : true},
    { name : 'Libertatea', category : 'Tabloide', price : 1, book : 26, cd : 10, hasCD : true, hasBook : true},
    { name : 'Click! de Duminica', category : 'Publicatie de weekend', price : 1, book : 25, cd : 10, hasCD : true, hasBook : true},
    { name : 'Libertatea pentru femei', category : 'Femei', price : 1, book : 24, cd : 10, hasCD : true, hasBook : false},
    { name : 'Click pofta buna!', category : 'Culinar', price : 2, book : 5, cd : 10, hasCD : false, hasBook : false},
    { name : 'TVMania', category : 'Ghid TV', price : 3, book : 23, cd : 12, hasCD : false, hasBook : true},
    { name : 'Click! pentru femei', category : 'Femei', price : 1, book : 22, cd : 10, hasCD : false, hasBook : true},
    { name : 'Libertatea - Editia de duminica', category : 'Publicatie de weekend', price : 1, book : 21, cd : 10, hasCD : true, hasBook : false},
    { name : 'Femeia de azi', category : 'Femei', price : 2, book : 20, cd : 10, hasCD : true, hasBook : false},
    { name : 'TV Satelit', category : 'Ghid TV', price : 4, book : 19, cd : 20, hasCD : false, hasBook : false},
    { name : 'Click SANATATE', category : 'Sanatate & ingrijire personala', price : 2, book : 18, cd : 10, hasCD : true, hasBook : false},
    { name : 'Libertatea pentru femei - Retete', category : 'Culinar', price : 1, book : 17, cd : 10, hasCD : true, hasBook : true},
    { name : 'Sanatatea de azi', category : 'Sanatate & ingrijire personala', price : 1, book : 16, cd : 10, hasCD : false, hasBook : true},
    { name : 'Gazeta Sporturilor', category : 'Sport', price : 3, book : 15, cd : 10, hasCD : false, hasBook : true},
    { name : 'Ziarul Lumina', category : 'Religie', price : 1, book : 14, cd : 10, hasCD : false, hasBook : true},
    { name : 'Lumina de duminica', category : 'Religie', price : 1, book : 13, cd : 10, hasCD : true, hasBook : false},
    { name : 'Practic Carticica Practica', category : 'Culinar', price : 1, book : 12, cd : 10, hasCD : true, hasBook : true},
    { name : 'OK! Romania', category : 'Celebritati', price : 10, book : 11, cd : 10, hasCD : false, hasBook : false},
    { name : 'Ciao!', category : 'Vedete', price : 12, book : 10, cd : 10, hasCD : true, hasBook : false},
    { name : 'Weekend Adevarul', category : 'Publicatie de weekend', price : 1, book : 9, cd : 10, hasCD : true, hasBook : false},
    { name : 'Jurnal Aradean', category : 'Cotidian generalist, local sau regional', price : 1, book : 8, cd : 10, hasCD : true, hasBook : true},
    { name : 'Practic - Idei pentru casa, gradina si apartament', category : 'Home&Deco', price : 1, book : 7, cd : 10, hasCD : false, hasBook : true},
    { name : 'Super Bravo Girl', category : 'Reviste pentru adolescenti', price : 2, book : 6, cd : 10, hasCD : true, hasBook : true},
    { name : 'ELLE', category : 'Femei (Lifestyle / moda)', price : 4, book : 5, cd : 10, hasCD : false, hasBook : false},
    { name : 'Ioana', category : 'Femei', price : 1, book : 4, cd : 10, hasCD : true, hasBook : true},
    { name : 'Historia', category : 'Cultura', price : 7, book : 4, cd : 10, hasCD : true, hasBook : true},
    { name : 'Evenimentul Zilei', category : 'Cotidian generalist national', price : 2, book : 14, cd : 12, hasCD : true, hasBook : false},
    { name : 'Viva', category : 'Celebritati', price : 1, book : 4, cd : 13, hasCD : false, hasBook : false},
    { name : 'Weekend Magazin', category : 'Divertisment, Integrame, Rebus si Jocuri', price : 3, book : 24, cd : 14, hasCD : false, hasBook : false},
    { name : 'Avantaje', category : 'Femei (Glossy)', price : 1, book : 30, cd : 15, hasCD : true, hasBook : false},
    { name : 'Romania Libera', category : 'Cotidian generalist national', price : 5, book : 13, cd : 16, hasCD : true, hasBook : false},
    { name : 'Spy', category : 'Vedete', price : 10, book : 12, cd : 17, hasCD : true, hasBook : true},
    { name : 'Bihari Naplo', category : 'Cotidian generalist, local sau regional', price : 1, book : 4, cd : 18, hasCD : false, hasBook : true},
    { name : 'Unica', category : 'Femei (Glossy)', price : 11, book : 16, cd : 109, hasCD : false, hasBook : true}];

  $scope.searchedPapers = $scope.papers.slice();

  function contains(number, array) {
    for(var i = 0; i < array.length; i++){
      if(array[i] === number)
        return true;
    }
    return false;
  }

  function containsString(string, array) {
    for(var i = 0; i < array.length; i++){
      if(array[i] === string)
        return i;
    }
    return -1;
  }

  $scope.paperClicked = function(index){
    if($('#paperID' + index).attr('src') === 'delete.png') {   
      $('#paperID' + index).attr('src', 'check.png');      
      $('#rowID' + index).css('background-color', '#004466');
      $scope.totalPapers.push($scope.searchedPapers[index].name + ':' + $scope.searchedPapers[index].price);
    }
    else {
      $('#paperID' + index).attr('src', 'delete.png');
      if(($('#bookID' + index).attr('src') === 'delete.png') && ($('#cdID' + index).attr('src') === 'delete.png'))
        $('#rowID' + index).css('background-color', '#000033');
      var nr = containsString($scope.searchedPapers[index].name + ':' + $scope.searchedPapers[index].price, $scope.totalPapers);
      $scope.totalPapers.splice(nr, 1);
    }
  };

  $scope.bookCliked = function(index){
    if($('#bookID' + index).attr('src') === 'delete.png') {   
      $('#bookID' + index).attr('src', 'check.png');      
      $('#rowID' + index).css('background-color', '#004466');
      $scope.totalBooks.push($scope.searchedPapers[index].name + ':' + $scope.searchedPapers[index].book);
    }
    else {
      $('#bookID' + index).attr('src', 'delete.png');
      if(($('#paperID' + index).attr('src') === 'delete.png') && ($('#cdID' + index).attr('src') === 'delete.png'))
        $('#rowID' + index).css('background-color', '#000033');
      var nr = containsString($scope.searchedPapers[index].name + ':' + $scope.searchedPapers[index].book, $scope.totalPapers);
      $scope.totalBooks.splice(nr, 1);
    }   
  };

  $scope.cdClicked = function(index){
    if($('#cdID' + index).attr('src') === 'delete.png') {   
      $('#cdID' + index).attr('src', 'check.png');      
      $('#rowID' + index).css('background-color', '#004466');
      $scope.totalCDs.push($scope.searchedPapers[index].name + ':' + $scope.searchedPapers[index].cd);
    }
    else {
      $('#cdID' + index).attr('src', 'delete.png');
      if(($('#paperID' + index).attr('src') === 'delete.png') && ($('#bookID' + index).attr('src') === 'delete.png'))
        $('#rowID' + index).css('background-color', '#000033');
      var nr = containsString($scope.searchedPapers[index].name + ':' + $scope.searchedPapers[index].cd, $scope.totalCDs);
      $scope.totalCDs.splice(nr, 1);
    } 
  };

   $scope.sellClicked = function(index){
    $scope.sellDetails = [];
    var total = 0;
    $scope.books = [];
    $scope.cds = [];
      for(var i = 0; i < $scope.totalPapers.length; i++){
        $scope.sellDetails.push($scope.totalPapers[i] + ' RON');
        total += Number($scope.totalPapers[i].split(':')[1]);
      }
      for(var i = 0; i < $scope.totalBooks.length; i++) {
        $scope.sellDetails.push($scope.totalBooks[i].split(':')[0] + ' Book : ' + $scope.totalBooks[i].split(':')[1] + ' RON');  
        total += Number($scope.totalBooks[i].split(':')[1]);      
      }
      for(var i = 0; i < $scope.totalCDs.length; i++) {
        $scope.sellDetails.push($scope.totalCDs[i].split(':')[0] + ' CD : ' + $scope.totalCDs[i].split(':')[1] + ' RON');  
        total += Number($scope.totalCDs[i].split(':')[1]);
      }
      $scope.sellDetails.push('Total : ' + total + ' RON');
      $scope.showSell = true;
   };

   $scope.cancelSellPushed = function() {
    $scope.showSell = false;
   };

   $scope.sellPushed = function() {
      $scope.showSell = false;
      for(var i = 0; i < $scope.searchedPapers.length; i++){
       $('#paperID' + i).attr('src', 'delete.png');
       $('#bookID' + i).attr('src', 'delete.png');
       $('#cdID' + i).attr('src', 'delete.png');
       $('#rowID' + i).css('background-color', '#000033');
      }           
      $scope.totalBooks = [];
      $scope.totalCDs = [];
      $scope.totalPapers = [];
   };

  $scope.filter = function(text){
    $scope.searchedPapers = $scope.papers.filter(function(x){
      var name = x.name.toLowerCase();
      var category = x.category.toLowerCase();
      var input = text.toLowerCase();
      return name.indexOf(input) != -1 || category.indexOf(input) != -1;
    });
  };

});
