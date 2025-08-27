var getLang = new URLSearchParams(window.location.search);
var language = getLang.get('lang');

if (language == "es") {
    setText("WaterAppHeader", "consejos de Conservación del Agua");
    setText("subHeader", "En lugar de comprar botellas de agua desechables, usa una botella reutilizable. Las botellas de un solo uso llenan nuestros vertederos y atrapan agua valiosa. ");
    setText("Elige la botella de agua correcta y luego haz clic en el grifo para rellenarla. ");
};


onEvent("Water-Bottle", "click", function () {
    setImageURL("plastic", "plastic-bottle-recycle.png")
    document.getElementById("Water-Bottle").style.opacity = "0";
    document.getElementById("bottle-under-faucet").style.opacity = "1";
    correctBpttleChosen = true;
});

onEvent("plastic", "click", function () {
    setImageURL("plastic", "plastic-bottle-no.png")
    correctBottleChosen = false;
});

onEvent("faucet", "click", function () {
    if (correctBottleChosen) {
        setText("message", "Bottle is refilled");
        setProperty("Water-Bottle1", "Water-Bottle1.png");
    }
});