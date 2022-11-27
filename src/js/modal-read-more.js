(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal__read-more-open]"),
    closeModalBtn: document.querySelector("[data-modal__read-more-close]"),
    modal: document.querySelector("[data-modal__read-more]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();