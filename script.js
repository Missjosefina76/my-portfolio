document.addEventListener("DOMContentLoaded", function() {

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Button interactions
    document.getElementById("ctaButton").addEventListener("click", function() {
        alert("Explore my work and get in touch!");
    });

    document.getElementById("contactButton").addEventListener("click", function() {
        window.location.href = "mailto:missjosefina@hotmail.com";
    });
});

