/* === CONFIGURACIÓN DE TRADUCCIONES COMPLETAS === */
const translations = {
    en: {
        nav_home: "Home", nav_about: "Our Story", nav_instructor: "Instructor", nav_gallery: "Gallery", nav_schedule: "Schedule", nav_contact: "Contact",
        hero_title: "BRAZILIAN JIU-JITSU IN WINNIPEG", hero_subtitle: "Discipline, Respect and Community", hero_cta: "Join Us",
        about_title: "From Parents to Masters: Our Story",
        about_content: `<p>Kinesis was born from a simple and powerful desire: to pass on the love of martial arts to our children. What began as a family project soon transformed into a bigger dream: to share this passion with the entire Winnipeg community.</p>
                        <p>Our roots come from Chile, where Francisco Bugueño, our head instructor, founded Club Cinesis. Francisco is a Black Belt with over 25 years of experience.</p>`,
        inst_name: "Our Instructor: Francisco Bugueño",
        inst_bio: `<p>Francisco is a second-degree black belt in BJJ, trained under Master Paulo Maurício Strauch. He has dedicated over 25 years to technical improvement, competition, and teaching.</p>`,
        schedule_title: "Schedule",
        schedule_content: `<p><b>Tuesday:</b> 6:00 PM - 7:30 PM</p><p><b>Thursday:</b> 6:00 PM - 7:30 PM</p><p><i>Coming Soon: Saturday mornings</i></p>`,
        contact_title: "Contact Us", contact_btn: "Send Message",
        footer_copy: "© 2025 Club Kinesis BJJ Winnipeg. All Rights Reserved. Developed by Juan Escalona"
    },
    es: {
        nav_home: "Inicio", nav_about: "Historia", nav_instructor: "Instructor", nav_gallery: "Galería", nav_schedule: "Horarios", nav_contact: "Contacto",
        hero_title: "JIUJITSU BRASILEÑO EN WINNIPEG", hero_subtitle: "Disciplina, Respeto y Comunidad", hero_cta: "Únete a Nosotros",
        about_title: "De Padres a Maestros: Nuestra Historia",
        about_content: `<p>Kinesis nació del deseo de un grupo de amigos de transmitir el amor por las artes marciales a sus hijos. Lo que comenzó como un proyecto familiar, pronto se transformó en un sueño más grande.</p>`,
        inst_name: "Nuestro Instructor: Francisco Bugueño",
        inst_bio: `<p>Francisco es cinturón negro segundo grado con más de 25 años de experiencia, formado bajo la mentoría del Maestro Paulo Maurício Strauch.</p>`,
        schedule_title: "Horarios",
        schedule_content: `<p><b>Martes:</b> 6:00 PM - 7:30 PM</p><p><b>Jueves:</b> 6:00 PM - 7:30 PM</p><p><i>Próximamente: Sábados en la mañana</i></p>`,
        contact_title: "Contáctanos", contact_btn: "Enviar Mensaje",
        footer_copy: "© 2025 Club Kinesis BJJ Winnipeg. Todos los derechos reservados."
    },
    fr: {
        nav_home: "Accueil", nav_about: "Histoire", nav_instructor: "Instructeur", nav_gallery: "Galerie", nav_schedule: "Horaires", nav_contact: "Contact",
        hero_title: "JIU-JITSU BRÉSILIEN À WINNIPEG", hero_subtitle: "Discipline, Respect et Communauté", hero_cta: "Rejoignez-nous",
        about_title: "De Parents à Maîtres: Notre Histoire",
        about_content: `<p>Kinesis est né du désir de transmettre l'amour des arts martiaux à nos enfants. Un projet familial devenu un rêve pour toute la communauté.</p>`,
        inst_name: "Instructeur: Francisco Bugueño",
        inst_bio: `<p>Francisco est ceinture noire 2ème degré avec plus de 25 ans d'expérience.</p>`,
        schedule_content: `<p><b>Mardi:</b> 18h00 - 19h30</p><p><b>Jeudi:</b> 18h00 - 19h30</p><p><i>Bientôt: Samedi matin</i></p>`,
        contact_title: "Contactez-nous", contact_btn: "Envoyer Message",
        footer_copy: "© 2025 Club Kinesis BJJ Winnipeg. Tous droits réservés."
    },
    pt: {
        nav_home: "Início", nav_about: "História", nav_instructor: "Instrutor", nav_gallery: "Galeria", nav_schedule: "Horários", nav_contact: "Contato",
        hero_title: "JIU-JITSU BRASILEIRO EM WINNIPEG", hero_subtitle: "Disciplina, Respeito e Comunidade", hero_cta: "Junte-se a nós",
        about_title: "De Pais a Mestres: Nossa História",
        about_content: `<p>Kinesis nasceu do desejo de transmitir o amor pelas artes marciais aos nossos filhos. Um sonho compartilhado com toda Winnipeg.</p>`,
        inst_name: "Instrutor: Francisco Bugueño",
        inst_bio: `<p>Francisco é faixa preta 2º grau com mais de 25 anos de experiência.</p>`,
        schedule_content: `<p><b>Terça:</b> 18h00 - 19h30</p><p><b>Quinta:</b> 18h00 - 19h30</p><p><i>Em breve: Sábado de manhã</i></p>`,
        contact_title: "Contate-nos", contact_btn: "Enviar Mensagem",
        footer_copy: "© 2025 Club Kinesis BJJ Winnipeg. Todos os direitos reservados."
    }
};

// Función de Traducción mejorada
function updateLanguage(lang) {
    localStorage.setItem('kinesis_lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (key.includes('content') || key.includes('bio') || key.includes('schedule')) {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
}

// Lógica de Carrusel con Swipe
let currentSlide = 0;
const carousel = document.getElementById('carousel');
const slides = document.querySelectorAll('#carousel img');

function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Forzar INGLÉS por defecto si no hay idioma guardado
    const savedLang = localStorage.getItem('kinesis_lang') || 'en';
    const langSelect = document.getElementById('language-select');
    if(langSelect) {
        langSelect.value = savedLang;
        langSelect.addEventListener('change', (e) => updateLanguage(e.target.value));
    }
    updateLanguage(savedLang);

    // Controles Carrusel
    document.querySelector('.prev')?.addEventListener('click', () => showSlide(currentSlide - 1));
    document.querySelector('.next')?.addEventListener('click', () => showSlide(currentSlide + 1));
    setInterval(() => showSlide(currentSlide + 1), 5000);

    // Mobile Menu
    document.querySelector('.menu-toggle')?.addEventListener('click', () => {
        document.getElementById('nav-links').classList.toggle('active');
    });
});
