function createDivisons() {
    for (var k = 0; k <= width; k = k + 80) {
        divi.push(new div(k, height-divisionHeight/2, 10, divisionHeight));
    }
}

function displayDivisons() {
    for (var d = 0; d < divi.length; d++) {
        divi[d].display();
    }
}