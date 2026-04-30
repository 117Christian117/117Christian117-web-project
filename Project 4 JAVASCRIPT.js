document.getElementById("reccomendBtn").addEventListeners("click", function(){
    const name = document.getElementById("username").value.trim();
    const ride = document.getElementById("rideType").value;
    const box = document.getElementById("recommendationBox");
    if (name ===" ") {
        box.textContent = "Please enter your name";
        return;
    }
    let message = "";
    if (ride === "road") {
        message = `${name}, you need a Raod Bike!`;
    }
    else if (ride === "mountain") {
        message = `${name}, you need a Mountain Bike!`;
    }
    else {
    message = `${name}, you need a Commuter Bike!`;
    }
    box.textContent = message;
    
});