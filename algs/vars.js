var busy = false;
var busyMessage = "An algoritm has sorted or is currently sorting the displayed array. Press the 'New field' button to generate a new array and to stop the current algorithm.";
/*
unoc = unordered color
chc = checking color
donec = done color
piv = pivot color / misc color

mc1 = merge color 1. Color for the first merge sort array that's being merged.
mc2 = merge color 2. Color for the second merge sort array that's being merged.

mc1c = same as chc but for the first merge sort array.
mc2c = same as chc but for the second merge sort array.
*/

var mc1c = 'blue';
var mc2c = 'purple';
var mc1 = '#0866ff';
var mc2 = '#8c08ff';

var unoc = 'green';
var chc = 'yellow';
var donec = 'grey';
var pivc = 'red';
/*
Merge sort color.
Only 8 colors are needed for a max nBars of 200. (2 ^ 8 - 1 = 255).
*/

var mcols = [
	'#92140C',
	'#A4036F',
	'#048BA8',
	'#16DB93',
	'#EFEA5A',
	'#F29E4C',
	'#16262E'
]
