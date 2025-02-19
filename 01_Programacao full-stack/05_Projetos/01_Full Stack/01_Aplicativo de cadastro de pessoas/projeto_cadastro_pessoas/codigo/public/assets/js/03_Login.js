const SERVER_URL = 'http://localhost:3000/usuarios';
const LOGADO_URL = 'http://localhost:3000/usuario_logado';

// Função para buscar os dados do usuário com base no e-mail e senha
async function obterUsuario(email, senha) {
    try {
        const response = await fetch(SERVER_URL);
        const usuarios = await response.json();

        // Busca o usuário correspondente
        return usuarios.find(user => user.email === email && user.senha === senha);
    } catch (error) {
        console.error('Erro ao conectar ao servidor:', error);
        return null;
    }
}

// Função para verificar se já existe um usuário logado no servidor
async function obterUsuarioLogado() {
    try {
        const response = await fetch(LOGADO_URL);
        const data = await response.json();
        return data.length > 0 ? data[0] : null; // Retorna o primeiro usuário logado, se existir
    } catch (error) {
        console.error('Erro ao verificar usuário logado:', error);
        return null;
    }
}

// Salvar ou atualizar usuário logado no servidor
async function salvarUsuarioLogado(usuario) {
    const usuarioLogadoAtual = await obterUsuarioLogado();

    if (usuarioLogadoAtual) {
        // Excluir usuário logado existente
        await fetch(`${LOGADO_URL}/${usuarioLogadoAtual.id}`, {
            method: 'DELETE'
        });
    }
    
    // Criar novo usuário logado
    await fetch(LOGADO_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuario)
    });
}


// Monitorar os campos de entrada e ativar botão
document.getElementById('login-form').addEventListener('input', async () => {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;
    const btnLogin = document.getElementById('btn-login');

    btnLogin.disabled = !(email && senha);
});

// Redirecionar ao clicar no botão Login e salvar os dados do usuário logado
document.getElementById('btn-login').addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;

    const usuarioLogado = await obterUsuario(email, senha);
    if (usuarioLogado) {
        // Salvar usuário no localStorage
        localStorage.setItem('usuario_logado', JSON.stringify(usuarioLogado));

        // Salvar usuário logado no servidor
        await salvarUsuarioLogado(usuarioLogado);

        // Redirecionar para a página de dados
        window.location.href = './04_Dados&confirmacao.html';
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }
});
