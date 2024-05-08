function TrafficLight() {
   const red = document.getElementById('red');
   const yellow = document.getElementById('yellow');
   const green = document.getElementById('green');


function Red () {
    red.style.backgroundColor = 'red';
    yellow.style.backgroundColor = 'rgb(96, 96, 26)';
    green.style.backgroundColor = ' rgb(17, 49, 17)';
    setTimeout(Yellow, 3000);
}

function Yellow () {
    red.style.backgroundColor = 'rgb(89, 11, 11);';
    yellow.style.backgroundColor = 'yellow';
    green.style.backgroundColor = 'rgb(17, 49, 17)';
    setTimeout(Green, 2000);
}

function Green () {
    red.style.backgroundColor = 'rgb(89, 11, 11);';
    yellow.style.backgroundColor = 'rgb(96, 96, 26)';
    green.style.backgroundColor = 'greenYellow';
    setTimeout(Red, 2000);
}

Green();

}

TrafficLight();