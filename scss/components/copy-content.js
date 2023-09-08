const btnCopy = document.querySelectorAll('.bi-clipboard');

btnCopy.forEach((btncopiar) => {
    btncopiar.addEventListener('click', () => {
        var contenido = btncopiar.previousElementSibling.textContent;
        var inputTemporal = document.createElement('input');
        inputTemporal.value = contenido;
        document.body.appendChild(inputTemporal);
        inputTemporal.select();
        document.execCommand('copy');
        document.body.removeChild(inputTemporal);

        btncopiar.classList.remove('bi-clipboard');
        btncopiar.classList.add('bi-clipboard-check');

        setTimeout(() => {
            btncopiar.classList.remove('bi-clipboard-check');
            btncopiar.classList.add('bi-clipboard');
        }, 2000);
    });
});