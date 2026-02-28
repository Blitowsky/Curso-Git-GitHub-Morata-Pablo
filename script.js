document.addEventListener('DOMContentLoaded', () => {
    
    // SCROLL SUAVE PARA LOS ENLACES DEL MENÚ
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log("Sitio del Instituto Shark cargado correctamente.");
});