document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    
    function formatarTelefone(telefone) {
        
        const numeros = telefone.replace(/\D/g, '');

        const telefoneLimitado = numeros.slice(0, 11);

        if (telefoneLimitado.length <= 10) {
            return telefoneLimitado.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
        } else {
            return telefoneLimitado.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        }
    }

    
    const telefoneInput = document.getElementById('telefone');
    telefoneInput.addEventListener('input', function () {
        
        this.value = formatarTelefone(this.value);
    });

   
    telefoneInput.addEventListener('keydown', function (event) {
        
        if (
            !/[0-9]/.test(event.key) && 
            event.key !== 'Backspace' && 
            event.key !== 'Delete' && 
            event.key !== 'Tab' && 
            !event.key.startsWith('Arrow') 
        ) {
            event.preventDefault(); 
        }
    });

    
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const mensagemInput = document.getElementById('mensagem');

    nomeInput.addEventListener('input', validateNome);
    emailInput.addEventListener('input', validateEmail);
    telefoneInput.addEventListener('input', validateTelefone);
    mensagemInput.addEventListener('input', validateMensagem);

    
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        
        const nome = nomeInput.value.trim();
        const email = emailInput.value.trim();
        const telefone = telefoneInput.value.trim();
        const mensagem = mensagemInput.value.trim();

        let isValid = true;

        
        if (nome === '') {
            isValid = false;
            showError(nomeInput, 'Por favor, insira seu nome.');
        } else {
            clearError(nomeInput);
        }

        
        if (email === '' || !validateEmailFormat(email)) {
            isValid = false;
            showError(emailInput, 'Por favor, insira um e-mail válido.');
        } else {
            clearError(emailInput);
        }

        
        if (telefone === '' || !validatePhoneFormat(telefone)) {
            isValid = false;
            showError(telefoneInput, 'Por favor, insira um telefone válido.');
        } else {
            clearError(telefoneInput);
        }

        
        if (mensagem === '') {
            isValid = false;
            showError(mensagemInput, 'Por favor, insira sua mensagem.');
        } else {
            clearError(mensagemInput);
        }

        
        if (isValid) {
            sendFormData({ nome, email, telefone, mensagem });
        }
    });

    
    function validateEmailFormat(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    
    function validatePhoneFormat(phone) {
        const regex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
        return regex.test(phone);
    }

    
    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message') || document.createElement('span');
        errorMessage.className = 'error-message';
        errorMessage.textContent = message;
        formGroup.appendChild(errorMessage);
        input.classList.add('error');
    }

    
    function clearError(input) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        if (errorMessage) {
            formGroup.removeChild(errorMessage);
        }
        input.classList.remove('error');
    }

    
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

    
    function showSuccess(message) {
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = message;
        form.appendChild(successMessage);
        setTimeout(() => successMessage.remove(), 3000);
    }

    
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