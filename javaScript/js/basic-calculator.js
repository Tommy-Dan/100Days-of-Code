let display = document.getElementById("displaytext");

let calculate =(number)=>{
    display.value += number;
}
let Result =()=>{
    try{
        display.value = eval(display.value)
    }
    catch(err){
        display.value = err;
    }
}
let clr =()=>{
    display.value = " ";
}
let del =()=>{
    display.value = display.value.slice(0,-1);
}