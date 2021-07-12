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

function generateNumbers(count){
    let numbers = [];
    for(let i = 0; i < count; i++ ){
        let number = i/100;
        numbers.push(number);
    }
    return numbers;
}

function generateCoordinates(numbers, radius){
    const coordinates = [];
    for(let i = 0; i < numbers.length; i++){
        coordinates.push(getCoordinatesOnCircle(getAngle(numbers[i]), radius));
    }
    return coordinates;
}

// let numbers = generateNumbers(10);
// let coordinates = generateCoordinates(numbers, 1);
// console.log(coordinates);

let coordinateSystemDiv = document.querySelector('#coordinateSystem');
let width = coordinateSystemDiv.offsetWidth;
let numbers = generateNumbers(10);
let coordinates = generateCoordinates(numbers, width/2);
let systemItems = document.querySelector('.system__item');
for(let i = 0; i < numbers.length; i++){
    console.log(systemItems[i]);
}

coordinateSystemDiv.style.height = width + 'px';