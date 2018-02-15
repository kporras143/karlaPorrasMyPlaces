window.addEventListener('load', init, false);

function init() {
    var botonAmericano = document.getElementById('botonAmericano');
    var botonEuropeo = document.getElementById('botonEuropeo');
    var prototipo = new CatPrototype('gris', 'verde', '3');

    botonAmericano.onclick = function americanos() {
        prototipo.clonarAmericanos(prototipo, 'blanco');
    }

    botonEuropeo.onclick = function europeos() {
        prototipo.clonarEuropeos(prototipo, 10);
    }

}