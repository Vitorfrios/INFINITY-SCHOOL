/*
DIGITAR npm start NO TERMINAL PARA INICIALIZAR O JSON SERVER
npm start 
*/

// Inicialização do Lightbox
const inicializarLightbox = () => {
    lightbox.option({
        resizeDuration: 200, 
        wrapAround: true, 
        showImageNumberLabel: false, 
        positionFromTop: 100, 
    });
};



const prevenirAberturaDireta = () => {
    const galeriaContainer = document.querySelector('.galeria-container');

    galeriaContainer.addEventListener('click', (e) => {
        
        if (e.target.tagName === 'IMG') {
            e.preventDefault(); 
            lightbox.start(e.target.parentElement); 
        }
    });
};

// Inicialização das Funções
document.addEventListener('DOMContentLoaded', () => {
    inicializarLightbox();
    fecharLightboxFora();
    prevenirAberturaDireta();
});

// Função para o menu de navegação responsivo
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Função para buscar e adicionar imagens de cachorros
    async function fetchDogImages() {
        const galeriaContainer = document.querySelector('.galeria-container');

        try {
            
            for (let i = 0; i < 6; i++) {
                const response = await fetch('https://dog.ceo/api/breeds/image/random');
                const data = await response.json();

                if (data.status === 'success') {
                    const imageUrl = data.message;

                    const link = document.createElement('a');
                    link.href = imageUrl;
                    link.setAttribute('data-lightbox', 'galeria');
                    link.setAttribute('data-title', 'Cachorro aleatório');

                    const img = document.createElement('img');
                    img.src = imageUrl;
                    img.alt = 'Cachorro aleatório';

                    link.appendChild(img);
                    galeriaContainer.appendChild(link);
                }
            }
        } catch (error) {
            console.error('Erro ao buscar imagens de cachorros:', error);
        }
    }

    fetchDogImages();
});