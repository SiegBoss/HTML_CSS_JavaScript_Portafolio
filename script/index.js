// habre el modal con la imagen que se le pase por parametro
function openModal(imageUrl) {

    document.getElementById('modalImage').src = imageUrl;
    document.getElementById('modal').style.display = 'flex';
    document.addEventListener('keydown', closeModalOnEscape);

}

// cierra el modal
function closeModal() {

    document.getElementById('modal').style.display = 'none';
    document.removeEventListener('keydown', closeModalOnEscape);

}

// cierra el modal si se presiona la tecla escape
function closeModalOnEscape(event) {

    if (event.key === 'Escape') {
        closeModal();
    }
    
}

