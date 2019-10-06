var n = Math.round(Math.random*5);
var images = [
    "/image/crack-1.png",
    "/image/crack-2.png",
    "/image/crack-3.png",
    "/image/crack-4.png",
    "/image/crack-5.png"

]

function addCrack(event){
    event = event || window.event;
    var first = event.clientY;
    var second = event.clientX;
    console.log(event);
    var div = document.createElement('div');
    div.className = "crack";
    var crack = document.getElementById("pock");
    pock.appendChild(div);
    function getRandomArbitrary(min, max) {
        return Math.round (Math.random() * (max - min) + min);
      }
    var n = getRandomArbitrary(1, 5);
    div.style =`background-image: url("../6.1/image/crack-${n}.png"); margin-top: ${first}px; margin-left: ${second}px;`

   
}
