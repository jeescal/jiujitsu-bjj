const translations = {
    en: {
        nav_home: "Home", nav_about: "Our Story", nav_instructor: "Instructor", nav_gallery: "Gallery", nav_schedule: "Schedule", nav_contact: "Contact",
        hero_title: "BRAZILIAN JIU-JITSU IN WINNIPEG", hero_subtitle: "Discipline, Respect and Community", hero_cta: "Join Us",
        about_title: "From Parents to Masters: Our Story",
        about_content: `<p>Kinesis was born from the desire of a group of friends to pass on their love of martial arts to their children. What began as a family project soon transformed into a bigger dream: to share this passion with the entire Winnipeg community.</p><p>Our roots come from Chile, where Francisco Bugueño, our head instructor, founded Club Cinesis. Francisco is a Black Belt with over 25 years of experience.</p>`,
        inst_name: "Our Instructor: Francisco Bugueño",
        inst_bio: `<p>Francisco Bugueño is a second-degree black belt in BJJ with over 25 years of experience. Trained under Master Paulo Maurício Strauch, Francisco has dedicated his life to teaching and competition.</p>`,
        schedule_content: `<p><b>Tuesday:</b> 6:00 PM - 7:30 PM</p><p><b>Thursday:</b> 6:00 PM - 7:30 PM</p><p><i>Coming Soon: Saturday mornings</i></p>`,
        contact_btn: "Send Message", bot_name: "Kinesis Bot",
        footer_copy: "© 2025 Club Kinesis BJJ Winnipeg. All Rights Reserved. Developed by Juan Escalona"
    },
    es: {
        nav_home: "Inicio", nav_about: "Nuestra Historia", nav_instructor: "Instructor", nav_gallery: "Galería", nav_schedule: "Horarios", nav_contact: "Contacto",
        hero_title: "JIUJITSU BRASILEÑO EN WINNIPEG", hero_subtitle: "Disciplina, Respeto y Comunidad", hero_cta: "Únete",
        about_title: "De Padres a Maestros: Nuestra Historia",
        about_content: `<p>Kinesis nació del deseo de un grupo de amigos de transmitir el amor por las artes marciales a sus hijos. Lo que comenzó como un proyecto familiar, pronto se transformó en el sueño de compartir esta pasión con toda Winnipeg.</p>`,
        inst_name: "Instructor: Francisco Bugueño",
        inst_bio: `<p>Francisco Bugueño es cinturón negro 2º grado con más de 25 años de experiencia. Formado por el Maestro Paulo Maurício Strauch.</p>`,
        schedule_content: `<p><b>Martes:</b> 6:00 PM - 7:30 PM</p><p><b>Jueves:</b> 6:00 PM - 7:30 PM</p><p><i>Próximamente: Sábados mañana</i></p>`,
        contact_btn: "Enviar Mensaje", bot_name: "Kinesis Bot",
        footer_copy: "© 2025 Club Kinesis BJJ Winnipeg. Todos los derechos reservados."
    },
    fr: {
        nav_home: "Accueil", nav_about: "Notre Histoire", nav_instructor: "Instructeur", nav_gallery: "Galerie", nav_schedule: "Horaires", nav_contact: "Contact",
        hero_title: "JIU-JITSU BRÉSILIEN À WINNIPEG", hero_subtitle: "Discipline, Respect et Communauté", hero_cta: "Rejoignez-nous",
        about_title: "De Parents à Maîtres: Notre Histoire",
        about_content: `<p>Kinesis est né du désir d'un groupe d'amis de transmettre leur amour des arts martiaux à leurs enfants. Un projet familial devenu un rêve pour toute la communauté de Winnipeg.</p>`,
        inst_name: "Notre Instructeur: Francisco Bugueño",
        inst_bio: `<p>Francisco Bugueño est ceinture noire deuxième degré avec plus de 25 ans d'expérience.</p>`,
        schedule_content: `<p><b>Mardi:</b> 18h00 - 19h30</p><p><b>Jeudi:</b> 18h00 - 19h30</p><p><i>Bientôt: Samedi matin</i></p>`,
        contact_btn: "Envoyer Message", bot_name: "Bot Kinesis",
        footer_copy: "© 2025 Club Kinesis BJJ Winnipeg. Tous droits réservés."
    },
    pt: {
        nav_home: "Início", nav_about: "Nossa História", nav_instructor: "Instrutor", nav_gallery: "Galeria", nav_schedule: "Horários", nav_contact: "Contato",
        hero_title: "JIU-JITSU BRASILEIRO EM WINNIPEG", hero_subtitle: "Disciplina, Respeito e Comunidade", hero_cta: "Junte-se a nós",
        about_title: "De Pais a Mestres: Nossa História",
        about_content: `<p>Kinesis nasceu do desejo de um grupo de amigos de transmitir o amor pelas artes marciais aos seus filhos. Um sonho compartilhado com toda Winnipeg.</p>`,
        inst_name: "Instrutor: Francisco Bugueño",
        inst_bio: `<p>Francisco Bugueño é faixa preta segundo grau com mais de 25 anos de experiência.</p>`,
        schedule_content: `<p><b>Terça:</b> 18h00 - 19h30</p><p><b>Quinta:</b> 18h00 - 19h30</p><p><i>Em breve: Sábado de manhã</i></p>`,
        contact_btn: "Enviar Mensagem", bot_name: "Bot Kinesis",
        footer_copy: "© 2025 Club Kinesis BJJ Winnipeg. Todos os direitos reservados."
    }
};

// --- Lógica de Idioma ---
function setLanguage(lang) {
    localStorage.setItem('preferred_lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (key.includes('content') || key.includes('bio') || key.includes('schedule')) {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
}

// --- Carrusel con Swipe ---
let currentSlide = 0;
const slides = document.querySelectorAll('#carousel img');
const carousel = document.getElementById('carousel');

function moveSlide(step) {
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Swipe detection
let touchStartX = 0;
carousel.addEventListener('touchstart', e => touchStartX = e.changedTouches[0].screenX);
carousel.addEventListener('touchend', e => {
    let touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) moveSlide(1);
    if (touchEndX - touchStartX > 50) moveSlide(-1);
});

// --- Eventos Iniciales ---
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred_lang') || 'en';
    document.getElementById('language-select').value = savedLang;
    setLanguage(savedLang);

    document.getElementById('language-select').onchange = (e) => setLanguage(e.target.value);
    document.getElementById('mobile-menu-btn').onclick = () => document.getElementById('nav-links').classList.toggle('active');
    
    document.querySelector('.prev').onclick = () => moveSlide(-1);
    document.querySelector('.next').onclick = () => moveSlide(1);
    
    // Auto carrusel cada 5s
    setInterval(() => moveSlide(1), 5000);

    // Chatbot Toggle
    document.getElementById('chatbot-toggle').onclick = () => {
        const box = document.getElementById('chatbot-box');
        box.style.display = (box.style.display === 'flex') ? 'none' : 'flex';
    };
});
