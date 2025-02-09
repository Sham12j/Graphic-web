document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Contact Form Validation
    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();
        let name = this.querySelector("input[type='text']").value.trim();
        let email = this.querySelector("input[type='email']").value.trim();
        let message = this.querySelector("textarea").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }
        alert("Message sent successfully!");
        this.reset();
    });

    // Lightbox Effect for Gallery Images
    const galleryImages = document.querySelectorAll(".gallery img");
    galleryImages.forEach(img => {
        img.addEventListener("click", function () {
            const lightbox = document.createElement("div");
            lightbox.id = "lightbox";
            lightbox.style.position = "fixed";
            lightbox.style.top = "0";
            lightbox.style.left = "0";
            lightbox.style.width = "100%";
            lightbox.style.height = "100%";
            lightbox.style.background = "rgba(0,0,0,0.8)";
            lightbox.style.display = "flex";
            lightbox.style.alignItems = "center";
            lightbox.style.justifyContent = "center";
            lightbox.style.zIndex = "1000";

            const imgElement = document.createElement("img");
            imgElement.src = this.src;
            imgElement.style.maxWidth = "90%";
            imgElement.style.maxHeight = "80vh";
            imgElement.style.borderRadius = "10px";
            imgElement.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.4)";

            lightbox.appendChild(imgElement);
            document.body.appendChild(lightbox);

            lightbox.addEventListener("click", function () {
                lightbox.remove();
            });
        });
    });
});
