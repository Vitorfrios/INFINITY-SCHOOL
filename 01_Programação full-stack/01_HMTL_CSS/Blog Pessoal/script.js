/* Fetch user profile data from GitHub API */
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.github.com/users/Vitorfrios')
        .then(response => response.json())
        .then(data => {
            document.getElementById('avatar_url').src = data.avatar_url;
            document.getElementById('name').innerText = data.name;
            document.getElementById('bio').innerText = data.bio;
            document.getElementById('location').innerText = data.location;
        })
        .catch(error => console.error('Error fetching user profile:', error));

    /* Fetch user repositories data from GitHub API */
    fetch('https://api.github.com/users/Vitorfrios/repos')
        .then(response => response.json())
        .then(repositories => {
            const reposContainer = document.getElementById('repos');
            repositories.forEach(repo => {
                const repoCard = document.createElement('div');
                repoCard.className = 'card col-12 col-sm-3';
                repoCard.style.height = '18rem';
                repoCard.innerHTML = `
                    <a class="repo-link" href="index2.html?name=${repo.name}">${repo.name}</a>
                    <div class="card-body pt-0">
                        <strong>${repo.description || 'No description provided'}</strong>
                        <p class="card-text">
                            <div class="icon">
                                <div class="icones star"><i class="fa-solid fa-star"></i>
                                    <p>${repo.stargazers_count}</p>
                                </div>
                                <div class="icones user"><i class="fa-solid fa-user"></i>
                                    <p>${repo.watchers_count}</p>
                                </div>
                            </div>
                        </p>
                    </div>
                `;
                reposContainer.appendChild(repoCard);
            });
        })
        .catch(error => console.error('Error fetching repositories:', error));

    /* Carrousel */
    const carouselContainer = document.getElementById('carousel');

    function carregarConteudos(todosOsConteudos) {
        let carousel = '';

        for (let i = 0; i < todosOsConteudos.length; i++) {
            let conteudo = todosOsConteudos[i];
            carousel += `
                <div class="carousel-item ${i === 0 ? 'active' : ''}" id="item-${i + 1}">
                    <img src="${conteudo.image}" class="d-block w-100" alt="Foto de ${conteudo.id}">
                </div>`;
        }
        carouselContainer.innerHTML = carousel;
    }

    function carregarConteudosJSON() {
        fetch('http://localhost:3000/conteudo') // Ajuste para o endpoint correto
            .then(res => res.json())
            .then(data => {
                console.log('Dados carregados:', data);
                if (Array.isArray(data) && data.length > 0) {
                    carregarConteudos(data);
                } else if (data && Array.isArray(data[0])) {
                    carregarConteudos(data[0]);
                } else {
                    console.error('Formato de dados inválido:', data);
                }
            })
            .catch(error => {
                console.error('Erro ao carregar os dados:', error);
            });
    }

    carregarConteudosJSON();

    /* Fetch dos colegas */
    function createColegaBox(colega) {
        const box = document.createElement('div');
        box.className = 'box';

        const img = document.createElement('img');
        img.src = colega.image;

        const span = document.createElement('span');
        span.textContent = colega.name;

        const link = document.createElement('a');
        link.href = colega.github;
        link.target = '_blank';
        link.textContent = 'GitHub';

        box.appendChild(img);
        box.appendChild(span);
        box.appendChild(link);

        return box;
    }

    function renderColegas(colegas) {
        const container = document.getElementById('colegas-container');
        container.innerHTML = '';
        colegas.forEach(colega => {
            const colegaBox = createColegaBox(colega);
            container.appendChild(colegaBox);
        });
    }

    fetch('db.json') // Ajuste para o endpoint correto
        .then(response => response.json())
        .then(data => {
            renderColegas(data.colegas);
        })
        .catch(error => {
            console.error('Erro ao carregar o JSON:', error);
        });
});
