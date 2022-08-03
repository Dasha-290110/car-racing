Canvas = document.getElementById('myCanvas');
ctx = Canvas.getContext("2d");

background_image = "racing.jpg";

car_width = 100;
car_height = 90;
car_image = "car1.png";
car_x = 10;
car_y = 100;

car2_width = 100;
car2_height = 90;
car2_image = "car2.png";
car2_x = 10;
car2_y = 190;

function add() {
    background_imgTag = new Image(); //defining a variable with a new image
    background_imgTag.src = background_image; // load image
    background_imgTag.onload = uploadBackground; // setting a function, onloading this variable

    car_imgTag = new Image(); //defining a variable with a new image
    car_imgTag.src = car_image; // load image
    car_imgTag.onload = uploadcar; // setting a function, onloading this variable

    car2_imgTag = new Image(); //defining a variable with a new image
    car2_imgTag.src = car2_image; // load image
    car2_imgTag.onload = uploadcar2;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, Canvas.width, Canvas.height);
}

function uploadcar() {
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height)
}

window.addEventListener("keydown", mykeydown);
function mykeydown(e) {
    keypressed = e.keyCode;

    if (keypressed == "38") {
        up();
    }

    if (keypressed == "40") {
        down();
    }

    if (keypressed == "37") {
        left();
    }

    if (keypressed == "39") {
        right();
    }

    if (keypressed == 65) {
        left2()
    }

    if (keypressed == 68) {
        right2()
    }

    if (keypressed == 87) {
        up2()
    }

    if (keypressed == 83) {
        down2()
    }

    if(car_x >= 700){
        console.log("White car won ")
        document.getElementById("game_ status").innerHTML= "White car won the race"

    }

    if(car2_x >= 700){
        console.log("Yellow car won ")
        document.getElementById("game_ status").innerHTML= "Yellow car won the race"

    }

    

}

function up() {
    if (car_y > 0) {
        car_y = car_y - 10;
        uploadBackground();
        uploadcar();
        uploadcar2();
    }

}

function down() {
    if (car_y < 500) {
        car_y = car_y + 10;
        uploadBackground();
        uploadcar();
        uploadcar2()
    }
}

function left() {
    if (car_x > 0) {
        car_x = car_x - 10;
        uploadBackground();
        uploadcar();
        uploadcar2()
    }

}

function right() {
    if (car_x < 700) {
        car_x = car_x + 10;
        uploadBackground();
        uploadcar();
        uploadcar2()
    }

}


function up2() {
    if (car2_y > 0) {
        car2_y = car2_y - 10;
        uploadBackground();
        uploadcar2();
        uploadcar();
    }

}

function down2() {
    if (car2_y < 500) {
        car2_y = car2_y + 10;
        uploadBackground();
        uploadcar2();
        uploadcar();
    }
}

function left2() {
    if (car2_x > 0) {
        car2_x = car2_x - 10;
        uploadBackground();
        uploadcar2();
        uploadcar();
    }

}

function right2() {

    if (car2_x < 700) {
        car2_x = car2_x + 10;
        uploadBackground();
        uploadcar2();
        uploadcar();
    }
}