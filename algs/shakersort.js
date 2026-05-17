async function shakerSort()
{
	setWikiButton();
	change = false;
	if (busy) { window.alert(busyMessage); return;}
	busy = true;
	let len = document.getElementById('nBars').value;

	let swapped = true;
	for(let n = 0; n < len && swapped; n++)
	{
		swapped = false;
		let index = n;
		changeColor(index, chc);
		while(index + 1 < len)
		{
			changeColor(index + 1, chc);

			if(greater(index, index + 1))
			{
				swapped = true;
				await sleep(delay);
				swapNC(index, index + 1);
			}
			await sleep(delay);

			changeColor(index, unoc);
			index += 1;
			if(change) { return; }
		}
		len -= 1;
		changeColor(len, donec);
		index = len - 1;
		changeColor(index, chc);
		if(swapped)
		{
			swapped = false;
			while(index > n)
			{
				changeColor(index - 1, chc);

				if(!greater(index, index - 1))
				{
					await sleep(delay);
					swapNC(index, index - 1);
					swapped = true;
				}
				await sleep(delay);

				changeColor(index, unoc);
				index -= 1;
				if(change) { return; }
			}
		}
		changeColor(n, donec);
	}
	for(;n < len; n++)
	{
		changeColor(n, donec);
	}
}
