javascript:
var matrix = [	'XXXXXXXXXX',
				'XXXXXXXXXX',
				'XXXXXXXXXX',
				'XXXXXXXXXX',
				'XXXXXXXXXX',
				'XXXXXXXXXX',
				'XXXXXXXXXX'];
var parts = (document.documentElement.innerHTML).split('[');

function getAlphabet(char) {
	return parseInt(char, 32) - parseInt('A', 32);
}

for (var i = 3; i < 6; i++){
	document.getElementsByName('message' + i)[0].value = matrix[parseInt(parts[i - 1][2])-1][parseInt(getAlphabet(parts[i - 1][0]))];
}

document.getElementsByName('login')[0].submit();