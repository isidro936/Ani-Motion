const miElemento = document.querySelector('#mielemento');

new TextChange({
    element: miElemento,
    animation: 'slideY',
    texts: [
        'Bienvenido a',
        'Welcome to',
        'Bienvenue à',
        'Willkommen bei',
        'Benvenuto/a',
        'Bem-vindo/a',
        '歡迎來到'
    ],
    interval: 3000
})