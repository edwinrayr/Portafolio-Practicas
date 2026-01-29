/* script.js */

// --- MENU SHOW Y HIDDEN ---
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close') // Nuevo botón de cierre interno

// Validar si existe el toggle (hamburguesa)
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// Validar si existe el botón de cierre (X dentro del menú)
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// --- QUITAR MENU AL DAR CLICK EN UN ENLACE ---
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // Cuando clickeamos en un nav__link, quitamos la clase show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ================= LOADER Y ESTADO DE RED ================= */
const loader = document.getElementById('loader');
const loaderIcon = document.getElementById('loader-icon');
const loaderText = document.getElementById('loader-text');

// Función para ocultar el loader
const hideLoader = () => {
    loader.classList.add('hide-loader');
};

// Función para mostrar el loader (cuando se va el internet)
const showLoader = () => {
    loader.classList.remove('hide-loader');
};

// 1. CARGA INICIAL DE LA PÁGINA
window.addEventListener('load', () => {
    // Verificamos si al cargar ya estamos sin internet
    if (navigator.onLine) {
        setTimeout(hideLoader, 1500); // Si hay internet, ocultamos normal
    } else {
        setOfflineMode(); // Si cargó pero no hay net, mostramos error
    }
});

// 2. DETECTAR PÉRDIDA DE INTERNET
window.addEventListener('offline', () => {
    setOfflineMode();
});

// 3. DETECTAR RECUPERACIÓN DE INTERNET
window.addEventListener('online', () => {
    setOnlineMode();
});

// --- Funciones auxiliares para cambiar iconos y texto ---

function setOfflineMode() {
    showLoader();
    // Cambiar icono a "Wifi Off"
    loaderIcon.classList.remove('ri-loader-4-line');
    loaderIcon.classList.add('ri-wifi-off-line');
    loaderIcon.classList.add('no-animation'); // Detener rotación
    
    // Cambiar texto
    loaderText.textContent = 'Sin Conexión a Internet';
}

function setOnlineMode() {
    // Restaurar icono de carga
    loaderIcon.classList.remove('ri-wifi-off-line');
    loaderIcon.classList.remove('no-animation');
    loaderIcon.classList.add('ri-loader-4-line');
    
    // Mensaje de éxito
    loaderText.textContent = 'Conexión Restaurada';
    
    // Ocultar después de 2 segundos para que el usuario vea que volvió
    setTimeout(hideLoader, 2000);
}