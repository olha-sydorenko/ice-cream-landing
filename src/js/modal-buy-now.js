(() => {
  const refs = {
    openModalBtn1: document.querySelector('[data-modal-buy-now-open1]'),
    openModalBtn2: document.querySelector('[data-modal-buy-now-open2]'),
    closeModalBtn: document.querySelector('[data-modal-buy-now-close]'),
    modalBuyNow: document.querySelector('[data-modal-buy-now]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalBuyNow.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

