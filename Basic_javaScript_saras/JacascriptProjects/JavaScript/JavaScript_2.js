document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();//stop form from submitting immediately

    let name = document.getElementById("name").value.trim();
    let email =document.getElementById("email").value.trim();
    let message =document.getElementById("message").value.trim();
    let feedback =document.getElementById("feedback");

    if (name==="" || email ==="" || message ==="" ) {
        feedback.textContent = "⚠️ kindlly fill in all fields before sending...";
        feedback.style.color = "orange";
        return;
    }

    //simple email pattern validation..
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        feedback.textContent = "⛔ Pleaaase enter Valid /email> address ser..";
        feedback.style.color = " red";
        return;
    }

    //success
    feedback.textContent = "⭕ message✉️ sent successfully✅";
    feedback.style.color = "green";
    
});