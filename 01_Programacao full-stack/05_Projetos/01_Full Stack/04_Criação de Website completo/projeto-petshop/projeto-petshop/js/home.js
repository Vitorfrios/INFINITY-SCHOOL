// Função para esconder o texto de boas-vindas com animação
window.onload = function() {
    const introText = document.querySelector('.intro p');
    setTimeout(() => {
        introText.style.transition = "opacity 1s";
        introText.style.opacity = 0;
    }, 3000); // Texto desaparece após 3 segundos
};

// Função de botão de chamada para ação (Entre em Contato)
const ctaButton = document.querySelector('footer a');
ctaButton.addEventListener('click', () => {
    alert("Em breve, você será redirecionado para a página de contato!");
    // Redirecionar para uma página de contato (comentado, mas pode ser ativado)
    // window.location.href = "contato.html";
});

// Carrossel de Imagens para Galeria de Fotos
let currentImageIndex = 0;
const images = [
    "https://images.unsplash.com/photo-1580912201311-1d33a98b418d",
    "https://images.unsplash.com/photo-1600181970384-8cfe1c3ed8e5",
    "https://images.unsplash.com/photo-1600285623290-9d3a58fa1f89"
];

function showNextImage() {
    const imageElement = document.querySelector('.image-feature');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imageElement.src = images[currentImageIndex];
}

// Troca a imagem a cada 5 segundos
setInterval(showNextImage, 5000); // Troca a imagem a cada 5 segundos

