function openModal(imageUrl) {
    document.getElementById('modalImage').src = imageUrl;
    document.getElementById('modal').style.display = 'flex';
    document.addEventListener('keydown', closeModalOnEscape);
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.removeEventListener('keydown', closeModalOnEscape);
}

function closeModalOnEscape(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}