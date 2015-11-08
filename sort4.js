//2 ways to sort 4 numbers and return largest

function max (a,b,c,d) {
    var idx = [a,b,c,d];
    idx.sort(function(a,b){return b-a});
    return idx[0];
}

function getLargest(a,b,c,d) {
	if (a>b && a>c && a>d) {
	return a;
	} else if (b>a && b>c && b>d) {
	return b;
	} else if (c>a && c>b && c>d) {
	return c;
	} else {
	return d;
	}
}