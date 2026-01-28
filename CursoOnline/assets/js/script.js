document.addEventListener('DOMContentLoaded', () => {
    
    /* ================= 1. BARRA DE PROGRESO SCROLL ================= */
    const scrollProgress = document.getElementById('scroll-progress');

    window.addEventListener('scroll', () => {
        // Calculamos el % de scroll
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / scrollHeight) * 100;

        // Asignamos el ancho
        scrollProgress.style.width = `${scrolled}%`;
    });


    /* ================= 2. MODAL DE VIDEO ================= */
    const videoTrigger = document.getElementById('video-trigger');
    const modal = document.getElementById('video-modal');
    const modalClose = document.getElementById('modal-close');
    const iframe = document.getElementById('youtube-video');

    // Función abrir modal
    videoTrigger.addEventListener('click', () => {
        modal.classList.add('modal--show');
        // Opcional: Autoplay al abrir (añadiendo ?autoplay=1 al src)
        // iframe.src += "&autoplay=1"; 
    });

    // Función cerrar modal
    const closeModal = () => {
        modal.classList.remove('modal--show');
        // Detener video al cerrar (reiniciando el src)
        const currentSrc = iframe.src;
        iframe.src = ''; 
        iframe.src = currentSrc;
    };

    modalClose.addEventListener('click', closeModal);

    // Cerrar si se da click fuera del video
    modal.addEventListener('click', (e) => {
        if(e.target === modal) closeModal();
    });


    /* ================= 3. FAQ ACORDEÓN (Uno a la vez) ================= */
    const accordionItems = document.querySelectorAll('.accordion__item');

    accordionItems.forEach((item) => {
        const header = item.querySelector('.accordion__header');

        header.addEventListener('click', () => {
            const openItem = document.querySelector('.accordion-open');
            
            toggleItem(item);

            // Si hay otro abierto y no es el actual, ciérralo
            if(openItem && openItem !== item){
                toggleItem(openItem);
            }
        });
    });

    const toggleItem = (item) => {
        const content = item.querySelector('.accordion__content');

        if(item.classList.contains('accordion-open')){
            item.classList.remove('accordion-open');
            content.style.height = '0';
        } else {
            item.classList.add('accordion-open');
            content.style.height = content.scrollHeight + 'px';
        }
    };


    /* ================= 4. VALIDACIÓN FORMULARIO ================= */
    const form = document.getElementById('register-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const formError = document.getElementById('form-error');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evitar recarga
        let warnings = "";
        let isValid = true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Resetear errores visuales
        nameInput.classList.remove('error');
        emailInput.classList.remove('error');
        formError.style.display = 'none';

        // Validar Nombre
        if(nameInput.value.trim().length < 3){
            nameInput.classList.add('error');
            warnings += 'El nombre debe ser válido. <br>';
            isValid = false;
        }

        // Validar Email
        if(!emailRegex.test(emailInput.value)){
            emailInput.classList.add('error');
            warnings += 'El correo no es válido. <br>';
            isValid = false;
        }

        if(isValid){
            // ÉXITO: Ocultar formulario y mostrar mensaje
            form.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Aquí iría tu código para enviar datos al backend...
            console.log("Datos listos para enviar:", {
                nombre: nameInput.value, 
                email: emailInput.value
            });
        } else {
            // ERROR: Mostrar mensajes
            formError.innerHTML = warnings;
            formError.style.display = 'block';
        }
    });

});