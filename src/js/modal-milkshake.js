(() => {
    const refs = {
      openModalBtn: document.querySelector('[milkshake-modal-open]'),
      closeModalBtn: document.querySelector('[milkshake-modal-close]'),
      modal: document.querySelector('[milkshake-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();