document.addEventListener('DOMContentLoaded', () => {
    
    const formProfesores = document.getElementById('formProfesores');
    const inputLinkedin = document.getElementById('linkedin');
    const errorUrl = document.getElementById('error-url');
    const mensajeExito = document.getElementById('mensaje-exito');

    // Función que usa el objeto nativo URL de JS para validar si el enlace es real
    function esUrlValida(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;  
        }
    }

    if (formProfesores) {
        formProfesores.addEventListener('submit', function(e) {
            e.preventDefault(); // Evitamos que la página se recargue de golpe

            // 1. Limpiamos errores previos
            errorUrl.style.display = 'none';
            inputLinkedin.style.borderColor = '#ccc';
            mensajeExito.classList.add('oculto');

            const urlIngresada = inputLinkedin.value.trim();

            // 2. Validamos la URL
            if (!esUrlValida(urlIngresada)) {
                // Si NO es válida, mostramos el error y detenemos el proceso
                errorUrl.style.display = 'block';
                inputLinkedin.style.borderColor = '#d9534f';
                inputLinkedin.focus();
                return;
            }

            // 3. Si todo está correcto, simulamos el envío exitoso
            // En un caso real, acá harías un 'fetch' para enviar los datos a tu servidor
            mensajeExito.classList.remove('oculto');
            
            // Opcional: limpiar el formulario después de enviarlo
            formProfesores.reset();
        });
    }

});