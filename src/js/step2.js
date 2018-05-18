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

const teasers1 = document.getElementById('teasers1');
const teasers2 = document.getElementById('teasers2');
const teasers3 = document.getElementById('teasers3');
const teasers4 = document.getElementById('teasers4');
const teasers5 = document.getElementById('teasers5');
const teasers6 = document.getElementById('teasers6');
const teasers7 = document.getElementById('teasers7');

const step2Prev = document.getElementById('step2Prev');
const step2Next = document.getElementById('step2Next');
let nextCounter = 1;

const soothTop = function () {
	$('html, body').animate({
    scrollTop: $("#step2").offset().top
	}, 1000);
};

const showOptions = function (op1, op2) {
	op1.classList.remove('make-hidden');
	op1.setAttribute('min', '1')
	if (op2 !== undefined) {
		op2.classList.remove('make-hidden');
		op2.setAttribute('min', '1')
		op2.value = '';
	} 
	op1.value = '';
};

const hiddeOptions = function (op1, op2) {
	op1.classList.add('make-hidden');
	op1.setAttribute('min', '0')
	op1.value = 0;
	if (op2 !== undefined) {
		op2.classList.add('make-hidden');
		op2.setAttribute('min', '0')
		op2.value = 0;
	}
};

function hiddehorse() {
	hiddeOptions(horsesLimit3,horsesLimit4);
}

function showhorse() {
	showOptions(horsesLimit3,horsesLimit4);
}

function hiddeTeasersReg() {
	hiddeOptions(teasers3, teasers4);
}

function showTeasersReg() {
	showOptions(teasers3, teasers4);
}

function hiddeTeasersMonst() {
	hiddeOptions(teasers7);
}

function showTeasersMonst() {
	showOptions(teasers7);
}

function hiddeParlaySpot() {
	hiddeOptions(parlaysLimit7);
}

function showParlaySpot() {
	showOptions(parlaysLimit7);
}

function hiddeRobin() {
	hiddeOptions(parlaysLimit10, parlaysLimit11);
}

function showRobin() {
	showOptions(parlaysLimit10, parlaysLimit11);
}

const nextStep = function () {
	if (nextCounter == 1 && basicLimit1.value !== '' && basicLimit2.value !== '' && basicLimit3.value !== '') {
		basicLimit.classList.add('make-hidden');
		casinoLimit.classList.remove('make-hidden');
		step2Message.classList.add('make-hidden');
		nextCounter++;
		soothTop();
	} else if (nextCounter == 2 && casinoLimit1.value !== '' && casinoLimit2.value !== '' && casinoLimit3.value !== '' && casinoLimit4.value !== '') {
		casinoLimit.classList.add('make-hidden');
		onlineCasinoLimit.classList.remove('make-hidden');
		step2Message.classList.add('make-hidden');
		nextCounter++;
		soothTop();
	} else if (nextCounter == 3 && onlineCasinoLimit1.value !== '' && onlineCasinoLimit2.value !== '' && onlineCasinoLimit3.value !== '' && onlineCasinoLimit4.value !== '') {
		onlineCasinoLimit.classList.add('make-hidden');
		horsesLimit.classList.remove('make-hidden');
		step2Message.classList.add('make-hidden');
		nextCounter++;
		soothTop();
	} else if (nextCounter == 4 && horsesLimit3.value !== '' && horsesLimit4.value !== '' && (horsesLimit2.checked == true || horsesLimit1.checked == true)) {
		horsesLimit.classList.add('make-hidden');
		parlaysLimit.classList.remove('make-hidden');
		step2Message.classList.add('make-hidden');
		nextCounter++;
		soothTop();
	} else if (nextCounter == 5 && parlaysLimit1.value !== '' && parlaysLimit2.value !== '' && parlaysLimit3.value !== '' && parlaysLimit4.value !== '' && (parlaysLimit5.checked == true || parlaysLimit6.checked == true) && parlaysLimit7.value !== '' && (parlaysLimit8.checked == true || parlaysLimit9.checked == true) && parlaysLimit10.value !== '' && parlaysLimit11.value !== '') {
	  	parlaysLimit.classList.add('make-hidden');
		teasersLimit.classList.remove('make-hidden');
		step2Message.classList.add('make-hidden');
		step2Next.setAttribute('style', 'display:none;');
		step2Send.classList.remove('make-hidden'); 
		nextCounter++;
		soothTop();
	} else {
	  step2Message.classList.remove('make-hidden');
	}
};

const prevStep = function (argument) {
	if (nextCounter == 1) {
		step2.classList.add('make-hidden');
    	step1.classList.remove('make-hidden');
	} else if (nextCounter == 2) {
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
		step2Next.setAttribute('style', 'display:inline-block;');
		step2Send.classList.add('make-hidden'); 
		nextCounter--
	}
};

step2Next.addEventListener('click', nextStep);
step2Prev.addEventListener('click', prevStep);
horsesLimit1.addEventListener('click', showhorse);
horsesLimit2.addEventListener('click', hiddehorse);
parlaysLimit5.addEventListener('click', showParlaySpot);
parlaysLimit6.addEventListener('click', hiddeParlaySpot);
teasers1.addEventListener('click', showTeasersReg);
teasers2.addEventListener('click', hiddeTeasersReg);
teasers5.addEventListener('click', showTeasersMonst);
teasers6.addEventListener('click', hiddeTeasersMonst);
parlaysLimit8.addEventListener('click', showRobin);
parlaysLimit9.addEventListener('click', hiddeRobin);