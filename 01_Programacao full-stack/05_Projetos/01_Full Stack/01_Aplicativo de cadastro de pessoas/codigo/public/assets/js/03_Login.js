/*
DIGITAR npm start NO TERMINAL PARA INICIALIZAR O JSON SERVER
npm start 
*/
const SERVER_URL = 'http://localhost:3000/usuarios';
const LOGADO_URL = 'http://localhost:3000/usuario_logado';

// Função para buscar os dados do usuário com base no e-mail e senha
async function obterUsuario(email, senha) {
    try {
        const response = await fetch(SERVER_URL);
        const usuarios = await response.json();

        
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
        return data.length > 0 ? data[0] : null; 
    } catch (error) {
        console.error('Erro ao verificar usuário logado:', error);
        return null;
    }
}

// Salvar ou atualizar usuário logado no servidor
async function salvarUsuarioLogado(usuario) {
    const usuarioLogadoAtual = await obterUsuarioLogado();

    if (usuarioLogadoAtual) {
        
        await fetch(`${LOGADO_URL}/${usuarioLogadoAtual.id}`, {
            method: 'DELETE'
        });
    }
    
    
    await fetch(LOGADO_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuario)
    });
}



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
        
        localStorage.setItem('usuario_logado', JSON.stringify(usuarioLogado));

        
        await salvarUsuarioLogado(usuarioLogado);

        window.location.href = './04_Dados&confirmacao.html';
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }
});


const passwordField = document.getElementById('password');
const togglePasswordIcon = document.getElementById('toggle-password');

togglePasswordIcon.addEventListener('click', function() {
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;

    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});

// Função para exibir o formulário de recuperação de senha
function esqueciSenha() {
    
    const formHTML = `
        <div class="form-group">
            <label for="recovery-email" class="text-info">Digite seu Email para recuperação</label><br>
            <input type="email" id="recovery-email" class="form-control" style="border-radius: 30px; border: 2px solid #00A4CC;">
        </div>
        <div class="form-group">
            <button type="button" class="btn btn-info" style="border-radius: 10px; border: 2px solid #00A4CC;" onclick="enviarInstrucoes()">Enviar</button>
        </div>
    `;
    const container = document.getElementById('login-box');
    container.innerHTML = formHTML;
}


// Função para enviar instruções de recuperação de senha
async function enviarInstrucoes() {
    const recoveryEmail = document.getElementById('recovery-email').value;

    if (!recoveryEmail) {
        alert('Por favor, insira um email válido.');
        return;
    }

    try {
        
        const response = await fetch(SERVER_URL);
        const data = await response.json();

        
        const usuarioEncontrado = data.find(usuario => usuario.email === recoveryEmail);

        if (usuarioEncontrado) {
            alert('Instruções enviadas para o seu email: ' + recoveryEmail);
            setTimeout(resetLoginForm, 1000);
        } else {
            alert('Email não encontrado. Verifique e tente novamente.');
        }
    } catch (error) {
        console.error('Erro ao verificar o email:', error);
        alert('Erro ao verificar o email. Tente novamente mais tarde.');
    }
}


// Função para resetar o formulário de login
function resetLoginForm() {
    const formHTML = `
        <div class="container2">
            <img src="../assets/images/logo.png" alt="logo">
        </div>
        <div class="form-group">
            <label for="email" class="text-info">Email</label><br>
            <input type="email" name="email" id="email" class="form-control" style="border-radius: 30px; border: 2px solid #00A4CC;">
        </div>
        <div class="form-group" style="position: relative;">
            <label for="password" class="text-info">Senha</label><br>
            <input type="password" name="password" id="password" class="form-control" style="border-radius: 30px; border: 2px solid #00A4CC; padding-right: 30px;">
            <i id="toggle-password" class="fa fa-eye"></i>
        </div>
        <div class="form-group">
            <button type="button" class="btn btn-link" style="border-radius: 10px; color: #00A4CC; text-decoration: none;" onclick="esqueciSenha()">Esqueci a Senha</button>
        </div>
        <div class="form-group d-flex justify-content-between">
            <a href="./02_Cadastro.html"><button type="button" class="btn btn-info" data-toggle="modal" data-target="#loginModal" style="border-radius: 10px; border: 2px solid #00A4CC;">Novo usuário</button></a>
            <a id="btn-login" class="btn btn-info btn-md" style="border-radius: 10px; border: 2px solid #00A4CC; color: white;" disabled>Login</a>
        </div>
    `;
    const container = document.getElementById('login-box');
    container.innerHTML = formHTML;
}
