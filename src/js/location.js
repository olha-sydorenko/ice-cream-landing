(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-location-open]'),
    closeModalBtn: document.querySelector('[data-location-close]'),
    location: document.querySelector('[data-location]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.location.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
