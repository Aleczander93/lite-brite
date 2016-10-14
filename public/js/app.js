(function() {

  var canvas = $('#canvas'); //my placement are + think of paper in drawing
  var updateGridButton = $ ('#update-grid-button');
  var clearGridButton = $('#clear-button');
  var numberOfColsInput = $('#number-of-cols');
  var numberOfRowsInput = $('#number-of-rows');
  var redButton = $('#red-button');
  var blueButton = $('#blue-button');
  var greenButton = $('#green-button');
  var orangeButton = $('#orange-button');
  var max_chars = 2;

makeGrid(20, 30);
$('.cell').on('click', changeColor);
redButton.on('click', redButtonOn);
blueButton.on('click', blueButtonOn);
greenButton.on('click', greenButtonOn);
orangeButton.on('click', orangeButtonOn);
updateGridButton.on('click', updateGridSize);
clearGridButton.on('click', clearGridButtonOn);



$('#number-of-cols').keydown( function(e){
    if ($(this).val().length >= max_chars){
        $(this).val($(this).val().substr(0, max_chars));
    }
});

$('#number-of-cols').keyup( function(e){
    if ($(this).val().length >= max_chars) {
        $(this).val($(this).val().substr(0, max_chars));
    }
});

$('#number-of-rows').keydown( function(e){
    if ($(this).val().length >= max_chars) {
        $(this).val($(this).val().substr(0, max_chars));
    }
});

$('#number-of-rows').keyup( function(e){
    if ($(this).val().length >= max_chars) {
        $(this).val($(this).val().substr(0, max_chars));
    }
});
// $('input').on('keyup')
// updateGridButton.attr("disabled", false);
// clearGrid();
// makeGrid(30, 30);
//if column || rows = nothing --> do not update

function updateGridSize() {

  $('number-of-cols').keyup(function(e){
    if ($(this).val().length < max_chars) {
    $('#update-grid-button').disabled = true;
  } else {
    $('#update-grid-button').disabled = false;
  }
  });


  $('number-of-rows').keyup(function(e){
    if ($(this).val().length < max_chars) {
    $('#update-grid-button').disabled = true;
  } else {
    $('#update-grid-button').disabled = false;
  }
  });

  clearGrid(); //remove current grid
  //grab number of columns from the input for the new grid
  var newColumnNumber = parseInt(numberOfColsInput.val());
  //grab number of rows from the input for the new grid
  var newRowNumber = parseInt(numberOfRowsInput.val());
  //make the new grid based on the rows of columns
  makeGrid(newRowNumber, newColumnNumber);
  $('.btn-danger').on('click', redButtonOn);
  $('.btn-primary').on('click', blueButtonOn);
  $('.btn-success').on('click', greenButtonOn);
  $('.btn-warning').on('click', orangeButtonOn);

}

function clearGrid(){
  canvas.empty();
}

function clearGridButtonOn(event){
    $('.cell').off('click');
}

function changeColor(event){
  //just this cell's background
  $(this).toggleClass('white');
}

function redButtonOn(event){
  $('.cell').off('click');
  $('.cell').on('click', function(){
  $(this).toggleClass('red');
});
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
