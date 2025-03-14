// Verificar se o usuário está logado
function checkAuth() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        window.location.href = 'index.html';
    }
}

// Executar verificação quando a página carregar
document.addEventListener('DOMContentLoaded', checkAuth);

// Configurar o botão de logout
document.getElementById('logoutBtn').addEventListener('click', () => {
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = 'index.html';
}); 