document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const output = document.getElementById("formMessage");
    form.addEventListener("submit" , function (event) {
        event.preventDefault();
        
        if (nameInput.value === "" | | emailInput.value === '' | | messageInput.value === "") {
          output.textContent = "Please fill out all fields.";
          output.style.color = "red";
        } else {
            output.textContent = "Message sent succesfully!";
            output.style.color = "green";
            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";
        }
    
    });
});
