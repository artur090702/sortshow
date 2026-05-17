async function quickSortSub(ind)
{
	changeColor(ind.start, 'red');
	let less = 0;
	await sleep(delay)
	for(let n = ind.start + 1; n < ind.end; n++)
	{
		changeColor(n, chc);
		await sleep(delay)
		if(change) { return; }
		if(greater(less + ind.start, n))
		{
			if(n > ind.start + less)
			{
				move(n, ind.start);
				await sleep(delay)
				changeColor(ind.start, unoc);
			}
			else{
				changeColor(n, unoc);
				await sleep(delay)
			}
			less += 1;
		}
		else{
			if(n < ind.start + less)
			{
				move(n, ind.start + less + 1);
				changeColor(ind.start + less + 1, unoc);
				await sleep(delay);
			}
			else{
				changeColor(n, unoc);
				await sleep(delay);
			}
		}
		if(change) { return; }
	}
	changeColor(ind.start + less, donec);
	return less + ind.start;
}

async function quickSort()
{
	setWikiButton();
	change = false;
	if (busy) { window.alert(busyMessage); return; }
	busy = true;
	let len = Number(document.getElementById('nBars').value);
	let indeces = [-1, len];
	while(indeces.length > 1)
	{
		let n = await quickSortSub({start: indeces[0] + 1, end: indeces[1]});
		indeces.splice(1, 0, n);

		while(indeces[1] - indeces[0] < 3 && indeces.length > 1)
		{
			indeces.splice(0, 1);
			if(indeces[0] != 0)
			{
				changeColor(indeces[0] - 1, donec);
			}
		}
		for(let i = 0; i < indeces.length - 1; i++)
		{
			if(indeces[i + 1] - indeces[i] < 3)
			{
				changeColor(indeces[i], donec);
			}
		}
		if(change) { return; }
	}
}
