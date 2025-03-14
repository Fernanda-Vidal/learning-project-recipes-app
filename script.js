// Adicionar eventos para os campos de input
document.querySelectorAll('.form-group input').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('active');
    });

    input.addEventListener('blur', function() {
        if (this.value === '') {
            this.parentElement.classList.remove('active');
        }
    });

    // Verificar se o campo já tem valor ao carregar a página
    if (input.value !== '') {
        input.parentElement.classList.add('active');
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Recuperar os valores dos campos
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validar os campos
    if (email === '' || password === '') {
        showError('Por favor, preencha todos os campos.');
        return;
    }

    // Simulação de login
    if (email === 'usuario@exemplo.com' && password === 'senha123') {
        sessionStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'home.html';
    } else {
        showError('Email ou senha inválidos.');
    }
});

// Função para mostrar a mensagem de erro
function showError(message) {
    const errorMessageDiv = document.getElementById('error-message');
    errorMessageDiv.textContent = message;
}
