(() => {
    const refs = {
      openModalBtn: document.querySelector('[reedMore-modal-open]'),
      closeModalBtn: document.querySelector('[reedMore-modal-close]'),
      modal: document.querySelector('[reedMore-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();