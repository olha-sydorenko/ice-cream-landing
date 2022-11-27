(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-product-info-open]'),
    closeModalBtn: document.querySelector('[data-modal-product-info-close]'),
    modalProduct: document.querySelector('[data-modal-product-info]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalProduct.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
