// Filtros de Produtos
document.addEventListener('DOMContentLoaded', function () {
    const filtroBtns = document.querySelectorAll('.filtro-btn');
    const produtoCards = document.querySelectorAll('.produto-card');

    filtroBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            filtroBtns.forEach(b => b.classList.remove('active'));
            
            this.classList.add('active');

            const categoria = this.getAttribute('data-categoria');

            
            produtoCards.forEach(card => {
                const cardCategoria = card.getAttribute('data-categoria');
                if (categoria === 'todos' || cardCategoria === categoria) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Modal de Detalhes do Produto
    const modal = document.getElementById('produtoModal');
    const infoBtns = document.querySelectorAll('.info-btn');
    const closeModal = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');

    infoBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const produto = this.getAttribute('data-produto');
            
            modalTitle.textContent = this.parentElement.querySelector('h3').textContent;
            modalDesc.textContent = this.parentElement.querySelector('p').textContent;
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});