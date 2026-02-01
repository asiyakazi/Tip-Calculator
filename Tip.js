let Billamount = document.getElementById("billAmount");
let percentage = document.getElementById("percentageTip");
let tip = document.getElementById("tipAmount");
let error = document.getElementById("errorMessage");
let total = document.getElementById("totalAmount");

function calculation() {
    let BillamountValue = Billamount.value;
    let percentageValue = percentage.value;

    if (BillamountValue === "") {
        error.textContent = "Please Enter a valid input";
    } else if (percentageValue === "") {
        error.textContent = "Please Enter a valid input";
    } else {
        error.textContent = "";
        let Billamount = parseInt(BillamountValue);
        let percentage = parseInt(percentageValue);
        let calculatedTip = (percentage / 100) * Billamount;
        let calculatedTotal = Billamount + calculatedTip;
        tip.value = calculatedTip;
        total.value = calculatedTotal;
    }


}