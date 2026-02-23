const translations = {
    en: {
        nav_home: "Home", nav_about: "Our Story", nav_instructor: "Instructor", nav_gallery: "Gallery", nav_schedule: "Schedule", nav_contact: "Contact",
        hero_title: "BRAZILIAN JIU-JITSU IN WINNIPEG", hero_subtitle: "Discipline, Respect and Community", hero_cta: "Join Us",
        about_title: "From Parents to Masters: Our Story",
        about_content: `<p>Kinesis was born from a group of friends' desire to pass on their love for martial arts to their children. What began as a family project soon transformed into a bigger dream: to share this passion with the entire Winnipeg community.</p><p>Our roots come from Chile, where Francisco Bugueño founded Club Cinesis. Francisco is a Black Belt with over 25 years of experience.</p>`,
        inst_name: "Our Instructor: Francisco Bugueño",
        inst_bio: `<p>Francisco Bugueño is a second-degree black belt in BJJ with over 25 years of experience. Trained under Master Paulo Maurício Strauch, Francisco has dedicated his life to teaching and excellence.</p>`,
        schedule_content: `<p><b>Tuesday:</b> 6:00 PM - 7:30 PM</p><p><b>Thursday:</b> 6:00 PM - 7:30 PM</p><p><i>Coming Soon: Saturday mornings</i></p>`,
        contact_btn: "Send Message",
        footer_copy: "© 2025 Club Kinesis BJJ Winnipeg. All Rights Reserved. Developed by Juan Escalona"
    },
    es: {
        nav_home: "Inicio", nav_about: "Historia", nav_instructor: "Instructor", nav_gallery: "Galería", nav_schedule: "Horarios", nav_contact: "Contacto",
        hero_title: "JIUJITSU BRASILEÑO EN WINNIPEG", hero_subtitle: "Disciplina, Respeto y Comunidad", hero_cta: "Únete",
        about_title: "De Padres a Maestros: Nuestra Historia",
        about_content: `<p>Kinesis nació del deseo de un grupo de amigos de transmitir el amor por las artes marciales a sus hijos. Un proyecto familiar que se convirtió en un sueño para toda Winnipeg.</p>`,
        inst_name: "Nuestro Instructor: Francisco Bugueño",
        inst_bio: `<p>Francisco es cinturón negro segundo grado con más de 25 años de trayectoria, formado por el Maestro Paulo Maurício Strauch.</p>`,
        schedule_content: `<p><b>Martes:</b> 6:00 PM - 7:30 PM</p><p><b>Jueves:</b> 6:00 PM - 7:30 PM</p><p><i>Próximamente: Sábados mañana</i></p>`,
        contact_btn: "Enviar Mensaje",
        footer_copy: "© 2025 Club Kinesis BJJ Winnipeg. Todos los derechos reservados."
    },
    fr: {
        nav_home: "Accueil", nav_about: "Histoire", nav_instructor: "Instructeur", nav_gallery: "Galerie", nav_schedule: "Horaires", nav_contact: "Contact",
        hero_title: "JIU-JITSU BRÉSILIEN À WINNIPEG", hero_subtitle: "Discipline, Respect et Communauté", hero_cta: "Rejoignez-nous",
        about_title: "De Parents à Maîtres: Notre Histoire",
        about_content: `<p>Kinesis est né du désir de transmettre l'amour des arts martiaux à nos enfants. Un rêve partagé avec toute la communauté de Winnipeg.</p>`,
        inst_name: "Instructeur: Francisco Bugueño",
        inst_bio: `<p>Francisco est ceinture noire 2ème degré avec plus de 25 ans d'expérience.</p>`,
        schedule_content: `<p><b>Mardi:</b> 18h00 - 19h30</p><p><b>Jeudi:</b> 18h00 - 19h30</p>`,
        contact_btn: "Envoyer",
        footer_copy: "© 2025 Club Kinesis BJJ Winnipeg. Tous droits réservés."
    },
    pt: {
        nav_home: "Início", nav_about: "História", nav_instructor: "Instrutor", nav_gallery: "Galeria", nav_schedule: "Horários", nav_contact: "Contato",
        hero_title: "JIU-JITSU BRASILEIRO EM WINNIPEG", hero_subtitle: "Disciplina, Respeto e Comunidade", hero_cta: "Junte-se",
        about_title: "De Pais a Mestres: Nossa História",
        about_content: `<p>Kinesis nasceu do desejo de transmitir o amor pelas artes marciais aos nossos filhos. Um sonho para toda Winnipeg.</p>`,
        inst_name: "Instrutor: Francisco Bugueño",
        inst_bio: `<p>Francisco é faixa preta 2º grau com mais de 25 anos de experiência.</p>`,
        schedule_content: `<p><b>Terça:</b> 18h00 - 19h30</p><p><b>Quinta:</b> 18h00 - 19h30</p>`,
        contact_btn: "Enviar",
        footer_copy: "© 2025 Club Kinesis BJJ Winnipeg. Todos os direitos reservados."
    }
};

function updateLanguage(lang) {
    localStorage.setItem('kinesis_lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (key.includes('content') || key.includes('bio')) {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
}

let currentSlide = 0;
const slides = document.querySelectorAll('#carousel img');
const carousel = document.getElementById('carousel');

function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('kinesis_lang') || 'en';
    document.getElementById('language-select').value = savedLang;
    updateLanguage(savedLang);

    document.getElementById('language-select').onchange = (e) => updateLanguage(e.target.value);
    document.getElementById('mobile-menu-btn').onclick = () => document.getElementById('nav-links').classList.toggle('active');
    
    document.querySelector('.prev').onclick = () => showSlide(currentSlide - 1);
    document.querySelector('.next').onclick = () => showSlide(currentSlide + 1);
    setInterval(() => showSlide(currentSlide + 1), 5000);
});
