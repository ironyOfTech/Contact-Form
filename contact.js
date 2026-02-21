const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){
    event.preventDefault();
    const fullName = document.getElementById("fullName").value.trim();
    const email= document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();

    if(fullName === "")
    {
        alert("Name is required");
        return;
    }
    if(!email.includes("@"))
    {
      alert("Enter  a valid email");
       return;
    }
    if(subject==="")
    {
        alert("This field is required");
        return;
    }
    alert("Form sumitted successfully");

})

