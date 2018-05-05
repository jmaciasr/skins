const modalPrev = document.getElementById('modalPrev');
const modalPrevExit = document.getElementById('modalPrevExit');
const modalSkinImg = document.getElementById('modalSkinImg');
const formSkinSelect = document.getElementById('formSkinSelect');
const skin = document.getElementsByClassName('skin');
const skinSelect = document.getElementsByClassName('skinSelect');

const showModalPrev = function (event) {
  event.stopPropagation();
  const currSkin = this;
  const SkinImg = currSkin.childNodes[1].src;
  modalSkinImg.src = SkinImg;
  modalPrev.classList.remove('make-hidden');
};

const hiddeModalPrev = function () {
  modalPrev.classList.add('make-hidden');
};

const selectSkin = function () {
	const currSelect = this;
	for (var i = 0; i < skinSelect.length; i++) {
		skinSelect[i].checked = false;
	}
	currSelect.checked = true;
	const currValue = currSelect.value;
	formSkinSelect.value = currValue;
};

for (let i = 0; i < skin.length; i++) {
	skin[i].onclick = showModalPrev;
}

for (let i = 0; i < skinSelect.length; i++) {
	skinSelect[i].onclick = selectSkin;
}

// modalPrev.addEventListener('click', hiddeModalPrev);
modalPrevExit.addEventListener('click', hiddeModalPrev);
