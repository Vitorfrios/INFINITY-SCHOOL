/*
DIGITAR npm start NO TERMINAL PARA INICIALIZAR O JSON SERVER
npm start 
*/

const SERVER_URL = 'http://localhost:3000/usuarios';
const LOGADO_URL = 'http://localhost:3000/usuario_logado';

document.addEventListener('DOMContentLoaded', async () => {
    let usuarioLogado = await obterUsuarioLogado();

    if (!usuarioLogado) {
        alert('Redirecionando...');
        window.location.href = '01_Inicio_logo.html';
        return;
    }

    atualizarExibicao(usuarioLogado);

    const modal = document.getElementById('edit-form');
    const btnEdit = document.getElementById('edit-profile');
    const btnClose = document.getElementById('close-edit-form');
    const btnSave = document.getElementById('save-changes');

    
    btnEdit.addEventListener('click', () => {
        preencherModal(usuarioLogado);
        modal.style.display = 'block'; 
    });

    
    btnClose.addEventListener('click', () => {
        modal.style.display = 'none'; 
    });

    
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none'; 
        }
    });


    btnSave.addEventListener('click', async () => {
        const novosDados = obterDadosModal();
        const usuarioAtualizado = { ...usuarioLogado, ...novosDados };
    
        await atualizarUsuario(usuarioAtualizado);
    
        alert('Dados atualizados com sucesso!');
        atualizarExibicao(usuarioAtualizado);
    });
});

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

function atualizarExibicao(usuario) {
    if (!usuario) {
        alert('03-redirecionando');
        return;
    }
    document.getElementById('user-name-placeholder').textContent = usuario.nome;
    document.getElementById('nome-completo').textContent = usuario.nome;
    document.getElementById('email').textContent = usuario.email;
    document.getElementById('idade').textContent = usuario.idade;
    document.getElementById('genero').textContent = usuario.genero;
    document.getElementById('endereco').textContent = usuario.endereco;
    document.getElementById('renda').textContent = usuario.renda;
    document.getElementById('comodos').textContent = usuario.comodos;
    document.getElementById('acesso_internet').textContent = usuario.acesso_internet;
    document.getElementById('cpf').textContent = usuario.cpf;
    document.getElementById('telefone').textContent = usuario.telefone;
    document.getElementById('status').textContent = usuario.status;

    const dataNascimento = new Date(usuario.dataNascimento);
    document.getElementById('data_nascimento').textContent = dataNascimento.toLocaleDateString('pt-BR');
}

function preencherModal(usuario) {
    document.getElementById('edit-nome').value = usuario.nome;
    document.getElementById('edit-email').value = usuario.email;
    document.getElementById('edit-idade').value = usuario.idade;
    document.getElementById('edit-genero').value = usuario.genero;
    document.getElementById('edit-endereco').value = usuario.endereco;
    document.getElementById('edit-renda').value = usuario.renda;
    document.getElementById('edit-comodos').value = usuario.comodos;
    document.getElementById('edit-cpf').value = usuario.cpf;
    document.getElementById('edit-telefone').value = usuario.telefone;
    document.getElementById('edit-acesso-internet').value = usuario.acesso_internet;

    const dataNascimento = new Date(usuario.dataNascimento);
    document.getElementById('edit-data-nascimento').value = dataNascimento.toISOString().split('T')[0]; 
}

function obterDadosModal() {
    const dados = {
        nome: document.getElementById('edit-nome')?.value || '',
        email: document.getElementById('edit-email')?.value || '',
        idade: document.getElementById('edit-idade')?.value || '',
        genero: document.getElementById('edit-genero')?.value || '',
        endereco: document.getElementById('edit-endereco')?.value || '',
        renda: document.getElementById('edit-renda')?.value || '',
        comodos: document.getElementById('edit-comodos')?.value || '',
        cpf: document.getElementById('edit-cpf')?.value || '',
        telefone: document.getElementById('edit-telefone')?.value || '',
        dataNascimento: document.getElementById('edit-data-nascimento')?.value || '',
        acesso_internet: document.getElementById('edit-acesso-internet')?.value || ''
    };

    console.log('Dados obtidos do modal:', dados);
    return dados;
}

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
        localStorage.setItem('usuario_logado', JSON.stringify(usuarioAtualizado));
        console.log('Usuário atualizado com sucesso.');
    } catch (error) {
        console.error('Erro ao atualizar os dados:', error);
        alert('Erro ao salvar as alterações.');
    }
}



document.addEventListener('DOMContentLoaded', () => {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuario_logado'));



    // MODAL DE ALTERAÇÃO DE SENHA
    const passwordModal = document.getElementById('password-modal');
    const btnOpenPasswordModal = document.getElementById('open-password-modal'); 
    const btnClosePasswordModal = document.getElementById('close-password-modal');
    const btnSavePassword = document.getElementById('save-password');
    const passwordField = document.getElementById('new-password');
    const togglePasswordIcon = document.getElementById('toggle-password');

    
    btnOpenPasswordModal.addEventListener('click', () => {
        passwordField.value = usuarioLogado.senha || ''; 
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
                method: 'PATCH', 
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
document.addEventListener('DOMContentLoaded', () => {
    
    const btnBaixarDados = document.getElementById('dow-profile');

    
    btnBaixarDados.addEventListener('click', () => {
        
        const usuarioLogado = JSON.parse(localStorage.getItem('usuario_logado'));

        
        if (usuarioLogado) {
            
            baixarDados(usuarioLogado);
        } else {
            alert('Nenhum usuário logado encontrado.');
        }
    });
});

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

    // Dados do usuário
    const dados = [
        `Nome Completo: ${usuario.nome}`,
        `E-mail: ${usuario.email}`,
        `Idade: ${usuario.idade}`,
        `Celular: ${usuario.telefone}`,
        `CPF: ${usuario.cpf}`,
        `Data de Nascimento: ${dataFormatada}`,
        `Gênero: ${usuario.genero}`,
        `Endereço: ${usuario.endereco}`,
        `Renda: ${usuario.renda}`,
        `Cômodos: ${usuario.comodos}`,
        `Acesso à Internet: ${usuario.acesso_internet}`,
        `Status da inscrição:${usuario.status} `
    ];

    
    dados.forEach((dado) => {
        doc.text(dado, 20, linha);
        linha += 10;
    });

    
    const nomeArquivo = `Dados do Usuário_${usuario.nome}.pdf`;

    // Salva o PDF
    doc.save(nomeArquivo);
}





// Função de logout
document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.getElementById("logout-btn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", async () => {
            try {
                
                const responseGet = await fetch(LOGADO_URL);
                const data = await responseGet.json();

                if (data.length > 0) {
                    const userId = data[0].id; 

                    
                    const responseDelete = await fetch(`${LOGADO_URL}/${userId}`, {
                        method: 'DELETE'
                    });

                    if (responseDelete.ok) {
                        
                        localStorage.clear();
                        sessionStorage.clear();

                        alert("Logout realizado com sucesso!");


                    } else {
                        alert("Erro ao fazer logout. Tente novamente.");
                    }
                } else {
                    alert("01-redirecionando");
                }
            } catch (error) {
                console.error("Erro na requisição:", error);
                alert("Erro na conexão com o servidor.");
            }
        });
    }
});

