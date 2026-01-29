document.addEventListener('DOMContentLoaded', () => {
    
    /* ================= 1. MENÚ RESPONSIVO (Abrir y Cerrar) ================= */
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    
    // ABRIR MENÚ
    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu');
        });
    }

    // CERRAR MENÚ (Botón X)
    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu');
        });
    }

    /* ================= 2. CERRAR MENÚ AL TOCAR ENLACE ================= */
    const navLinks = document.querySelectorAll('.nav__link');
    const mobileBtn = document.querySelector('.nav__btn-mobile a');

    const linkAction = () =>{
        // Cuando demos click a cualquier link o botón del menú, lo cerramos
        navMenu.classList.remove('show-menu');
    }

    navLinks.forEach(n => n.addEventListener('click', linkAction));
    if(mobileBtn) mobileBtn.addEventListener('click', linkAction);


    /* ================= 3. BARRA DE PROGRESO DE LECTURA ================= */
    const scrollProgress = document.getElementById('scroll-progress');
    if(scrollProgress) {
        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (scrollTop / scrollHeight) * 100;
            scrollProgress.style.width = `${scrolled}%`;
        });
    }

    /* ================= 4. MODAL DE VIDEO ================= */
    const videoTrigger = document.getElementById('video-trigger');
    
    if(videoTrigger) {
        const modal = document.getElementById('video-modal');
        const modalClose = document.getElementById('modal-close');
        const iframe = document.getElementById('youtube-video');

        // Abrir
        videoTrigger.addEventListener('click', () => {
            modal.classList.add('modal--show');
        });

        // Función Cerrar (y pausar video)
        const closeModal = () => {
            modal.classList.remove('modal--show');
            // Reiniciar el src detiene el video
            const currentSrc = iframe.src;
            iframe.src = ''; 
            iframe.src = currentSrc;
        };

        modalClose.addEventListener('click', closeModal);
        
        // Cerrar al dar click fuera del video
        modal.addEventListener('click', (e) => {
            if(e.target === modal) closeModal();
        });
    }

    /* ================= 5. ACORDEÓN (FAQ) ================= */
    // Solo se activará si existen elementos de acordeón
    const accordionItems = document.querySelectorAll('.accordion__item');
    
    if(accordionItems.length > 0) {
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
    }

    /* ================= 6. VALIDACIÓN FORMULARIO ================= */
    const form = document.getElementById('register-form');

    if(form) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const formError = document.getElementById('form-error');
        const successMessage = document.getElementById('success-message');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let warnings = "";
            let isValid = true;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            nameInput.classList.remove('error');
            emailInput.classList.remove('error');
            formError.style.display = 'none';

            if(nameInput.value.trim().length < 3){
                nameInput.classList.add('error');
                warnings += 'El nombre debe ser válido. <br>';
                isValid = false;
            }

            if(!emailRegex.test(emailInput.value)){
                emailInput.classList.add('error');
                warnings += 'El correo no es válido. <br>';
                isValid = false;
            }

            if(isValid){
                form.style.display = 'none';
                successMessage.style.display = 'block';
            } else {
                formError.innerHTML = warnings;
                formError.style.display = 'block';
            }
        });
    }
});