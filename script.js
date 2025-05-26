// script.js

window.onload = function () {
    // Paso 2: Solicitar datos al usuario
    const nombre = prompt("¿Cómo te llamás?");
    const fechaNacimientoStr = prompt("¿Cuál es tu fecha de nacimiento? (formato: AAAA-MM-DD)");

    // Paso 3: Mostrar bienvenida con los datos ingresados
    alert(`¡Bienvenido/a ${nombre} a la Galería de Arte!`);

    // Calcular días vividos
    const fechaNacimiento = new Date(fechaNacimientoStr);
    const hoy = new Date();
    const diferenciaTiempo = hoy - fechaNacimiento;
    const diasVividos = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));

    alert(`Has vivido aproximadamente ${diasVividos} días.`);
};
