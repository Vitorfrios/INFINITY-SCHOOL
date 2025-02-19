const SERVER_URL = 'http://localhost:3000/usuarios';
const LOGADO_URL = 'http://localhost:3000/usuario_logado';

document.addEventListener('DOMContentLoaded', async () => {
    let usuarioLogado = await obterUsuarioLogado();

    if (!usuarioLogado) {
        alert('Nenhum usuário logado encontrado.');
        window.location.href = 'index.html';
        return;
    }

    // Preenchendo os dados na tela
    atualizarExibicao(usuarioLogado);

    // MODAL DE EDIÇÃO DE PERFIL
    const modal = document.getElementById('edit-form');
    const btnEdit = document.getElementById('edit-profile');
    const btnClose = document.getElementById('close-edit-form');
    const btnSave = document.getElementById('save-changes');

    // Preenchendo os campos do modal com os dados atuais
    btnEdit.addEventListener('click', () => preencherModal(usuarioLogado));

    // Fechar modal
    btnClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Salvar alterações e atualizar servidor/localStorage
    btnSave.addEventListener('click', async () => {
        const novosDados = obterDadosModal();
        const usuarioAtualizado = { ...usuarioLogado, ...novosDados };

        // Atualiza no localStorage
        localStorage.setItem('usuario_logado', JSON.stringify(usuarioAtualizado));

        // Atualiza no servidor
        await atualizarUsuario(usuarioAtualizado);

        alert('Dados atualizados com sucesso!');
        location.reload();
    });

    // ALTERAÇÃO DE SENHA
    document.getElementById('save-password').addEventListener('click', async () => {
        const novaSenha = document.getElementById('new-password').value;
        if (!novaSenha) {
            alert('A senha não pode estar vazia!');
            return;
        }

        const usuarioAtualizado = { ...usuarioLogado, senha: novaSenha };

        // Atualiza a senha no servidor e localStorage
        await atualizarUsuario(usuarioAtualizado);
        alert('Senha alterada com sucesso!');
        document.getElementById('password-modal').style.display = 'none';
    });

    // DOWNLOAD DOS DADOS EM PDF (Apenas gera um arquivo .txt como exemplo)
    document.getElementById('dow-profile').addEventListener('click', () => baixarDados(usuarioLogado));
});

// 📌 Obtém os dados do usuário logado
async function obterUsuarioLogado() {
    try {
        const response = await fetch(LOGADO_URL);
        const data = await response.json();
        return data.length > 0 ? data[0] : null;
    } catch (error) {
        console.error('Erro ao obter usuário logado:', error);
        return null;
    }
}

// 📌 Atualiza os dados do usuário no servidor
async function atualizarUsuario(usuario) {
    try {
        // Atualiza os dados no servidor (Tabela de Usuários)
        await fetch(`${SERVER_URL}/${usuario.id}`, {
            method: 'PATCH', // PATCH para alterar apenas os campos modificados
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario)
        });

        // Atualiza os dados do usuário logado no servidor
        await fetch(`${LOGADO_URL}/1`, {  
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario)
        });

        // Atualiza no localStorage
        localStorage.setItem('usuario_logado', JSON.stringify(usuario));

    } catch (error) {
        console.error('Erro ao atualizar os dados:', error);
        alert('Erro ao salvar as alterações.');
    }
}


// 📌 Atualiza a exibição dos dados na tela
function atualizarExibicao(usuario) {
    document.getElementById('nome-completo').textContent = usuario.nome;
    document.getElementById('email').textContent = usuario.email;
    document.getElementById('idade').textContent = usuario.idade;
    document.getElementById('genero').textContent = usuario.genero;
    document.getElementById('endereco').textContent = usuario.endereco;
    document.getElementById('renda').textContent = usuario.renda;
    document.getElementById('comodos').textContent = usuario.comodos;
    document.getElementById('acesso_internet').textContent = usuario.acesso_internet;
}

