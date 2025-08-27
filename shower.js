var getLang = new URLSearchParams(window.location.search);
var language = getLang.get('lang');

if (language == "es") {
    setText("WaterAppHeader", "consejos de Conservación del Agua");
    setText("subHeader", "Otra forma de conservar el agua es ducharse más rápido. ¡Intenta poner un temporizador de cinco minutos! ");
}

onEvent("5timer", "click", function () {
    console.log("timer clicked");
    setImageURL("5timer", "times-up.png");
    setImageURL("shower", "rubber-duck.png");
});