document.addEventListener("DOMContentLoaded", () => {
    const saludoElement = document.getElementById("saludo-usuario");
    const ahora = new Date();
    const hora = ahora.getHours();
    const diaSemana = ahora.getDay(); // 0 es Domingo, 1-5 Lunes a Viernes, 6 Sábado
    
    let mensaje = "";

    // 1. Determinamos el saludo inicial según la hora
    let saludoBase = "";
    if (hora >= 6 && hora < 12) {
        saludoBase = "¡Buenos días!";
    } else if (hora >= 12 && hora < 20) {
        saludoBase = "¡Buenas tardes!";
    } else {
        saludoBase = "¡Buenas noches!";
    }

    // 2. Lógica de estado de oficina (Lunes a Viernes 9-18, Sábados 10-13)
    let estaAbierto = false;

    if (diaSemana >= 1 && diaSemana <= 5) {
        // Lunes a Viernes
        if (hora >= 9 && hora < 18) estaAbierto = true;
    } else if (diaSemana === 6) {
        // Sábados
        if (hora >= 10 && hora < 13) estaAbierto = true;
    }

    // 3. Construimos el mensaje final
    if (estaAbierto) {
        mensaje = `${saludoBase} Nuestra oficina está abierta. ¡Te esperamos!`;
        saludoElement.style.color = "#0B3D91"; // Color verde si está abierto
    } else {
        mensaje = `${saludoBase} Actualmente estamos cerrados, pero podés dejarnos tu consulta.`;
        saludoElement.style.color = "#8B0000"; // Color rojizo si está cerrado
    }

    saludoElement.textContent = mensaje;
});