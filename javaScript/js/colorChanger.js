var colorChanger = document.querySelector("button");
var ispurple = false;

colorChanger.addEventListener("click", function(){
    if (ispurple) {
        document.body.style.backgroundColor = "white";
    }
    else {
        document.body.style.backgroundColor = "purple";
    }
    ispurple = !ispurple; 
});