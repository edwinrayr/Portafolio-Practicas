document.addEventListener('DOMContentLoaded', () => {
    
    /* ================= 1. BARRA DE PROGRESO (Solo si existe) ================= */
    const scrollProgress = document.getElementById('scroll-progress');
    if(scrollProgress) {
        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (scrollTop / scrollHeight) * 100;
            scrollProgress.style.width = `${scrolled}%`;
        });
    }

    /* ================= 2. MODAL DE VIDEO (Solo en index.html) ================= */
    const videoTrigger = document.getElementById('video-trigger');
    
    if(videoTrigger) {
        const modal = document.getElementById('video-modal');
        const modalClose = document.getElementById('modal-close');
        const iframe = document.getElementById('youtube-video');

        videoTrigger.addEventListener('click', () => {
            modal.classList.add('modal--show');
        });

        const closeModal = () => {
            modal.classList.remove('modal--show');
            const currentSrc = iframe.src;
            iframe.src = ''; 
            iframe.src = currentSrc;
        };

        modalClose.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if(e.target === modal) closeModal();
        });
    }

    /* ================= 3. FAQ ACORDEÓN (Solo en faq.html) ================= */
    const accordionItems = document.querySelectorAll('.accordion__item');
    
    if(accordionItems.length > 0) {
        accordionItems.forEach((item) => {
            const header = item.querySelector('.accordion__header');

            header.addEventListener('click', () => {
                const openItem = document.querySelector('.accordion-open');
                toggleItem(item);
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

    /* ================= 4. VALIDACIÓN FORMULARIO (Solo en registro.html) ================= */
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