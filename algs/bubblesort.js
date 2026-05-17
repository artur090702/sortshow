/* BUBBLE SORT
   BUBBLE SORT
   BUBBLE SORT
   BUBBLE SORT
   BUBBLE SORT
   BUBBLE SORT
   BUBBLE SORT
   BUBBLE SORT */

async function bubbleSort()
{
	setWikiButton();
	change = false;
	if (busy) { window.alert(busyMessage); return;}
	busy = true;
	let execN = document.getElementById('nBars').value;
	for(let n = execN; n > 0; n--)
	{
		let index = 0;
		changeColor(index, chc);
		while(index + 1 < n)
		{
			changeColor(index + 1, chc);

			if(greater(index, index + 1))
			{
				await sleep(delay);
				swapNC(index, index + 1);
			}
			await sleep(delay);

			changeColor(index, unoc);
			index += 1;
			if(change) { return; }
		}
		changeColor(n - 1, donec);
	}
}
