document.addEventListener('DOMContentLoaded', () => {
    
    // EFECTO HOVER CON JS EN LAS TARJETAS
    const tarjetas = document.querySelectorAll('.card-nivel');
    
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('mouseenter', function() {
            // Al pasar el mouse: aumentar el grosor y cambiar el color del borde
            if (this.classList.contains('secundario')) {
                this.style.borderColor = '#FFD700';
                this.style.borderWidth = '4px';
            } else if (this.classList.contains('universitario')) {
                this.style.borderColor = '#FF6B6B';
                this.style.borderWidth = '4px';
            }
        });
        
        tarjeta.addEventListener('mouseleave', function() {
            // Al salir el mouse: volver al borde original
            if (this.classList.contains('secundario')) {
                this.style.borderColor = '#FFD700';
                this.style.borderWidth = '3px';
            } else if (this.classList.contains('universitario')) {
                this.style.borderColor = '#FF6B6B';
                this.style.borderWidth = '3px';
            }
        });
    });

    console.log("Página de Matemática cargada correctamente.");
});
