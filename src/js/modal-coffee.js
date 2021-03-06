(() => {
    const refs = {
      openModalBtn: document.querySelector('[coffee-modal-open]'),
      closeModalBtn: document.querySelector('[coffee-modal-close]'),
      modal: document.querySelector('[coffee-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();