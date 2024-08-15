document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario para demostración
    
    // Aquí puedes agregar código para enviar el formulario, por ejemplo con fetch()
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
});
