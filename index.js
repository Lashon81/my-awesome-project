setProperty("WaterAppHeader", "color", "red");
setProperty("subHeader", "color", "blue");
console.log("hello");
setProperty("WaterAppHeader", "background-color", "");

onEvent("esButton", "click", function () {
    console.log("clicked spanish.");
    document.getElementById("Next").setAttribute("href", "newfaucet.html?lang=es");
    setText("WaterAppHeader", "consejos de Conservacion del Aqua");
    setText("subHeader", "Para conservar el agua es importante que todos pongamos de nuestra parte. Haz clic en esta aplicación para ver ideas de cómo hacerlo.");
});
onEvent("enButton", "click", function () {
    console.log("clicked english.");
    setText("WaterAppHeader", "Water Conservation Tips");
    setText("subHeader", " It's important that we all do our part to use less water. Click through this app for conservation ideas.");
});