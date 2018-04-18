const hexInput = document.getElementById('hex-input');
const rgbInput = document.getElementById('rgb-input');
const body = document.querySelector('body');

function processHex() {
	if (rgbInput.value.length > 0) {
		rgbInput.value = '';
	}
	if (hexInput.value.charAt(0) === '#') {
		hexInput.value = hexInput.value.substring(1, hex.length);
	}
	if (hexInput.value.length === 6) {
		setBackgroundColor();
		hex2rgb();
	}
}

function hex2rgb() {
	let red = hexInput.value.substring(0, 2);
	let green = hexInput.value.substring(2, 4);
	let blue = hexInput.value.substring(4, 6);
	red = parseInt(red, 16);
	green = parseInt(green, 16);
	blue = parseInt(blue, 16);
	console.log(`${red}, ${green}, ${blue}`);
	rgbInput.value = `${red},${green},${blue}`;
}

function rgb2hex() {
	// console.log(hex);
	// let rgb = rgbInput.value;

	/*
	if (r == "") r = 0;
	if (g == "") g = 0;
	if (b == "") b = 0;
	r = parseInt(r);
	g = parseInt(g);
	b = parseInt(b);
	if (r < 0) r = 0;
	if (g < 0) g = 0;
	if (b < 0) b = 0;
	if (r > 255) r = 255;
	if (g > 255) g = 255;
	if (b > 255) b = 255;
	hex = r * 65536 + g * 256 + b;
	hex = hex.toString(16, 6);
	len = hex.length;
	if (len < 6)
		for (i = 0; i < 6 - len; i++) hex = "0" + hex;
	hex = hex.toUpperCase();
	return hex;
	*/
}

function setBackgroundColor(hex) {
	body.setAttribute('style', `background-color: #${hexInput.value}`);
}

hexInput.addEventListener('keyup', processHex);
rgbInput.addEventListener('keyup', rgb2hex);

/*
function processRGBValue() {
	if (rgbValue.length === )
}

*/

/* let r = parseInt(colourValue.substring(0, 2), 16);
let g = parseInt(colourValue.substring(2, 4), 16);
let b = parseInt(colourValue.substring(4, 6), 16); */
