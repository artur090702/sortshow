var busy = false;
var busyMessage = "An algorithm has sorted or is currently sorting the displayed array. Press the 'New field' button to generate a new array and to stop the current algorithm.";
/*
unoc = unordered color
chc  = checking color
donec = done color
pivc = pivot color / misc color

mc1 = merge color 1 (first sub-array being merged)
mc2 = merge color 2 (second sub-array being merged)

mc1c = checking color for mc1 sub-array
mc2c = checking color for mc2 sub-array
*/

var mc1c = '#38bdf8';
var mc2c = '#c084fc';
var mc1  = '#0ea5e9';
var mc2  = '#a855f7';

var unoc  = '#6366f1';
var chc   = '#fbbf24';
var donec = '#10b981';
var pivc  = '#f43f5e';

var mcols = [
	'#f43f5e',
	'#fb923c',
	'#facc15',
	'#4ade80',
	'#22d3ee',
	'#818cf8',
	'#c084fc'
]
