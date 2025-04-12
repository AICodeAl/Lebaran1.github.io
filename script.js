document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll untuk nav-link
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Efek gambar muncul saat hover
    const galleryImages = document.querySelectorAll('.gallery-img');

    galleryImages.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.classList.remove('opacity-0', 'scale-95');
            img.classList.add('opacity-100', 'scale-100');
        });

        img.addEventListener('mouseleave', () => {
            img.classList.remove('opacity-100', 'scale-100');
            img.classList.add('opacity-0', 'scale-95');
        });
    });
});
