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
			for(let j = len - 1; j > 0; j--) {
				let k = Math.floor(Math.random() * (j + 1));
				swap(j, k);
			}
			i = -1;
			await sleep(delay);
		}
	}
	for(let n = 0; n < len; n++)
	{
		changeColor(n, donec);
	}
}
