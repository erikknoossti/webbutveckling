// Vänta tills sidan har laddats klart
document.addEventListener("DOMContentLoaded", function() {
    
    // Hämta formulär och resultatmeddelande
    const contactForm = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");

    // Lägg till händelselyssnare för formuläret vid inlämning så att det står "skickat"
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();  // Förhindra att sidan laddas om när formuläret skickas

        // Visa meddelandet "Skickat"
        responseMessage.textContent = "Skickat";

        //Lägg till stil för bättre synlighet
        responseMessage.style.color = "green";
        responseMessage.style.fontWeight = "bold";

        // Rensa formuläret efter skickning
        contactForm.reset();
    });
});
// Vänta tills sidan har laddats klart
document.addEventListener("DOMContentLoaded", function () {
    // Hämta alla h3-element inuti header
    const headers = document.querySelectorAll("header h3");

    // Funktion för att hantera visningen baserat på skärmbredd
    function toggleHeaderText() {
        if (window.innerWidth < 768) {  // Om skärmbredden är mindre än 768px
            headers.forEach(header => header.style.display = "none");  // Dölj elementen
        } else {  
            headers.forEach(header => header.style.display = "block");  // Visa elementen
        }
    }

    // Kör funktionen vid sidans laddning
    toggleHeaderText();

    // Lyssna på förändringar av fönsterstorleken
    window.addEventListener("resize", toggleHeaderText);
});

  