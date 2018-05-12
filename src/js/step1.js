const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step1Message = document.getElementById('step1Message');
const modalPrev = document.getElementById('modalPrev');
const modalPrevExit = document.getElementById('modalPrevExit');
const modalSkinImg = document.getElementById('modalSkinImg');
const formSkinAgent = document.getElementById('formSkinAgent');
const formSkinDomain1 = document.getElementById('formSkinDomain1');
const formSkinDomain2 = document.getElementById('formSkinDomain2');
const formSkinSelect = document.getElementById('formSkinSelect');
const skin = document.getElementsByClassName('skin');
const skinSelect = document.getElementsByClassName('skinSelect');
const btnStep1 = document.getElementById('btnStep1');
const skinAgent = document.getElementById('skinAgent');
const skinDomain1 = document.getElementById('skinDomain1');
const skinDomain2 = document.getElementById('skinDomain2');
const skinSelected = document.getElementById('skinSelected');

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

const selectSkin = function (event) {
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

const nextStep = function (event) {
  event.preventDefault();

  if (formSkinAgent.value !== '' && formSkinDomain1.value !== '' && formSkinDomain2.value !== '' && formSkinSelect.value !== '') {
    step1.classList.add('make-hidden');
    step2.classList.remove('make-hidden');
    skinAgent.value = formSkinAgent.value;
    skinDomain1.value = formSkinDomain1.value;
    skinDomain2.value = formSkinDomain2.value;
    skinSelected.value = formSkinSelect.value;

  } else {
      step1Message.classList.remove('make-hidden')
  }
};

// modalPrev.addEventListener('click', hiddeModalPrev);
modalPrevExit.addEventListener('click', hiddeModalPrev);

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        hiddeModalPrev();
    }
};

btnStep1.addEventListener('click', nextStep);
