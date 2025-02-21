document.addEventListener('DOMContentLoaded', function () {
    const ADM_URL = 'http://localhost:3000/adm';

    // Função para buscar os dados do administrador
    async function obterAdministrador(login, senha) {
        try {
            const response = await fetch(ADM_URL);
            const admins = await response.json();
            return admins.find(admin => admin.login === login && admin.senha === senha);
        } catch (error) {
            console.error('Erro ao conectar ao servidor:', error);
            return null;
        }
    }

    // Redirecionar ao clicar no botão Login 
    document.getElementById('btn-login').addEventListener('click', async (event) => {
        event.preventDefault(); // Impede o envio do formulário

        const login = document.getElementById('text-adm').value;
        const senha = document.getElementById('password').value;

        if (!login || !senha) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const admin = await obterAdministrador(login, senha);
        if (admin) {
            window.location.href = './06_pagina_Adm.html';
        } else {
            alert('Credenciais inválidas. Tente novamente.');
        }
    });

    // Visualização da senha
    const passwordField = document.getElementById('password');
    const togglePasswordIcon = document.getElementById('toggle-password');

    if (passwordField && togglePasswordIcon) {
        togglePasswordIcon.addEventListener('click', function () {
            passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }
});