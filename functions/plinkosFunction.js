function createPlinkos() {
    for (var i = 40; i <= width; i += 50) {
        plinkos.push(new Plinko(i, 75));
    }
    
    for (var i = 15; i <= width-10; i += 50) {
        plinkos.push(new Plinko(i, 175));
    }
    
    for (var i = 40; i <= width; i += 50) {
        plinkos.push(new Plinko(i, 275));
    }
    
    for (var i = 15; i <= width-10; i += 50) {
        plinkos.push(new Plinko(i, 375));
    }
}

function displayPlinkos() {
    for (var i = 0; i < plinkos.length; i++) {
        plinkos[i].display();
    }
}