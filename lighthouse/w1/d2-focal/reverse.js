const input = process.argv[2];

if (input) {
	console.log(reverse(input));
}

function reverse(_original) {
	return _original.split('').reverseList().join('');
}
