document.addEventListener('DOMContentLoaded', function () {
    const ingresarBtn = document.getElementById('ingresar');
    const resultadoP = document.getElementById('resultado');

    ingresarBtn.addEventListener('click', function () {
        const digit1 = document.getElementById('digit1').value;
        const digit2 = document.getElementById('digit2').value;
        const digit3 = document.getElementById('digit3').value;

        const password = digit1 + digit2 + digit3;

        if (password === '911') {
            resultadoP.textContent = 'password 1 correcto';
        } else if (password === '714') {
            resultadoP.textContent = 'password 2 correcto';
        } else {
            resultadoP.textContent = 'password incorrecto';
        }
    });
});
