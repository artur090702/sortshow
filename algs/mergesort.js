async function merge(start, mid, end)
{
	let startold = start;
	let ind = mid;
	//Color the arrays in distinct colors to distinguish them
	for(let n = start; n < mid; n++)
	{
		changeColor(n, mc1);
	}
	for(let n = mid; n < end; n++)
	{
		changeColor(n, mc2);
	}
	changeColor(start, mc1c);
	changeColor(mid, mc2c);

	await sleep(delay);
	while(start < mid && ind < end)
	{
		if(change){ return; }
		changeColor(start, mc1c);
		changeColor(ind, mc2c);
		await sleep(delay);

		let ccolor = mc1;
		if(greater(start, ind))
		{
			move(ind, start);
			ind += 1;
			mid += 1;
			ccolor = mc2;
		}
		changeColor(start, ccolor);
		start += 1;
		if(change){ return; }
	}
	await sleep(delay);
	for(let n = startold; n < end; n++)
	{
		changeColor(n, donec);
	}
}

async function mergeSortS(start = 0, len = document.getElementById('nBars').value)
{
	if(len - start > 1)
	{
		if(change){ return; }
		let mid = Math.floor((len - start) / 2 + start);
		await mergeSortS(start, mid);
		await mergeSortS(mid, len);
		await merge(start, mid, len);
	}
}

async function mergeSort()
{
	setWikiButton();
	change = false;
	if (busy) { window.alert(busyMessage); return;}
	busy = true;
	mergeSortS();
}
