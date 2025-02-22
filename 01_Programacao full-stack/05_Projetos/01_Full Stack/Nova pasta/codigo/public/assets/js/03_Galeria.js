/*
DIGITAR npm start NO TERMINAL PARA INICIALIZAR O JSON SERVER
npm start 
*/
// Inicialização do Lightbox
const inicializarLightbox = () => {
    lightbox.option({
        resizeDuration: 200, // Duração da animação de redimensionamento
        wrapAround: true, // Permite navegar circularmente pelas imagens
        showImageNumberLabel: false, // Oculta o número da imagem (ex: "Imagem 1 de 6")
        positionFromTop: 100, // Posição do lightbox a partir do topo da página
    });
};

// Fechar o Lightbox ao clicar fora da imagem
const fecharLightboxFora = () => {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('lb-overlay')) {
            lightbox.close();
        }
    });
};

// Inicialização das Funções
document.addEventListener('DOMContentLoaded', () => {
    inicializarLightbox();
    fecharLightboxFora();
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
            // Busca 6 imagens aleatórias de cachorros
            for (let i = 0; i < 6; i++) {
                const response = await fetch('https://dog.ceo/api/breeds/image/random');
                const data = await response.json();

                if (data.status === 'success') {
                    const imageUrl = data.message;

                    // Cria o elemento <a> e <img> para a Lightbox
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

    // Chama a função para buscar e adicionar as imagens
    fetchDogImages();
});