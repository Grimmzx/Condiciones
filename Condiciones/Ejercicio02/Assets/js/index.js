document.addEventListener('DOMContentLoaded', function () {
    const calcularBtn = document.getElementById('calcular');
    const resultadoP = document.getElementById('resultado');

    calcularBtn.addEventListener('click', function () {
        const sticker1 = parseInt(document.getElementById('sticker1').value) || 0;
        const sticker2 = parseInt(document.getElementById('sticker2').value) || 0;
        const sticker3 = parseInt(document.getElementById('sticker3').value) || 0;

        const totalStickers = sticker1 + sticker2 + sticker3;

        if (totalStickers <= 10) {
            resultadoP.textContent = `Llevas ${totalStickers} stickers.`;
        } else {
            resultadoP.textContent = 'Llevas demasiados stickers.';
        }
    });
});
