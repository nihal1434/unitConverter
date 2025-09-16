/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let covBtn = document.getElementById("cnv-btn");
let inPt = document.getElementById("ipt");
let volIp = document.getElementById("vol");
let lenIp = document.getElementById("len");
let massIp = document.getElementById("mass");
let resetBtn = document.getElementById("reset-btn");
let errorEl = document.getElementById("error");

inPt.addEventListener("keypress",(e)=>{
    if(e.key=="Enter") covBtn.click();
});

function showError(msg) {
            errorEl.textContent = msg;
}

covBtn.addEventListener("click", function () {
    let val = Number(inPt.value);
    if (isNaN(val)||val<=0) {
        showError("Please Enter Valid input!")
        return;
    }
    localStorage.setItem("inputValue", val);
    render(val)
});

function render(val){
    inPt.value = val
    
    errorEl.textContent = ""; 

    lenIp.innerHTML = `<span>${val} meters = ${(val * 3.281).toFixed(3)} feet | ${val} feet = ${(val / 3.281).toFixed(3)} meters</span>`;
    volIp.innerHTML = `<span>${val} liters = ${(val * 0.264).toFixed(3)} gallons | ${val} gallons = ${(val / 0.264).toFixed(3)} liters</span>`;
    massIp.innerHTML = `<span>${val} kilos = ${(val * 2.204).toFixed(3)} pounds | ${val} pounds = ${(val / 2.204).toFixed(3)} kilos</span>`;
}

resetBtn.addEventListener("click",function(){
    errorEl.textContent = ""; 
    localStorage.removeItem("inputValue");
    inPt.value=""
    lenIp.textContent=""
    volIp.textContent=""
    massIp.textContent=""

})

window.addEventListener("DOMContentLoaded", () => {
  const val = Number(localStorage.getItem("inputValue"));
    if (!isNaN(val) && val > 0) {
    render(val);
    }

});
