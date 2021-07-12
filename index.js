/*
*
* get circle coordinates, which depends from radius and angle
*
* */
function getAngle(number){
    return number*2*Math.PI;
}

function getCoordinatesOnCircle(angle, radius){
    return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle),
    }
}

let numbers = [0.999];


console.log(getCoordinatesOnCircle(getAngle(numbers[0]), 1));
