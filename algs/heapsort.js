async function heapSort()
{
	setWikiButton();
	change = false;
	if (busy) { window.alert(busyMessage); return;}
	busy = true;
	let len = document.getElementById('nBars').value;
	let depth = Math.ceil(Math.log(Number(len) + 1) / Math.log(2));

	/*
	 * Changing colors
	 */
	for(let n = 0; n < depth; n++)
	{
		var temp = [];
		for(let x = Math.pow(2, n) - 1; x < Math.pow(2, n + 1) - 1 && x < len; x++)
		{
			changeColor(x, mcols[n]);
		}
	}
	let nextD = Math.pow(2, depth - 1) - 2;
	let nextnextD = Math.pow(2, depth - 2) - 2;
	while(len > 2)
	{
		let ind = len;
		depth = Math.ceil(Math.log(Number(len) + 1) / Math.log(2));
		nextD = Math.pow(2, depth - 1) - 2;
		nextnextD = Math.pow(2, depth - 2) - 2;
		while(ind > 1)
		{
			//Creating binary heap
			ind -= 1;
			if(greater(ind, Math.max(nextnextD + Math.floor(ind - nextD), 0)))
			{
				swapNC(ind, Math.max(nextnextD + Math.floor(ind - nextD), 0));
			}
			if(ind == nextD)
			{
				depth -= 1;
				nextD = nextnextD;
				nextnextD = Math.pow(2, depth - 2) - 2;
			}
			if(change){ return;}
			await sleep(delay);
		}
		if(change){ return;}
		await sleep(delay);
		len -= 1;
		swapNC(0, len);
		changeColor(len, donec);
	}
	changeColor(0, donec);
	changeColor(1, donec);
}
