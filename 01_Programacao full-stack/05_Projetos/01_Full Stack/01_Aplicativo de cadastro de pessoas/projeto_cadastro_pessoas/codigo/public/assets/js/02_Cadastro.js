document.addEventListener('DOMContentLoaded', function () {
    const SERVER_URL = 'http://localhost:3000/usuarios';

    async function getNextUserId() {
        const response = await fetch(SERVER_URL);
        const users = await response.json();
        return users.length === 0 ? 1 : Math.max(...users.map(user => user.id)) + 1;
    }

    async function salvaLogin(event) {
        event.preventDefault();

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

        const cpf = document.getElementById('txt_cpf').value; 
        const dataNascimento = document.getElementById('txt_dtnasc').value; 
        const telefone = document.getElementById('txt_telefone').value; 

        if (senha !== senha2) {
            alert('As senhas não conferem.');
            return;
        }
        // Verifica se ambas as senhas têm pelo menos 6 caracteres
        if (senha.length < 6 || senha2.length < 6) {
            alert('Ambas as senhas devem ter pelo menos 6 caracteres.');
            return;
        }
        const nextId = await getNextUserId();

        const usuario = {
            id: nextId,
            nome,
            email,
            idade,
            genero,
            endereco,
            senha,
            renda,
            comodos,
            acesso_internet,
            cpf, 
            dataNascimento,
            telefone 
        };

        try {
            await fetch(SERVER_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(usuario),
            });

            gerarPDF(usuario);
            document.getElementById('login-form').reset();
            alert('Usuário cadastrado com sucesso!');
        } catch (error) {
            alert('Erro ao cadastrar usuário: ' + error);
        }
    }

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
        doc.text(`CPF: ${usuario.cpf}`, 20, 120); 
        doc.text(`Data de Nascimento: ${usuario.dataNascimento}`, 20, 130); 
        doc.text(`Telefone: ${usuario.telefone}`, 20, 140); 

        doc.save(`Cadastro_${usuario.nome}.pdf`);
    }

    document.getElementById('login-form').addEventListener('submit', salvaLogin);
});
