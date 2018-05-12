const basicLimit = document.getElementById('basicLimit');
const casinoLimit = document.getElementById('casinoLimit');
const onlineCasinoLimit = document.getElementById('onlineCasinoLimit');
const horsesLimit = document.getElementById('horsesLimit');
const parlaysLimit = document.getElementById('parlaysLimit');
const teasersLimit = document.getElementById('teasersLimit');
const specificLimit = document.getElementById('specificLimit');
const step2Message = document.getElementById('step2Message');
const step2Send = document.getElementById('step2Send');

const basicLimit1 = document.getElementById('basicLimit1');
const basicLimit2 = document.getElementById('basicLimit2');
const basicLimit3 = document.getElementById('basicLimit3');

const casinoLimit1 = document.getElementById('casinoLimit1');
const casinoLimit2 = document.getElementById('casinoLimit2');
const casinoLimit3 = document.getElementById('casinoLimit3');
const casinoLimit4 = document.getElementById('casinoLimit4');

const onlineCasinoLimit1 = document.getElementById('onlineCasinoLimit1');
const onlineCasinoLimit2 = document.getElementById('onlineCasinoLimit2');
const onlineCasinoLimit3 = document.getElementById('onlineCasinoLimit3');
const onlineCasinoLimit4 = document.getElementById('onlineCasinoLimit4');

const horsesLimit1 = document.getElementById('horsesLimit1');
const horsesLimit2 = document.getElementById('horsesLimit2');
const horsesLimit3 = document.getElementById('horsesLimit3');
const horsesLimit4 = document.getElementById('horsesLimit4');

const parlaysLimit1 = document.getElementById('parlaysLimit1');
const parlaysLimit2 = document.getElementById('parlaysLimit2');
const parlaysLimit3 = document.getElementById('parlaysLimit3');
const parlaysLimit4 = document.getElementById('parlaysLimit4');
const parlaysLimit5 = document.getElementById('parlaysLimit5');
const parlaysLimit6 = document.getElementById('parlaysLimit6');
const parlaysLimit7 = document.getElementById('parlaysLimit7');
const parlaysLimit8 = document.getElementById('parlaysLimit8');
const parlaysLimit9 = document.getElementById('parlaysLimit9');
const parlaysLimit10 = document.getElementById('parlaysLimit10');
const parlaysLimit11 = document.getElementById('parlaysLimit11');
const parlaysLimit12 = document.getElementById('parlaysLimit12');
const parlaysLimit13 = document.getElementById('parlaysLimit13');

const teasers1 = document.getElementById('teasers1');
const teasers2 = document.getElementById('teasers2');
const teasers3 = document.getElementById('teasers3');
const teasers4 = document.getElementById('teasers4');
const teasers5 = document.getElementById('teasers5');
const teasers6 = document.getElementById('teasers6');
const teasers7 = document.getElementById('teasers7');
const teasers8 = document.getElementById('teasers8');
const teasers9 = document.getElementById('teasers9');
const teasers10 = document.getElementById('teasers10');
const teasers11 = document.getElementById('teasers11');

const specificLimit1 = document.getElementById('specificLimit1');
const specificLimit2 = document.getElementById('specificLimit2');
const specificLimit3 = document.getElementById('specificLimit3');

const step2Prev = document.getElementById('step2Prev');
const step2Next = document.getElementById('step2Next');
let nextCounter = 1;

