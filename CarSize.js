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
	
	var fromLeft = 0;
	var previousFillStyle;
	
	for (row = 0; row < carRows.rows.length; row++) {		
		var car = carRows.rows[row].cells[0].children[0].value;
		var width = parseFloat(carRows.rows[row].cells[1].children[0].value);
		var height = parseFloat(carRows.rows[row].cells[2].children[0].value);
		
		var fillStyle = get_random_color();
		
		while (fillStyle === previousFillStyle)
			fillStyle = get_random_color();
		
		c.fillStyle = fillStyle;
		
		c.fillRect(fromLeft, 0, width, height); //1 = pixels from left, 2 = pixels from top, 3 = width, 4 = height
		
		fromLeft += width;
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

function get_random_color() {
  function c() {
    return Math.floor(Math.random()*256).toString(16)
  }
  return "#"+c()+c()+c();
}