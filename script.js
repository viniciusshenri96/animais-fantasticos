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

/* Animação accordion List */
function clickAccordion() {
  const accordion = document.querySelectorAll('.js-accordion dt');

  if (accordion.length) {
    accordion[0].classList.add(ativo);
    accordion[0].nextElementSibling.classList.add(ativo);
    function handleAccordion() {
      this.classList.toggle(ativo);
      this.nextElementSibling.classList.toggle(ativo);
    }

    accordion.forEach(item => {
      item.addEventListener('click', handleAccordion);
    });
  }
}
clickAccordion();