const nextStep = function () {
	if (nextCounter == 1 && basicLimit1.value !== '' && basicLimit2.value !== '' && basicLimit3.value !== '') {
		basicLimit.classList.add('make-hidden');
		casinoLimit.classList.remove('make-hidden');
		step2Message.classList.add('make-hidden');
		nextCounter++
	} else if (nextCounter == 2 && casinoLimit1.value !== '' && casinoLimit2.value !== '' && casinoLimit3.value !== '' && casinoLimit4.value !== '') {
		casinoLimit.classList.add('make-hidden');
		onlineCasinoLimit.classList.remove('make-hidden');
		step2Message.classList.add('make-hidden');
		nextCounter++
	} else if (nextCounter == 3 && onlineCasinoLimit1.value !== '' && onlineCasinoLimit2.value !== '' && onlineCasinoLimit3.value !== '' && onlineCasinoLimit4.value !== '') {
		onlineCasinoLimit.classList.add('make-hidden');
		horsesLimit.classList.remove('make-hidden');
		step2Message.classList.add('make-hidden');
		nextCounter++
	} else if (nextCounter == 4 && horsesLimit3.value !== '' && horsesLimit4.value !== '' && (horsesLimit2.checked == true || horsesLimit1.checked == true)) {
		horsesLimit.classList.add('make-hidden');
		parlaysLimit.classList.remove('make-hidden');
		step2Message.classList.add('make-hidden');
		nextCounter++
	} else if (nextCounter == 5 && parlaysLimit1.value !== '' && parlaysLimit2.value !== '' && parlaysLimit3.value !== '' && parlaysLimit4.value !== '' && (parlaysLimit5.checked == true || parlaysLimit6.checked == true) && parlaysLimit7.value !== '' && (parlaysLimit8.checked == true || parlaysLimit9.checked == true) && (parlaysLimit10.checked == true || parlaysLimit11.checked == true) && parlaysLimit12.value !== '' && parlaysLimit13.value !== '') {
	  parlaysLimit.classList.add('make-hidden');
		teasersLimit.classList.remove('make-hidden');
		step2Message.classList.add('make-hidden');
		nextCounter++
	} else if (nextCounter == 6 && teasersLimit1.value !== '' && (teasersLimit2.checked == true || teasersLimit3.checked == true) && (teasersLimit4.checked == true || teasersLimit5.checked == true) && (teasersLimit6.checked == true || teasersLimit7.checked == true) && (teasersLimit8.checked == true || teasersLimit9.checked == true) && (teasersLimit10.checked == true || teasersLimit11.checked == true)) {
		teasersLimit.classList.add('make-hidden');
		specificLimit.classList.remove('make-hidden');
		step2Message.classList.add('make-hidden');
		step2Next.setAttribute('style', 'display:none;');
		step2Send.classList.remove('make-hidden'); 
		nextCounter++
	} else {
	  step2Message.classList.remove('make-hidden');
	}
};

const prevStep = function (argument) {
	console.log('jojola')
	if (nextCounter == 2) {
		casinoLimit.classList.add('make-hidden');
		basicLimit.classList.remove('make-hidden');
		step2Message.classList.add('make-hidden');
		nextCounter--
	} else if (nextCounter == 3) {
		onlineCasinoLimit.classList.add('make-hidden');
		casinoLimit.classList.remove('make-hidden');
		step2Message.classList.add('make-hidden');
		nextCounter--
	} else if (nextCounter == 4) {
		horsesLimit.classList.add('make-hidden');
		onlineCasinoLimit.classList.remove('make-hidden');
		step2Message.classList.add('make-hidden');
		nextCounter--
	} else if (nextCounter == 5) {
		parlaysLimit.classList.add('make-hidden');
		horsesLimit.classList.remove('make-hidden');
		step2Message.classList.add('make-hidden');
		nextCounter--
	} else if (nextCounter == 6) {
		teasersLimit.classList.add('make-hidden');
		parlaysLimit.classList.remove('make-hidden');
		step2Message.classList.add('make-hidden');
		nextCounter--
	} else if (nextCounter == 7) {
		specificLimit.classList.add('make-hidden');
		teasersLimit.classList.remove('make-hidden');
		step2Message.classList.add('make-hidden');
		step2Next.setAttribute('style', 'display:inline-block;');
		step2Send.classList.add('make-hidden'); 
		nextCounter--
	}
};

// const basicLimit = document.getElementById('basicLimit');
// const casinoLimit = document.getElementById('casinoLimit');
// const onlineCasinoLimit = document.getElementById('onlineCasinoLimit');
// const horsesLimit = document.getElementById('horsesLimit');
// const parlaysLimit = document.getElementById('parlaysLimit');
// const teasersLimit = document.getElementById('teasersLimit');
// const specificLimit = document.getElementById('specificLimit');


step2Next.addEventListener('click', nextStep);
step2Prev.addEventListener('click', prevStep);