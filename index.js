var i = 1;

setInterval(changeBackgroundColor, 50);



function changeBackgroundColor() {
i+=0.1;


$("html").css("background-color", 'hsl(' + i + ', 100%, 50%)');
}
