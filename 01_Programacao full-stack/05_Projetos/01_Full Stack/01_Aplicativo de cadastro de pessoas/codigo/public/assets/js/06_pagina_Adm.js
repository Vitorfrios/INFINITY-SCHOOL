const API_URL = 'http://localhost:3000/usuarios';

const inscricoesList = document.getElementById('inscricoes-list');
const searchInput = document.getElementById('search');
const editModal = document.getElementById('editModal');
const editForm = document.getElementById('editForm');
const closeModal = document.querySelector('.close');

let currentEditId = null;

// Função para buscar inscrições com filtro de status
async function fetchInscricoes(status = null) {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        let filteredData = data;

        
        if (status) {
            filteredData = data.filter(inscricao => inscricao.status === status);
        }

        renderInscricoes(filteredData);
    } catch (error) {
        console.error('Erro ao buscar inscrições:', error);
    }
}

// Função para renderizar a lista de inscrições
function renderInscricoes(inscricoes) {
    inscricoesList.innerHTML = '';
    inscricoes.forEach(inscricao => {
        const inscricaoItem = document.createElement('div');
        inscricaoItem.className = 'inscricao-item';
        inscricaoItem.innerHTML = `
            <div class="info">
                <span class="nome-cpf">${inscricao.nome} - ${inscricao.cpf}</span>
                <span class="status">Status: ${inscricao.status || 'pendente'}</span>
            </div>
            <div class="acoes">
                <button onclick="editInscricao(${inscricao.id})">Editar</button>
                <button onclick="approveInscricao(${inscricao.id})">Aprovar</button>
                <button onclick="reproveInscricao(${inscricao.id})">Reprovar</button>
                <button onclick="gerarPDF(${inscricao.id})">Baixar PDF</button>
            </div>
        `;
        inscricoesList.appendChild(inscricaoItem);
    });
}

// Função para gerar e baixar o PDF
async function gerarPDF(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        const inscricao = await response.json();

        if (inscricao) {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            
            doc.setFont("helvetica", "bold");
            doc.setFontSize(18);
            doc.text("Detalhes da Inscrição", 20, 20);

            
            doc.setFont("helvetica", "normal");
            doc.setFontSize(12);
            let y = 30;
            doc.text(`Nome: ${inscricao.nome}`, 20, y);
            y += 10;
            doc.text(`Email: ${inscricao.email}`, 20, y);
            y += 10;
            doc.text(`Idade: ${inscricao.idade}`, 20, y);
            y += 10;
            doc.text(`Gênero: ${inscricao.genero}`, 20, y);
            y += 10;
            doc.text(`Endereço: ${inscricao.endereco}`, 20, y);
            y += 10;
            doc.text(`Renda: ${inscricao.renda}`, 20, y);
            y += 10;
            doc.text(`Cômodos: ${inscricao.comodos}`, 20, y);
            y += 10;
            doc.text(`Acesso à Internet: ${inscricao.acesso_internet}`, 20, y);
            y += 10;
            doc.text(`CPF: ${inscricao.cpf}`, 20, y);
            y += 10;
            doc.text(`Data de Nascimento: ${inscricao.dataNascimento}`, 20, y);
            y += 10;
            doc.text(`Telefone: ${inscricao.telefone}`, 20, y);
            y += 10;
            doc.text(`Status: ${inscricao.status || 'pendente'}`, 20, y);

            
            doc.save(`Inscricao_${inscricao.nome}.pdf`);
        }
    } catch (error) {
        console.error('Erro ao gerar PDF:', error);
    }
}

// Função para editar uma inscrição
async function editInscricao(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        const inscricao = await response.json();
        if (inscricao) {
            currentEditId = id;
            
            document.getElementById('editNome').value = inscricao.nome;
            document.getElementById('editEmail').value = inscricao.email;
            document.getElementById('editIdade').value = inscricao.idade;
            document.getElementById('editGenero').value = inscricao.genero;
            document.getElementById('editEndereco').value = inscricao.endereco;
            document.getElementById('editRenda').value = inscricao.renda;
            document.getElementById('editComodos').value = inscricao.comodos;
            document.getElementById('editInternet').value = inscricao.acesso_internet;
            document.getElementById('editCPF').value = inscricao.cpf;
            document.getElementById('editDataNascimento').value = inscricao.dataNascimento;
            document.getElementById('editTelefone').value = inscricao.telefone;
            editModal.style.display = 'flex';
        }
    } catch (error) {
        console.error('Erro ao buscar inscrição:', error);
    }
}

