const translations = {
    es: {
        nav_home: "Inicio", nav_about: "Historia", nav_instructor: "Instructor", nav_gallery: "Galería", nav_schedule: "Horarios", nav_contact: "Contacto",
        hero_title: "JIUJITSU BRASILEÑO EN WINNIPEG", hero_subtitle: "Disciplina, Respeto y Comunidad", hero_cta: "Únete",
        about_title: "Nuestra Historia",
        about_content: `<p>Kinesis nació del deseo de un grupo de amigos de transmitir el amor por las artes marciales a sus hijos. Lo que comenzó como un proyecto para Rodrigo y Salvador, se transformó en un sueño para toda la comunidad.</p>
                        <p>Francisco Bugueño, nuestro instructor (Cinturón Negro BJJ), une fuerzas con <b>Juan Escalona</b> para liderar este club en Winnipeg.</p>`,
        contact_btn: "Enviar Mensaje"
    },
    en: {
        nav_home: "Home", nav_about: "Story", nav_instructor: "Instructor", nav_gallery: "Gallery", nav_schedule: "Schedule", nav_contact: "Contact",
        hero_title: "BRAZILIAN JIU-JITSU IN WINNIPEG", hero_subtitle: "Discipline, Respect and Community", hero_cta: "Join Us",
        about_title: "Our Story",
        about_content: `<p>Kinesis was born from a desire to pass martial arts to our children. Francisco Bugueño and <b>Juan Escalona</b> lead this community in Winnipeg.</p>`,
        contact_btn: "Send Message"
    }
};

let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('#carousel img');
    const wrapper = document.getElementById('carousel');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function updateLang(lang) {
    localStorage.setItem('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('lang') || 'es';
    document.getElementById('language-select').value = lang;
    updateLang(lang);

    document.getElementById('language-select').onchange = (e) => updateLang(e.target.value);
    
    // Auto-carrusel
    setInterval(() => moveSlide(1), 5000);
});
