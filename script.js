'use strict';

/* Animação Navegação por tabs */
const ativo = 'ativo';
function clickHandleTabs() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(ativo);
    function handleTabs(index) {
      tabContent.forEach(item => {
        item.classList.remove(ativo);
      });
      tabContent[index].classList.add(ativo);
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener('click', function () {
        handleTabs(index);
      });
    });
  }
}
clickHandleTabs();
