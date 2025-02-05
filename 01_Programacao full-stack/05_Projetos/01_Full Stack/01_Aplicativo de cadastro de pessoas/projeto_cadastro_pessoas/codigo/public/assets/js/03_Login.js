const SERVER_URL = 'http://localhost:3000/usuarios';

// Validação de credenciais no servidor
async function validarCredenciais(email, senha) {
    try {
        const response = await fetch(SERVER_URL);
        const usuarios = await response.json();

        // Verifica se o email e senha correspondem a um usuário cadastrado
        return usuarios.some(user => user.email === email && user.senha === senha);
    } catch (error) {
        console.error('Erro ao conectar ao servidor:', error);
        return false;
    }
}

// Monitorar os campos de entrada e ativar botão
document.getElementById('login-form').addEventListener('input', async () => {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;
    const btnLogin = document.getElementById('btn-login');

    if (email && senha) {
        const valido = await validarCredenciais(email, senha);
        btnLogin.disabled = !valido; // Ativa ou desativa o botão
    } else {
        btnLogin.disabled = true;
    }
});

// Redirecionar ao clicar no botão Login
document.getElementById('btn-login').addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;

    const valido = await validarCredenciais(email, senha);
    if (valido) {
        window.location.href = './04_Dados&confirmacao.html'; // Redireciona apenas se válido
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }
});
