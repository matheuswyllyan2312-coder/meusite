// Login e redirecionamento
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  if (user === 'biby' && pass === '1234') {
    window.location.href = 'dashboard.html';
  } else {
    alert('Usuário ou senha incorretos.');
  }
});

// Botão de instalação PWA
let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = 'block';
});

if (installBtn) {
  installBtn.addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      installBtn.style.display = 'none';
    });
  });
}

// Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log('Service Worker registrado!'))
    .catch(err => console.error('Erro ao registrar SW:', err));
}

function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => sec.style.display = 'none');
  document.getElementById(sectionId).style.display = 'block';
}