// Função para salvar as alterações de uma inscrição
editForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    if (currentEditId) {
        const updatedInscricao = {
            nome: document.getElementById('editNome').value,
            email: document.getElementById('editEmail').value,
            idade: document.getElementById('editIdade').value,
            genero: document.getElementById('editGenero').value,
            endereco: document.getElementById('editEndereco').value,
            renda: document.getElementById('editRenda').value,
            comodos: document.getElementById('editComodos').value,
            acesso_internet: document.getElementById('editInternet').value,
            cpf: document.getElementById('editCPF').value,
            dataNascimento: document.getElementById('editDataNascimento').value,
            telefone: document.getElementById('editTelefone').value,
            status: "pendente" 
        };

        try {
            const response = await fetch(`${API_URL}/${currentEditId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedInscricao)
            });
            if (response.ok) {
                alert('Inscrição atualizada com sucesso!');
                editModal.style.display = 'none';
                fetchInscricoes(); 
            }
        } catch (error) {
            console.error('Erro ao atualizar inscrição:', error);
        }
    }
});

// Função para aprovar uma inscrição
async function approveInscricao(id) {
    const confirmApprove = confirm('Tem certeza que deseja aprovar esta inscrição?');
    if (confirmApprove) {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ status: "aprovado" })
            });
            if (response.ok) {
                alert('Inscrição aprovada com sucesso!');
                fetchInscricoes(); 
            }
        } catch (error) {
            console.error('Erro ao aprovar inscrição:', error);
        }
    }
}

// Função para reprovar uma inscrição
async function reproveInscricao(id) {
    const confirmReprove = confirm('Tem certeza que deseja reprovar esta inscrição?');
    if (confirmReprove) {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ status: "reprovado" })
            });
            if (response.ok) {
                alert('Inscrição reprovada com sucesso!');
                fetchInscricoes(); 
            }
        } catch (error) {
            console.error('Erro ao reprovar inscrição:', error);
        }
    }
}

// Função para pesquisar inscrições por nome, CPF ou status
searchInput.addEventListener('input', async function () {
    const searchTerm = searchInput.value.toLowerCase();
    try {
        const response = await fetch(API_URL);
        const inscricoes = await response.json();
        const filteredInscricoes = inscricoes.filter(inscricao =>
            inscricao.nome.toLowerCase().includes(searchTerm) ||
            inscricao.cpf.includes(searchTerm) ||
            (inscricao.status && inscricao.status.toLowerCase().includes(searchTerm))
        );
        renderInscricoes(filteredInscricoes);
    } catch (error) {
        console.error('Erro ao buscar inscrições:', error);
    }
});

// Fechar o modal
closeModal.addEventListener('click', function () {
    editModal.style.display = 'none';
});

// Fechar o modal ao clicar fora dele
window.addEventListener('click', function (event) {
    if (event.target === editModal) {
        editModal.style.display = 'none';
    }
});

// Função para filtrar inscrições e destacar o botão selecionado
function filtrarInscricoes(status = null) {
    
    const botoes = document.querySelectorAll('.filtros button');
    botoes.forEach(botao => botao.classList.remove('active'));

    
    if (status === null) {
        document.querySelector('.filtros button:nth-child(1)').classList.add('active');
    } else if (status === 'aprovado') {
        document.querySelector('.filtros button:nth-child(2)').classList.add('active');
    } else if (status === 'reprovado') {
        document.querySelector('.filtros button:nth-child(3)').classList.add('active');
    }

    
    fetchInscricoes(status);
}

// Função para buscar inscrições com filtro de status
async function fetchInscricoes(status = null) {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        let filteredData = data;

        
        if (status) {
            filteredData = data.filter(inscricao => inscricao.status === status);
        }

        renderInscricoes(filteredData);
    } catch (error) {
        console.error('Erro ao buscar inscrições:', error);
    }
}

// Carregar as inscrições ao iniciar
document.addEventListener('DOMContentLoaded', () => {
    filtrarInscricoes(); 
});