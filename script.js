const translations = {
    en: {
        nav_home: "Home", nav_about: "Story", nav_instructor: "Instructor", nav_gallery: "Gallery", nav_schedule: "Schedule", nav_contact: "Contact",
        hero_title: "BRAZILIAN JIU-JITSU IN WINNIPEG", hero_subtitle: "Discipline, Respect and Community", hero_cta: "Join Us",
        about_title: "From Parents to Masters: Our Story",
        about_content: `<p>Kinesis was born from a powerful desire: a group of friends wanting to pass their love for martial arts to their children. What started as a project for Rodrigo and Salvador soon grew into a dream for the whole community.</p>
                        <p>Our head instructor, Francisco Bugueño (BJJ Black Belt, 25+ years exp.), founded Club Cinesis in Chile. Now in Canada, he joins forces with <b>Juan Escalona</b>, an Aikido Black Belt with 15 years of experience, to lead Kinesis Jiu-Jitsu Club.</p>
                        <p>We are proud to train at the Manitoba Chilean Association facilities, our home for growing this discipline.</p>`,
        inst_name: "Francisco Bugueño",
        inst_bio: `<p>Second-degree BJJ Black Belt under Master Paulo Maurício Strauch. Over 25 years forging a career in Chile and now Canada.</p>`,
        schedule_content: `<p><b>Tuesday & Thursday:</b> 6:00 PM - 7:30 PM</p>`,
        contact_btn: "Send Message",
        footer_copy: "© 2025 Club Kinesis BJJ Winnipeg. Developed by Juan Escalona"
    },
    es: {
        nav_home: "Inicio", nav_about: "Historia", nav_instructor: "Instructor", nav_gallery: "Galería", nav_schedule: "Horarios", nav_contact: "Contacto",
        hero_title: "JIUJITSU BRASILEÑO EN WINNIPEG", hero_subtitle: "Disciplina, Respeto y Comunidad", hero_cta: "Únete",
        about_title: "De Padres a Maestros: Nuestra Historia",
        about_content: `<p>Kinesis nació del deseo de un grupo de amigos de transmitir el amor por las artes marciales a sus hijos. Lo que comenzó como un proyecto familiar para Rodrigo y Salvador, pronto se transformó en compartir esta pasión con todo Winnipeg.</p>
                        <p>Francisco Bugueño, nuestro instructor principal (Cinturón Negro BJJ, 25+ años exp.), fundó el Club Cinesis en Chile. Hoy en Canadá, une fuerzas con <b>Juan Escalona</b>, Cinturón Negro en Aikido con 15 años de trayectoria, para dar vida a Kinesis BJJ.</p>
                        <p>Actualmente entrenamos en la Asociación Chilena de Manitoba, quienes nos han abierto sus puertas.</p>`,
        inst_name: "Francisco Bugueño",
        inst_bio: `<p>Cinturón negro 2º grado, formado por el Maestro Paulo Maurício Strauch. Más de 25 años de experiencia técnica y competitiva.</p>`,
        schedule_content: `<p><b>Martes y Jueves:</b> 6:00 PM - 7:30 PM</p>`,
        contact_btn: "Enviar Mensaje",
        footer_copy: "© 2025 Club Kinesis BJJ Winnipeg. Desarrollado por Juan Escalona"
    }
};

// --- LOGICA DE IDIOMA ---
function updateLanguage(lang) {
    localStorage.setItem('kinesis_lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

// --- LOGICA DEL CARRUSEL ---
let currentSlide = 0;
const carousel = document.getElementById('carousel');
const slides = document.querySelectorAll('#carousel img');

function moveSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;
    
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    // Idioma
    const lang = localStorage.getItem('kinesis_lang') || 'en';
    document.getElementById('language-select').value = lang;
    updateLanguage(lang);

    document.getElementById('language-select').onchange = (e) => updateLanguage(e.target.value);
    
    // Menu Móvil
    document.getElementById('mobile-menu-btn').onclick = () => {
        document.getElementById('nav-links').classList.toggle('active');
    };

    // Carrusel Eventos
    document.getElementById('nextBtn').onclick = () => moveSlide(currentSlide + 1);
    document.getElementById('prevBtn').onclick = () => moveSlide(currentSlide - 1);
    
    // Auto-play cada 5 segundos
    setInterval(() => moveSlide(currentSlide + 1), 5000);
});