// 📌 Preenche o modal com os dados do usuário
function preencherModal(usuario) {
    document.getElementById('edit-nome').value = usuario.nome;
    document.getElementById('edit-email').value = usuario.email;
    document.getElementById('edit-login').value = usuario.login;
    document.getElementById('edit-idade').value = usuario.idade;
    document.getElementById('edit-genero').value = usuario.genero;
    document.getElementById('edit-endereco').value = usuario.endereco;
    document.getElementById('edit-renda').value = usuario.renda;
    document.getElementById('edit-comodos').value = usuario.comodos;
    
    // Atualize o campo de Acesso à Internet para usar o id correto do novo <select>
    document.getElementById('txt_acesso_internet').value = usuario.acesso_internet;
    
    document.getElementById('edit-form').style.display = 'block';
}

// 📌 Obtém os dados do modal
function obterDadosModal() {
    return {
        nome: document.getElementById('edit-nome').value,
        email: document.getElementById('edit-email').value,
        login: document.getElementById('edit-login').value,
        idade: document.getElementById('edit-idade').value,
        genero: document.getElementById('edit-genero').value,
        endereco: document.getElementById('edit-endereco').value,
        renda: document.getElementById('edit-renda').value,
        comodos: document.getElementById('edit-comodos').value,
        // Acesso à Internet: agora estamos pegando o valor do <select> com o id correto
        acesso_internet: document.getElementById('txt_acesso_internet').value
    };
}

document.addEventListener('DOMContentLoaded', () => {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuario_logado'));

    if (!usuarioLogado) {
        alert('Nenhum usuário logado encontrado.');
        window.location.href = 'index.html';
        return;
    }

    // MODAL DE ALTERAÇÃO DE SENHA
    const passwordModal = document.getElementById('password-modal');
    const btnOpenPasswordModal = document.getElementById('open-password-modal'); // Botão para abrir o modal
    const btnClosePasswordModal = document.getElementById('close-password-modal');
    const btnSavePassword = document.getElementById('save-password');
    const passwordField = document.getElementById('new-password');
    const togglePasswordIcon = document.getElementById('toggle-password');

    // Abrir modal de senha e preencher o campo com a senha atual
    btnOpenPasswordModal.addEventListener('click', () => {
        passwordField.value = usuarioLogado.senha || ''; // Exibe a senha salva
        passwordModal.style.display = 'block';
    });

    // Fechar modal de senha
    btnClosePasswordModal.addEventListener('click', () => {
        passwordModal.style.display = 'none';
    });

    // Salvar nova senha
    btnSavePassword.addEventListener('click', async () => {
        const novaSenha = passwordField.value;

        if (novaSenha.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        // Atualiza os dados do usuário logado
        usuarioLogado.senha = novaSenha;
        localStorage.setItem('usuario_logado', JSON.stringify(usuarioLogado));

        // Atualiza a senha no array de usuários no localStorage
        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuarios = usuarios.map(user =>
            user.id === usuarioLogado.id ? { ...user, senha: novaSenha } : user
        );
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        // Atualiza no servidor (JSON Server)
        try {
            await fetch(`http://localhost:3000/usuarios/${usuarioLogado.id}`, {
                method: 'PATCH', // PATCH altera apenas um campo específico
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ senha: novaSenha })
            });
            alert('Senha alterada com sucesso!');
            passwordModal.style.display = 'none';
        } catch (error) {
            console.error('Erro ao alterar a senha:', error);
            alert('Erro ao salvar a nova senha.');
        }
    });

});

// 📌 Baixar os dados do usuário em um arquivo
function baixarDados(usuario) {
    const doc = `
        Nome: ${usuario.nome}
        E-mail: ${usuario.email}
        Idade: ${usuario.idade}
        Gênero: ${usuario.genero}
        Endereço: ${usuario.endereco}
        Renda: ${usuario.renda}
        Cômodos: ${usuario.comodos}
        Acesso à Internet: ${usuario.acesso_internet}
    `;

    const blob = new Blob([doc], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'dados_usuario.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
