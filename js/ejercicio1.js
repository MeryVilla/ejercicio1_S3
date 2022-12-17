function calcular() {
    const calificacion1 = parseFloat(document.getElementById('calificacion1').value);
    const calificacion2 = parseFloat(document.getElementById('calificacion2').value);
    const calificacion3 = parseFloat(document.getElementById('calificacion3').value);
    const examen = parseFloat(document.getElementById('examen').value);
    const trabajo = parseFloat(document.getElementById('trabajo').value);

    const promedio_calificacion = (calificacion1 + calificacion2 + calificacion3) / 3;
    const calificacion_final = promedio_calificacion * 0.55 + examen * 0.3 + trabajo * 0.15;

    document.getElementById('resultado').innerHTML = `La calificación final es: ` + calificacion_final;

    return false;
}

function limpiar() {
    document.getElementById('formulario').reset();
    document.getElementById('resultado').innerHTML = '';
}
