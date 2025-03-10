function checkDiscount() {
    let displayElement = document.getElementById("price");
    let userType = document.getElementById("ticketType").value;

    // checks if the station forms are completely filled out
    let initialStation = document.getElementById("initialStation").value;
    let finalStation = document.getElementById("finalStation").value;

    if (initialStation === "select" || finalStation === "select" || userType === "select") {
        displayElement.innerHTML = "Please completely fill out the form to view the price.";
        return;
        // the return stops a function 
    }

    // prices
    let originalPrice = 0;
    if (userType === "regular") {originalPrice = 28;}
    else if (userType === "discounted") {originalPrice = 28;}

    // adds the discount
    let discountMultiplier = (userType === "discounted") * 0.2;
    let discountedPrice = originalPrice - (originalPrice * discountMultiplier);

    displayElement.innerHTML = 'Your total ticket price is ₱' + discountedPrice.toFixed(2) + ".";
}
function changetoCapital() {
    var fName = document.getElementById("fullName");
    fName.value = fName.value.toUpperCase();
}
function submitFeedback() {
    var fullname = document.getElementById("fullName").value;
    window.alert("Thank you " + fullname + " for your feedback!");
}

function mouseOver(navlink){
    navlink.style.color = "white";
}

function mouseOut(navlink){
    navlink.style.color = "antiquewhite";
}
