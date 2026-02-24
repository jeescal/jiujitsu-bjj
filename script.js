const translations = {
    en: {
        nav_home: "Home", nav_about: "Our Story", nav_instructor: "Instructor", nav_gallery: "Gallery", nav_schedule: "Schedule", nav_contact: "Contact",
        hero_title: "BRAZILIAN JIU-JITSU IN WINNIPEG", hero_subtitle: "Discipline, Respect and Community", hero_cta: "Join Us",
        about_title: "From Parents to Masters",
        about_content: `<p>Kinesis was born from a group of friends wanting to pass their love for martial arts to their children. What started as a project for Rodrigo and Salvador soon grew into a dream for the whole community.</p>
                        <p>Our head instructor, Francisco Bugueño (BJJ Black Belt, 2nd Degree), founded Club Cinesis in Chile. Now in Canada, he joins forces with <b>Juan Escalona</b>, an Aikido Black Belt with 15 years of experience, to lead Kinesis BJJ.</p>`,
        contact_btn: "Send Message",
        footer_copy: "© 2025 Club Kinesis BJJ Winnipeg. Developed by Juan Escalona"
    },
    es: {
        nav_home: "Inicio", nav_about: "Historia", nav_instructor: "Instructor", nav_gallery: "Galería", nav_schedule: "Horarios", nav_contact: "Contacto",
        hero_title: "JIUJITSU BRASILEÑO EN WINNIPEG", hero_subtitle: "Disciplina, Respeto y Comunidad", hero_cta: "Únete",
        about_title: "Nuestra Historia",
        about_content: `<p>Kinesis nació del deseo de un grupo de amigos de transmitir el amor por las artes marciales a sus hijos. Francisco Bugueño, junto a <b>Juan Escalona</b>, unieron sus trayectorias para crear este espacio en Winnipeg.</p>`,
        contact_btn: "Enviar Mensaje",
        footer_copy: "© 2025 Club Kinesis BJJ Winnipeg. Desarrollado por Juan Escalona"
    }
};

let currentSlide = 0;
function moveSlide(direction) {
    const wrapper = document.getElementById('carousel');
    const totalSlides = document.querySelectorAll('#carousel img').length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function setLanguage(lang) {
    localStorage.setItem('kinesis_lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('kinesis_lang') || 'en';
    document.getElementById('language-select').value = lang;
    setLanguage(lang);

    document.getElementById('language-select').onchange = (e) => setLanguage(e.target.value);
    document.getElementById('mobile-btn').onclick = () => document.getElementById('nav-links').classList.toggle('active');
    
    setInterval(() => moveSlide(1), 5000);
});
