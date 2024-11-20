

// Función para actualizar la tabla
function actualizarTabla() {
    document.getElementById("nombre_valor").textContent = document.getElementById("nombre").value;
    document.getElementById("apellido_valor").textContent = document.getElementById("apellido").value;
    document.getElementById("email_valor").textContent = document.getElementById("email").value;
    document.getElementById("telefono_valor").textContent = document.getElementById("telefono").value;
    document.getElementById("edad_valor").textContent = document.getElementById("edad").value;
    document.getElementById("direccion_valor").textContent = document.getElementById("direccion").value;
    document.getElementById("provincia_valor").textContent = document.getElementById("provincia").value;
    document.getElementById("codigo_postal_valor").textContent = document.getElementById("codigo_postal").value;
    
    const metodoContacto = document.querySelector('input[name="metodo_contacto"]:checked').value;
    document.getElementById("metodo_contacto_valor").textContent = metodoContacto;

    const suscripciones = document.querySelectorAll('input[name="suscripcion"]:checked');
    const valoresSuscripciones = Array.from(suscripciones).map(suscripcion => suscripcion.value).join(", ");
    document.getElementById("suscripcion_valor").textContent = valoresSuscripciones;
}

// Añadir eventos para actualizar la tabla al cambiar los campos del formulario
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("change", actualizarTabla);
});
