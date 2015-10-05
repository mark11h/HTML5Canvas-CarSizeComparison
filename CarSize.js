$(function() {
	$('#compare').on('click', function()
	{
		compareSizes();
	});
	
	$('#add').on('click', function()
	{
		addRow();
	});
});

function compareSizes() {
	var canvas = document.getElementById('canvas');
	var c = canvas.getContext('2d');
	
	c.clearRect(0,0,800,800); //clear the rectangle based on the width and height of the canvas element before redrawing
	
	var carRows = document.getElementById('carRows');
	
	var previousFillStyle;
	
	var cars = [];
	
	for (row = 0; row < carRows.rows.length; row++) {
		var name = carRows.rows[row].cells[0].children[0].value;
		var width = parseFloat(carRows.rows[row].cells[1].children[0].value);
		var height = parseFloat(carRows.rows[row].cells[2].children[0].value);
		
		var car = { name: name, width: width, height: height };
		
		cars.push(car);
	}
	
	var sortedCars = cars.sort(compare);
	
	for (i = 0; i < sortedCars.length; i++) {		
		var car = sortedCars[i].name;
		var width = sortedCars[i].width;
		var height = sortedCars[i].height;
		
		var fillStyle = getRandomColour();
		
		while (fillStyle === previousFillStyle)
			fillStyle = getRandomColour();
		
		c.fillStyle = fillStyle;
		
		c.fillRect(0, 0, width, height); //1 = pixels from left, 2 = pixels from top, 3 = width, 4 = height
		
		previousFillStyle = fillStyle;
    }
}

function addRow() {	
	var carRows = document.getElementById('carRows');
	
	var row = carRows.insertRow();
    var carCell = row.insertCell();
	var widthCell = row.insertCell();
	var lengthCell = row.insertCell();
	
	carCell.innerHTML = '<input type="text" />';
	widthCell.innerHTML = '<input type="number" step="any" />';
	lengthCell.innerHTML = '<input type="number" step="any" />';
}

function getRandomColour() {
  function c() {
    return Math.floor(Math.random()*256).toString(16)
  }
  return "#"+c()+c()+c();
}

function compare(a,b) {
  if (a.width > b.width)
    return -1;
  if (a.width < b.width)
    return 1;
  return 0;
}