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

covBtn.addEventListener("click", function () {
    let val = Number(inPt.value);
    if (isNaN(val) || val === "") {
        alert("Please enter a valid number");
        return;
    }

    lenIp.innerHTML = `<span>${val} meters = ${(val * 3.281).toFixed(3)} feet | ${val} feet = ${(val / 3.281).toFixed(3)} meters</span>`;
    volIp.innerHTML = `<span>${val} liters = ${(val * 0.264).toFixed(3)} gallons | ${val} gallons = ${(val / 0.264).toFixed(3)} liters</span>`;
    massIp.innerHTML = `<span>${val} kilos = ${(val * 2.204).toFixed(3)} pounds | ${val} pounds = ${(val / 2.204).toFixed(3)} kilos</span>`;
});
