export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const classAtivo = 'active';

  function activeAccordion() {
    this.classList.toggle(classAtivo);
    this.nextElementSibling.classList.toggle(classAtivo);
  }
  if (accordionList.length) {
    accordionList[0].classList.add(classAtivo);
    accordionList[0].nextElementSibling.classList.add(classAtivo);

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
