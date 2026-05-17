let wBar;
let hBar;
let delay = 200;
let change = false;

async function genBars()
{
	change = true;
	let fld = document.getElementById('field');
	let nBars = document.getElementById('nBars').value;
	fld.innerHTML = "";
	let width = fld.offsetWidth;
	let height = document.getElementById('height').value;
	fld.style.height = height + 'px';

	wBar = Math.floor(width / (nBars * 2));
	hBar = Math.round(height / nBars);

	if (wBar < 1) { wBar = 1; }
	if (hBar < 1) { hBar = 1; }

	let heightArray = [];
	for (let n = 0; n < nBars; n++) {
		heightArray.push(n);
	}

	heightArray = shuffle(heightArray);
	fld.style.height = hBar * nBars + 10 + 'px';

	/* stagger duration: spread bars evenly over 350ms, capped so large sets still feel snappy */
	const totalStagger = Math.min(nBars * 4, 350);

	for (let n = 0; n < nBars; n++) {
		let bar = document.createElement('div');
		bar.classList.add('bar');
		bar.id = n;
		bar.style.width = wBar + 'px';
		bar.style.height = (heightArray[n] + 1) * hBar + 'px';
		bar.style.left = 0.5 * wBar + wBar * n * 2 + 'px';
		const delayMs = Math.round((n / nBars) * totalStagger);
		bar.style.animation = `barEnter 0.35s ease-out ${delayMs}ms both`;
		fld.appendChild(bar);
	}
	busy = false;
	await sleep(2 * delay);
}
