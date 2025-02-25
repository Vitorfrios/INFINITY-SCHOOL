// Função para o menu de navegação responsivo
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Função para formatar o número de telefone
    function formatarTelefone(telefone) {
        // Remove todos os caracteres não numéricos
        const numeros = telefone.replace(/\D/g, '');

        // Limita o número de dígitos a 11
        const telefoneLimitado = numeros.slice(0, 11);

        // Aplica a máscara (99) 99999-9999
        if (telefoneLimitado.length <= 10) {
            return telefoneLimitado.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
        } else {
            return telefoneLimitado.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        }
    }

    // Aplica a formatação enquanto o usuário digita
    const telefoneInput = document.getElementById('telefone');
    telefoneInput.addEventListener('input', function () {
        // Formata o telefone
        this.value = formatarTelefone(this.value);
    });

    // Impede a digitação de caracteres não numéricos
    telefoneInput.addEventListener('keydown', function (event) {
        // Permite apenas números, Backspace, Delete, Tab e setas
        if (
            !/[0-9]/.test(event.key) && // Não é um número
            event.key !== 'Backspace' && // Não é Backspace
            event.key !== 'Delete' && // Não é Delete
            event.key !== 'Tab' && // Não é Tab
            !event.key.startsWith('Arrow') // Não é uma seta
        ) {
            event.preventDefault(); // Bloqueia a tecla
        }
    });

    // Validação em tempo real
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const mensagemInput = document.getElementById('mensagem');

    nomeInput.addEventListener('input', validateNome);
    emailInput.addEventListener('input', validateEmail);
    telefoneInput.addEventListener('input', validateTelefone);
    mensagemInput.addEventListener('input', validateMensagem);

    // Validação do Formulário de Contato
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Validação dos campos
        const nome = nomeInput.value.trim();
        const email = emailInput.value.trim();
        const telefone = telefoneInput.value.trim();
        const mensagem = mensagemInput.value.trim();

        let isValid = true;

        // Validação do Nome
        if (nome === '') {
            isValid = false;
            showError(nomeInput, 'Por favor, insira seu nome.');
        } else {
            clearError(nomeInput);
        }

        // Validação do E-mail
        if (email === '' || !validateEmailFormat(email)) {
            isValid = false;
            showError(emailInput, 'Por favor, insira um e-mail válido.');
        } else {
            clearError(emailInput);
        }

        // Validação do Telefone
        if (telefone === '' || !validatePhoneFormat(telefone)) {
            isValid = false;
            showError(telefoneInput, 'Por favor, insira um telefone válido.');
        } else {
            clearError(telefoneInput);
        }

        // Validação da Mensagem
        if (mensagem === '') {
            isValid = false;
            showError(mensagemInput, 'Por favor, insira sua mensagem.');
        } else {
            clearError(mensagemInput);
        }

        // Se todos os campos forem válidos, envia o formulário
        if (isValid) {
            sendFormData({ nome, email, telefone, mensagem });
        }
    });

    // Função para validar e-mail
    function validateEmailFormat(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Função para validar telefone (formato brasileiro com máscara)
    function validatePhoneFormat(phone) {
        const regex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
        return regex.test(phone);
    }

    // Função para exibir mensagens de erro
    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message') || document.createElement('span');
        errorMessage.className = 'error-message';
        errorMessage.textContent = message;
        formGroup.appendChild(errorMessage);
        input.classList.add('error');
    }

    // Função para limpar mensagens de erro
    function clearError(input) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        if (errorMessage) {
            formGroup.removeChild(errorMessage);
        }
        input.classList.remove('error');
    }

    // Função para enviar dados do formulário
    function sendFormData(data) {
        fetch('http://localhost:3000/contatos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            showSuccess('Mensagem enviada com sucesso!');
            form.reset();
        })
        .catch(error => {
            console.error('Erro:', error);
            showError(null, 'Erro ao enviar a mensagem. Tente novamente.');
        });
    }

    // Função para exibir mensagem de sucesso
    function showSuccess(message) {
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = message;
        form.appendChild(successMessage);
        setTimeout(() => successMessage.remove(), 3000);
    }

    // Funções de validação em tempo real
    function validateNome() {
        if (nomeInput.value.trim() === '') {
            showError(nomeInput, 'Por favor, insira seu nome.');
        } else {
            clearError(nomeInput);
        }
    }

    function validateEmail() {
        if (emailInput.value.trim() === '' || !validateEmailFormat(emailInput.value.trim())) {
            showError(emailInput, 'Por favor, insira um e-mail válido.');
        } else {
            clearError(emailInput);
        }
    }

    function validateTelefone() {
        if (telefoneInput.value.trim() === '' || !validatePhoneFormat(telefoneInput.value.trim())) {
            showError(telefoneInput, 'Por favor, insira um telefone válido.');
        } else {
            clearError(telefoneInput);
        }
    }

    function validateMensagem() {
        if (mensagemInput.value.trim() === '') {
            showError(mensagemInput, 'Por favor, insira sua mensagem.');
        } else {
            clearError(mensagemInput);
        }
    }
});