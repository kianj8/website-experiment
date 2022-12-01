function weightConverter(valNum) {
    document.getElementById("outputKilograms").innerHTML=valNum/2.2046;
}
function velocityConverter(valNum) {
    document.getElementById("outputmiles").innerHTML=valNum*1.609;
}
function tempConverter(valNum) {
    document.getElementById("outputfahrenheit").innerHTML=(Number(valNum) - Number(32))*Number(5/9);
}