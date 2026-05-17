async function bogoSort()
{
	setWikiButton()
	change = false;
	if (busy) { window.alert(busyMessage); return;}
	busy = true;
	let len = document.getElementById('nBars').value;
	for(let i = 0; i < len - 1; i++)
	{
		if(change){ return; }
		if(greater(i, i + 1))
		{
			genBars();
			busy = true;
			change = false;
			i = -1;
			await sleep(delay);
		}
	}
	for(let n = 0; n < len; n++)
	{
		changeColor(n, donec);
	}
}
