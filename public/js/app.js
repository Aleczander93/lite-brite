(function() {


  var canvas = $('#canvas'); //my placement are + think of paper in drawing
  var updateGridButton = $ ('#update-grid-button');
  var numberOfColsInput = $('#number-of-cols');
  var numberOfRowsInput = $('#number-of-rows');
  var blueButton = $('#blue-button');
  var greenButton = $('#green-button');
  var orangeButton = $('#orange-button');

  makeGrid(15, 15);
$('.cell').on('click', changeColor);
blueButton.on('click', blueButtonOn);
greenButton.on('click', greenButtonOn);
orangeButton.on('click', orangeButtonOn);
updateGridButton.on('click', updateGridSize);
// updateGridButton.attr("disabled", false);
// clearGrid();
// makeGrid(30, 30);
//if column || rows = nothing --> do not update

function updateGridSize() {
  clearGrid(); //remove current grid
  //grab number of columns from the input for the new grid
  var newColumnNumber = parseInt(numberOfColsInput.val());
  //grab number of rows from the input for the new grid
  var newRowNumber = parseInt(numberOfRowsInput.val());
  //make the new grid based on the rows of columns
  makeGrid(newRowNumber, newColumnNumber);
  $('.cell').on('click', changeColor);
  $('.cell').on('click', blueButtonOn);
  $('.cell').on('click', greenButtonOn);
  $('.cell').on('click', orangeButtonOn);
}

function clearGrid(){
  canvas.empty();
}

function changeColor(event){
  //just this cell's background
  $(this).toggleClass('red');
}

function blueButtonOn(event){
  $('.cell').off('click');
  $('.cell').on('click', function(){
  $(this).toggleClass('blue');
});
}

function greenButtonOn(event){
  $('.cell').off('click');
  $('.cell').on('click', function(){
  $(this).toggleClass('green');
});
}

function orangeButtonOn(event){
  $('.cell').off('click');
  $('.cell').on('click', function(){
    $(this).toggleClass('orange');
});
}

function makeGrid(numberOfRows, numberOfCols){
  //let's make some rows and put them in the body
for(var rowCount = 0; rowCount < numberOfRows; rowCount+=1){
  var row = $('<tr></tr>');
  for(var colCount= 0; colCount < numberOfCols; colCount+=1){
    var column = $('<td></td>');
    column.addClass('cell');
    row.append(column);
  }
    canvas.append(row);
    }
}
  }());
