document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MENU HAMBURGUESA (Móvil)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });

    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
        });
    });


    // 2. EFECTO SCROLL FADE-IN (Intersection Observer)
    // Busca todos los elementos con la clase "fade-in"
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.2, // El elemento debe estar 20% visible para activarse
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                appearOnScroll.unobserve(entry.target); // Dejar de observar una vez animado
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });


    // 3. VALIDACIÓN SIMPLE DEL FORMULARIO
    const form = document.getElementById('orderForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evitar envío real para la demo
        
        const nombre = document.getElementById('nombre').value;
        const sabor = document.getElementById('sabor').value;

        if(nombre.length < 2) {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }

        // Simulación de envío exitoso
        alert(`¡Gracias ${nombre}! Hemos recibido tu consulta por la torta de ${sabor}. Nos pondremos en contacto pronto.`);
        form.reset();
    });
});