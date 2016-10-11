(function() {
  var canvas = $('#canvas'); //my placement are + think of paper in drawing
  var updateGridButton = $ ('#update-grid-button');
  var numberOfColsInput = $('#number-of-cols');
  var numberOfRowsInput = $('#number-of-rows');

makeGrid(15, 15);

$('.cell').on('click', changeColor);
updateGridButton.on('click', updateGridSize);
// clearGrid();
// makeGrid(30, 30);


function updateGridSize() {
  clearGrid(); //remove current grid
  //grab number of columns from the inpur for the new grid
  var newColumnNumber = parseInt(numberOfColsInput.val());
  //grab number of rows from the input for the new grid
  var newRowNumber = parseInt(numberOfRowsInput.val());
  //make the new grid based on the rows of columns
  makeGrid(newRowNumber, newColumnNumber);
  $('.cell').on('click', changeColor);
}



function clearGrid(){
  canvas.empty();
}


function changeColor(event){
  //just this cell's background
  $(this).toggleClass('red');
}

function makeGrid(numberOfRows, numberOfCols){
  //let's make some rows and put them in the body
for(var rowCount = 0; rowCount < numberOfRows; rowCount += 1){
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
