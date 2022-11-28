(() => {
  const refs = {
    openModalBtn1: document.querySelector('[data-modal-product-info-open1]'),
    openModalBtn2: document.querySelector('[data-modal-product-info-open2]'),
    openModalBtn3: document.querySelector('[data-modal-product-info-open3]'),
    closeModalBtn: document.querySelector('[data-modal-product-info-close]'),
    modalProduct: document.querySelector('[data-modal-product-info]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.openModalBtn3.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalProduct.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
