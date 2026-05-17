function setWikiButton() {
	const callerName = setWikiButton.caller.name;
	const button = document.getElementById("wikipedia-button");
	button.href =  "https://en.wikipedia.org/wiki/Sorting_algorithm#Popular_sorting_algorithms";
	const functionToLink = {
		"quickSort" :"https://en.wikipedia.org/wiki/Quicksort",
		"mergeSort" :"https://en.wikipedia.org/wiki/Merge_sort",
		"heapSort"  :"https://en.wikipedia.org/wiki/Heapsort",
		"bubbleSort":"https://en.wikipedia.org/wiki/Bubble_sort",
		"gnomeSort" :"https://en.wikipedia.org/wiki/Gnome_sort",
		"bogoSort"  :"https://en.wikipedia.org/wiki/Bogosort",
		"shakerSort":"https://en.wikipedia.org/wiki/Cocktail_shaker_sort",
	}
	var link = functionToLink[callerName];
	if(link != undefined){
		button.href = link;
	}
}

function changeColor(ind, col)
{
	 document.getElementById(String(ind)).style.backgroundColor = col;
}
//swap but dont swap the color
function swapNC(ind1, ind2) {
	var element1 = document.getElementById(String(ind1));
	var element2 = document.getElementById(String(ind2));
	var el1 = element1.style.height;
	var el2 = element2.style.height;
	element1.style.height = el2;
	element2.style.height = el1;
}
function swap(ind1, ind2) {
	var element1 = document.getElementById(String(ind1));
	var element2 = document.getElementById(String(ind2));
	var el1 = element1.style.height;
	var el2 = element2.style.height;
	element1.style.height = el2;
	element2.style.height = el1;
	el1 = element1.style.backgroundColor;
	el2 = element2.style.backgroundColor;
	element1.style.backgroundColor = el2;
	element2.style.backgroundColor = el1;
}

function move(begin, end)
{
	while(begin != end)
	{
		swap(begin, begin + 1 - 2 * (begin > end));
		begin += 1 - 2 * (begin > end);
	}
}


function greater(ind1, ind2)
{
	var i1 = document.getElementById(String(ind1)).style.height;
	var i2 = document.getElementById(String(ind2)).style.height;
	i1 = Number(i1.slice(0, -2));
	i2 = Number(i2.slice(0, -2));
	return i1 > i2;
}
