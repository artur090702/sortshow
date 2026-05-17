async function gnomeSort()
{
	setWikiButton();
	change = false;
	if (busy) { window.alert(busyMessage); return;}
	busy = true;
	let index = 0;
	let len = Number(document.getElementById('nBars').value);
	for(let n = 1; n < len; n++)
	{
		let x = n;
		if(change) { return; }
		changeColor(x, pivc);
		while(x > 0 && !greater(x, x - 1))
		{
			await sleep(delay);
			if(change) { return; }
			swap(x, x - 1);
			x -= 1;
		}
		if(change) { return; }
		await sleep(delay);
		changeColor(x, unoc);
	}
	for(let n = 0; n < len; n++)
	{
		changeColor(n, donec);
	}
}
