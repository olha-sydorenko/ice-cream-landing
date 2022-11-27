(() => {
  const refs = {
    openModalBtns: document.querySelector('[data-modal-buy-now-open]'),
    closeModalBtn: document.querySelector('[data-modal-buy-now-close]'),
    modal: document.querySelector('[data-modal-buy-now]'),
    body: document.querySelector('body'),
  };
  refs.openModalBtns.forEach(el => {
    el.addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();



