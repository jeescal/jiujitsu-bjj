const translations = {
    en: {
        nav_home: "Home", nav_about: "Story", nav_instructor: "Instructor", nav_gallery: "Gallery", nav_schedule: "Schedule", nav_contact: "Contact",
        hero_title: "BRAZILIAN JIU-JITSU IN WINNIPEG", hero_subtitle: "Discipline, Respect and Community", hero_cta: "Join Us",
        about_title: "From Parents to Masters: Our Story",
        about_content: `<p>Kinesis was born from something very simple and powerful: the desire of a group of friends to pass on their love of martial arts to their children...</p>`,
        inst_name: "Our Instructor: Francisco Bugueño",
        inst_bio: `<p>Francisco Bugueño is a second-degree black belt in Brazilian Jiu-Jitsu, with over 25 years of experience...</p>`,
        day_tuesday: "Tuesday:", day_thursday: "Thursday:", schedule_soon: "Coming Soon: Saturday mornings",
        contact_title: "Contact Us", contact_btn: "Send Message",
        name_ph: "Name", email_ph: "Email", msg_ph: "Message"
    },
    es: {
        nav_home: "Inicio", nav_about: "Historia", nav_instructor: "Instructor", nav_gallery: "Galería", nav_schedule: "Horarios", nav_contact: "Contacto",
        hero_title: "JIUJITSU BRASILEÑO EN WINNIPEG", hero_subtitle: "Disciplina, Respeto y Comunidad", hero_cta: "Únete a Nosotros",
        about_title: "De Padres a Maestros: Nuestra Historia",
        about_content: `<p>Kinesis nació de algo muy simple y poderoso: el deseo de un grupo de amigos de transmitir el amor por las artes marciales a sus hijos...</p>`,
        inst_name: "Nuestro Instructor: Francisco Bugueño",
        inst_bio: `<p>Francisco Bugueño es cinturón negro segundo grado con más de 25 años de experiencia...</p>`,
        day_tuesday: "Martes:", day_thursday: "Jueves:", schedule_soon: "Próximamente: Sábados en la mañana",
        contact_title: "Contáctanos", contact_btn: "Enviar Mensaje",
        name_ph: "Nombre", email_ph: "Correo", msg_ph: "Mensaje"
    }
    // Agregar fr y pt siguiendo el mismo patrón...
};

function updateLanguage(lang) {
    localStorage.setItem('kinesis_lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (key.includes('content') || key.includes('bio')) el.innerHTML = translations[lang][key];
            else el.textContent = translations[lang][key];
        }
    });
    // Traducir placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) el.placeholder = translations[lang][key];
    });
}

// === CARRUSEL CON SWIPE ===
let currentSlide = 0;
const track = document.getElementById('carousel');
const slides = document.querySelectorAll('#carousel img');

function moveSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Swipe detect
let touchStartX = 0;
track.addEventListener('touchstart', e => touchStartX = e.changedTouches[0].screenX);
track.addEventListener('touchend', e => {
    let touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) moveSlide(1);
    if (touchEndX - touchStartX > 50) moveSlide(-1);
});

setInterval(() => moveSlide(1), 5000);

function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('kinesis_lang') || 'en';
    document.getElementById('language-select').value = savedLang;
    updateLanguage(savedLang);
});
