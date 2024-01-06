// Funcion para abrir el modal con la imagen seleccionada
function openModal(imageUrl) {

    document.getElementById('modalImage').src = imageUrl;
    document.getElementById('modal').style.display = 'flex';
    document.addEventListener('keydown', closeModalOnEscape);

}

// Funcion para cerrar el modal
function closeModal() {

    document.getElementById('modal').style.display = 'none';
    document.removeEventListener('keydown', closeModalOnEscape);

}

// Funcion para cerrar el modal al presionar la tecla escape
function closeModalOnEscape(event) {

    if (event.key === 'Escape') {
        closeModal();
    }

}