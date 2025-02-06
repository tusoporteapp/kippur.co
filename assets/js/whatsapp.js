 function compartirWhatsApp() {
            let url = window.location.href; // Obtiene la URL actual
            let mensaje = "¡Mira esta página increíble! 👀✨ " + url; // Mensaje personalizado
            let enlace = "https://wa.me/?text=" + encodeURIComponent(mensaje); // Construye el enlace de WhatsApp

            window.open(enlace, "_blank"); // Abre WhatsApp en una nueva pestaña
        }