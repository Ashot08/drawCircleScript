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
        let number = i/count;
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


let coordinateSystemDiv = document.querySelector('#coordinateSystem');
let width = coordinateSystemDiv.offsetWidth;
let numbers = generateNumbers(10);
let coordinates = generateCoordinates(numbers, width/2);
let systemItems = document.querySelectorAll('.system__item');
for(let i = 0; i < systemItems.length; i++){
    systemItems[i].style.transform = `translate(${coordinates[i].x}px, ${coordinates[i].y}px)`;
    systemItems[i].style.right = `${width/2}px`;
    systemItems[i].style.bottom = `${width/2}px`;
}
console.log(width)

coordinateSystemDiv.style.height = width + 'px';