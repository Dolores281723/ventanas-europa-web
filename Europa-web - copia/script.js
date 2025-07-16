document.addEventListener('DOMContentLoaded', function() {

    // --- Animación de aparición para las secciones ---
    const sections = document.querySelectorAll('.page-section');

    const observerOptions = {
        root: null, // usa el viewport como el área de observación
        rootMargin: '0px',
        threshold: 0.1 // la sección se activará cuando el 10% sea visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si la sección está entrando en la vista
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Dejamos de observar la sección una vez que se ha mostrado
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        // Ocultar las secciones inicialmente para la animación
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        
        sectionObserver.observe(section);
    });


    // --- Mensaje de confirmación del formulario de contacto ---
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        // Previene que la página se recargue al enviar el formulario
        event.preventDefault(); 

        // Muestra un mensaje de confirmación
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');

        // Limpia el formulario después del envío
        contactForm.reset();
    });

});

/* == LÓGICA PARA LA PESTAÑA DE REDES SOCIALES == */
/* ============================================= */
document.addEventListener('DOMContentLoaded', function() {
    
    const socialTab = document.getElementById('social-tab');
    const socialTabHandle = document.getElementById('social-tab-handle');

    if (socialTabHandle) {
        socialTabHandle.addEventListener('click', function() {
            // Añade o quita la clase 'is-open' del contenedor principal
            socialTab.classList.toggle('is-open');
        });
    }

});