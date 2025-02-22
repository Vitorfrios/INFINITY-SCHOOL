// 01_Inicio.js

// Função para o menu de navegação responsivo
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

// Função para interação com os cards de serviços
document.addEventListener('DOMContentLoaded', function() {
    const servicoCards = document.querySelectorAll('.servico-card');

    servicoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Função para o carrossel de depoimentos
document.addEventListener('DOMContentLoaded', function() {
    const depoimentoCards = document.querySelectorAll('.depoimento-card');

    // Mostrar todos os depoimentos
    depoimentoCards.forEach(card => {
        card.style.display = 'block';
    });
});

// Função para interação com os cards da equipe
document.addEventListener('DOMContentLoaded', function() {
    const equipeCards = document.querySelectorAll('.equipe-card');

    equipeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const overlay = this.querySelector('.card-overlay');
            overlay.style.opacity = '1';
            overlay.style.visibility = 'visible';
        });

        card.addEventListener('mouseleave', function() {
            const overlay = this.querySelector('.card-overlay');
            overlay.style.opacity = '0';
            overlay.style.visibility = 'hidden';
        });
    });
});

// Função para interação com os cards de promoções
document.addEventListener('DOMContentLoaded', function() {
    const promocaoCards = document.querySelectorAll('.promocao-card');

    promocaoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const overlay = this.querySelector('.card-overlay');
            overlay.style.opacity = '1';
            overlay.style.visibility = 'visible';
        });

        card.addEventListener('mouseleave', function() {
            const overlay = this.querySelector('.card-overlay');
            overlay.style.opacity = '0';
            overlay.style.visibility = 'hidden';
        });
    });
});

// Função para interação com a galeria
document.addEventListener('DOMContentLoaded', function() {
    const galeriaItems = document.querySelectorAll('.galeria-item');

    galeriaItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const overlay = this.querySelector('.galeria-overlay');
            overlay.style.opacity = '1';
            overlay.style.visibility = 'visible';
        });

        item.addEventListener('mouseleave', function() {
            const overlay = this.querySelector('.galeria-overlay');
            overlay.style.opacity = '0';
            overlay.style.visibility = 'hidden';
        });
    });
});