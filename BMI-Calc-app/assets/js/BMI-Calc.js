let dialogButton = document.getElementsByClassName("dialog-btn")[0];
let calculateButton = document.getElementsByClassName("calculate")[0];
let dialog = document.getElementsByClassName("dialog")[0];

let isOpened = false;
const toogleDialog = () => {
    if (isOpened){
        dialog.classList.remove("display");
        isOpened = false;
    }
    else{
        dialog.classList.add("display");
        isOpened = true;
    }
}
function get_weight(){
    let w_unit_val = w_unit.value.trim();
    let weight_val = parseFloat(weight.value.trim());
    if(w_unit_val==="pound"){
        return weight_val * 2.205;
    }
    else{
        return weight_val;
    }
}
function get_height(){
    let h_unit_val = h_unit.value.trim();
    let height_val = parseFloat(height.value.trim());
    if(h_unit_val==="meter"){
        return height_val * 100;
    }
    else if(h_unit_val==="inch"){
        return height_val * 0.39370;
    }                                      
    else{
        return height_val;
    }
}
const calculateBMI = () => {
    let height = Number(document.getElementsByClassName("height")[0].value)/100;
    let weight = Number(document.getElementsByClassName("weight")[0].value);
    let h_unit = document.getElementById("h_unit");
    let w_unit = document.getElementById("w_unit");
    let dialogTitle = document.getElementsByClassName("dialog-title")[0];
    let dialogResult = document.getElementsByClassName("res")[0];
    let dialogResultIcon = document.getElementsByClassName("result-icon-wrap")[0];

    let result = get_weight() / (get_height()/100).toFixed(2);
    if(isNaN(height) || isNaN(weight)){
        dialogTitle.innerHTML = 'Invalid input entered';
        dialogResult.innerHTML = "";
        dialogResultIcon.innerHTML = '<i class="fas fa-times-circle danger"></i>'
    }else{
        if(result < 18.5){
            dialogResult.innerHTML = "Result: Underweight";
            dialogResultIcon.innerHTML = '<i class="fas fa-exclamation-circle danger"></i>'
        }
        else if(result >= 18.5 && result < 25){
            dialogResult.innerHTML = "Result: Normal";
            dialogResultIcon.innerHTML = '<i class="fas fa-check-circle normal"></i>'
        }
        else if(result >= 25 && result < 30){
            dialogResult.innerHTML = "Result: Overweight";
            dialogResultIcon.innerHTML = '<i class="fas fa-exclamation-circle warn"></i>'
        }
        else if(result >= 30){
            dialogResult.innerHTML = "Result: Obese";
            dialogResultIcon.innerHTML = '<i class="fas fa-exclamation-circle danger"></i>'
        }
        dialogTitle.innerHTML = `BMI Index: ${Math.round(result)}`;
    }
    
    toogleDialog()
}

dialogButton.addEventListener("click", toogleDialog);
calculateButton.addEventListener("click", calculateBMI);
