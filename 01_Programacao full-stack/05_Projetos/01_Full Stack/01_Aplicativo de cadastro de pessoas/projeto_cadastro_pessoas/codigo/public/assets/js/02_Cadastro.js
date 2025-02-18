// URL do servidor JSON
const SERVER_URL = 'http://localhost:3000/usuarios';

// Função para obter o próximo ID do usuário
async function getNextUserId() {
    const response = await fetch(SERVER_URL);
    const users = await response.json();

    if (users.length === 0) {
        return 1;
    }

    const lastUserId = users.reduce((max, user) => (user.id > max ? user.id : max), 0);
    return lastUserId + 1;
}

// Função para salvar usuário, gerar PDF e limpar inputs
async function salvaLogin(event) {
    event.preventDefault();

    const login = document.getElementById('txt_login').value;
    const nome = document.getElementById('txt_nome').value;
    const email = document.getElementById('txt_email').value;
    const idade = document.getElementById('txt_idade').value;
    const genero = document.getElementById('txt_genero').value;
    const endereco = document.getElementById('txt_endereco').value;
    const senha = document.getElementById('txt_senha').value;
    const senha2 = document.getElementById('txt_senha2').value;
    const renda = document.getElementById('txt_renda').value;
    const comodos = document.getElementById('txt_comodos').value;
    const acesso_internet = document.getElementById('txt_acesso_internet').value;

    // Validação das senhas
    if (senha !== senha2) {
        alert('As senhas não conferem.');
        return;
    }

    const nextId = await getNextUserId();

    const usuario = {
        id: nextId,
        login,
        nome,
        email,
        idade,
        genero,
        endereco,
        senha,
        renda,
        comodos,
        acesso_internet,
    };

    // Salvar no servidor
    try {
        await fetch(SERVER_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario),
        });

        // Gerar PDF
        gerarPDF(usuario);

        // Limpar campos
        document.getElementById('login-form').reset();

        alert('Usuário cadastrado com sucesso!');
    } catch (error) {
        alert('Erro ao cadastrar usuário: ' + error);
    }
}

// Função para gerar o PDF
function gerarPDF(usuario) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.text("Cadastro de Usuário", 20, 20);
    doc.setFont("helvetica", "normal");
    doc.text(`Nome: ${usuario.nome}`, 20, 40);
    doc.text(`Email: ${usuario.email}`, 20, 50);
    doc.text(`Idade: ${usuario.idade}`, 20, 60);
    doc.text(`Gênero: ${usuario.genero}`, 20, 70);
    doc.text(`Endereço: ${usuario.endereco}`, 20, 80);
    doc.text(`Renda Familiar: ${usuario.renda}`, 20, 90);
    doc.text(`Número de Cômodos: ${usuario.comodos}`, 20, 100);
    doc.text(`Acesso à Internet: ${usuario.acesso_internet}`, 20, 110);

    // Salvar o PDF
    doc.save(`Cadastro_${usuario.nome}.pdf`);
}

// Adiciona o evento ao formulário
document.getElementById('login-form').addEventListener('submit', salvaLogin);
