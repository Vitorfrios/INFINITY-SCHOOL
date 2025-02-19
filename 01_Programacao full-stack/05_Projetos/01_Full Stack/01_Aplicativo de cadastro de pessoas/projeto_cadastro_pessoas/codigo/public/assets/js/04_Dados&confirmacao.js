const SERVER_URL = 'http://localhost:3000/usuarios';
const LOGADO_URL = 'http://localhost:3000/usuario_logado';

document.addEventListener('DOMContentLoaded', async () => {
    let usuarioLogado = await obterUsuarioLogado();

    if (!usuarioLogado) {
        alert('Nenhum usuário logado encontrado.');
        window.location.href = '01_Inicio_logo.html';
        return;
    }

    atualizarExibicao(usuarioLogado);

    // MODAL DE EDIÇÃO DE PERFIL
    const modal = document.getElementById('edit-form');
    const btnEdit = document.getElementById('edit-profile');
    const btnClose = document.getElementById('close-edit-form');
    const btnSave = document.getElementById('save-changes');

    btnEdit.addEventListener('click', () => preencherModal(usuarioLogado));

    btnClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Salvar alterações e atualizar servidor
    btnSave.addEventListener('click', async () => {
        const novosDados = obterDadosModal();
        const usuarioAtualizado = { ...usuarioLogado, ...novosDados };
    
        await atualizarUsuario(usuarioAtualizado);
    
        alert('Dados atualizados com sucesso!');
        
        atualizarExibicao(usuarioAtualizado);
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

    document.getElementById('dow-profile').addEventListener('click', () => baixarDados(usuarioLogado));
});

// Obtém os dados do usuário logado
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

// Atualiza os dados do usuário no servidor
function atualizarExibicao(usuario) {
    if (!usuario) {
        alert('Erro: Usuário não encontrado.');
        return;
    }

    document.getElementById('nome-completo').textContent = usuario.nome;
    document.getElementById('email').textContent = usuario.email;
    document.getElementById('idade').textContent = usuario.idade;
    document.getElementById('genero').textContent = usuario.genero;
    document.getElementById('endereco').textContent = usuario.endereco;
    document.getElementById('renda').textContent = usuario.renda;
    document.getElementById('comodos').textContent = usuario.comodos;
    document.getElementById('acesso_internet').textContent = usuario.acesso_internet;
    document.getElementById('cpf').textContent = usuario.cpf;
    
    const dataNascimento = new Date(usuario.dataNascimento);
    const dataFormatada = dataNascimento.toLocaleDateString('pt-BR');
    document.getElementById('data_nascimento').textContent = dataFormatada;
    document.getElementById('user-name-placeholder').textContent = usuario.nome;

    document.title = `Dados do Usuário ${usuario.nome}`;
}



// Preenche o modal com os dados do usuário
function preencherModal(usuario) {
    document.getElementById('edit-nome').value = usuario.nome;
    document.getElementById('edit-email').value = usuario.email;
    document.getElementById('edit-idade').value = usuario.idade;
    document.getElementById('edit-genero').value = usuario.genero;
    document.getElementById('edit-endereco').value = usuario.endereco;
    document.getElementById('edit-renda').value = usuario.renda;
    document.getElementById('edit-comodos').value = usuario.comodos;
    document.getElementById('edit-cpf').value = usuario.cpf;

    const dataNascimento = new Date(usuario.dataNascimento);
    const dataFormatada = dataNascimento.toISOString().split('T')[0]; 
    document.getElementById('edit-data-nascimento').value = dataFormatada;

    document.getElementById('txt_acesso_internet').value = usuario.acesso_internet;

    document.getElementById('edit-form').style.display = 'block';
}

// Obtém os dados do modal
function obterDadosModal() {
    return {
        nome: document.getElementById('edit-nome').value,
        email: document.getElementById('edit-email').value,
        idade: document.getElementById('edit-idade').value,
        genero: document.getElementById('edit-genero').value,
        endereco: document.getElementById('edit-endereco').value,
        renda: document.getElementById('edit-renda').value,
        comodos: document.getElementById('edit-comodos').value,
        cpf: document.getElementById('edit-cpf').value,
        dataNascimento: document.getElementById('edit-data-nascimento').value, 
        acesso_internet: document.getElementById('txt_acesso_internet').value
    };
}

// Atualiza os dados do usuário no servidor
async function atualizarUsuario(usuario) {
    try {
        const responseUsuarios = await fetch(`${SERVER_URL}/${usuario.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario)
        });

        if (!responseUsuarios.ok) {
            throw new Error('Erro ao atualizar em usuarios.');
        }

        const responseLogado = await fetch(`${LOGADO_URL}/${usuario.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario)
        });

        if (!responseLogado.ok) {
            throw new Error('Erro ao atualizar em usuario_logado.');
        }

        const usuarioAtualizado = await responseUsuarios.json();
        const usuarioLogadoAtualizado = await responseLogado.json();

        localStorage.setItem('usuario_logado', JSON.stringify(usuarioLogadoAtualizado));

        console.log('Usuário atualizado com sucesso em ambos os endpoints.');

    } catch (error) {
        console.error('Erro ao atualizar os dados:', error);
        alert('Erro ao salvar as alterações.');
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuario_logado'));

    if (!usuarioLogado) {
        alert('Nenhum usuário logado encontrado.');
        window.location.href = '01_Inicio_logo.html';
        return;
    }

    // MODAL DE ALTERAÇÃO DE SENHA
    const passwordModal = document.getElementById('password-modal');
    const btnOpenPasswordModal = document.getElementById('open-password-modal'); // Botão para abrir o modal
    const btnClosePasswordModal = document.getElementById('close-password-modal');
    const btnSavePassword = document.getElementById('save-password');
    const passwordField = document.getElementById('new-password');
    const togglePasswordIcon = document.getElementById('toggle-password');

    
    btnOpenPasswordModal.addEventListener('click', () => {
        passwordField.value = usuarioLogado.senha || ''; // Exibe a senha salva
        passwordModal.style.display = 'block';
    });

    
    btnClosePasswordModal.addEventListener('click', () => {
        passwordModal.style.display = 'none';
    });

    
    window.addEventListener('click', (event) => {
        if (event.target === passwordModal) {
            passwordModal.style.display = 'none';
        }
    });

    // Salvar nova senha
    btnSavePassword.addEventListener('click', async () => {
        const novaSenha = passwordField.value;

        if (novaSenha.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        
        usuarioLogado.senha = novaSenha;
        localStorage.setItem('usuario_logado', JSON.stringify(usuarioLogado));

        
        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuarios = usuarios.map(user =>
            user.id === usuarioLogado.id ? { ...user, senha: novaSenha } : user
        );
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        
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


// Baixar os dados do usuário em um arquivo PDF
function baixarDados(usuario) {
    const { jsPDF } = window.jspdf; 
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Dados do Usuário", 20, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    let linha = 40;

    
    const dataNascimento = new Date(usuario.dataNascimento);
    const dataFormatada = dataNascimento.toLocaleDateString('pt-BR'); 

    
    const dados = [
        `Nome Completo: ${usuario.nome}`,
        `E-mail: ${usuario.email}`,
        `Idade: ${usuario.idade}`,
        `CPF: ${usuario.cpf}`,
        `Data de Nascimento: ${dataFormatada}`,
        `Gênero: ${usuario.genero}`,
        `Endereço: ${usuario.endereco}`,
        `Renda: ${usuario.renda}`,
        `Cômodos: ${usuario.comodos}`,
        `Acesso à Internet: ${usuario.acesso_internet}`,
    ];

    
    dados.forEach((dado) => {
        doc.text(dado, 20, linha);
        linha += 10;
    });

    
    const nomeArquivo = `Dados do Usuário_${usuario.nome}.pdf`;

    
    doc.save(nomeArquivo);
}


function sair() {
    alert('Você saiu da conta!');
    localStorage.removeItem("usuario_logado");

    window.location.href = "01_Inicio_logo.html";    
}




