$(function() {
	$('#compare').on('click', function()
	{
		compareSizes();
	});
});

function compareSizes() {
	var canvas = document.getElementById('canvas');
	var c = canvas.getContext('2d');
	
	c.clearRect(0,0,800,800); //clear the rectangle based on the width and height of the canvas element before redrawing
	
	var car = $('#car').val();
	var width = $('#width').val();
	var height = $('#height').val();
	
	c.fillRect(0,0,width,height); //1 = pixels from left, 2 = pixels from top, 3 = width, 4 = height
}