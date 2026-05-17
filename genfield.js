let wBar;
let hBar;
let delay = 200;
let change = false;

async function genBars()
{
	change = true;
	document.getElementById('field').style.width = '90%';
	let fld = document.getElementById('field');
	let nBars = document.getElementById('nBars').value;
	fld.innerHTML = "";
	let width = fld.offsetWidth;
	let height = document.getElementById('height').value;
	fld.style.height = height + 'px';

	wBar = Math.round(width/(nBars * 2));
	hBar = Math.round(height/nBars);

	if(hBar < 1) { hBar = 1; }

	let heightArray = [];
	for(let n = 0; n < nBars; n++)
	{
		heightArray.push(n);
	}

	heightArray = shuffle(heightArray);
	fld.style.width = wBar * nBars * 2 + 'px';
	fld.style.height = hBar * nBars + 10  + 'px';

	for(let n = 0; n < nBars; n++)
	{
		let bar = document.createElement('div');
		bar.classList.add('bar');
		bar.id = n;
		bar.style.width = wBar + 'px';
		bar.style.height = (heightArray[n] + 1) * hBar + 'px';
		bar.style.left = 0.5 * wBar + wBar * n * 2 + 'px';
		fld.appendChild(bar);
	}
	busy = false;
	await sleep(2 * delay);
}
