/* === CONFIGURACIÓN DE TRADUCCIONES === */
const translations = {
    en: {
        nav_home: "Home", nav_about: "Story", nav_instructor: "Instructor", nav_gallery: "Gallery", nav_schedule: "Schedule", nav_contact: "Contact",
        hero_title: "KINESIS BJJ WINNIPEG", hero_subtitle: "From Parents to Masters", hero_cta: "Join Us",
        about_title: "From Parents to Masters: Our Story",
        about_content: `<p>Kinesis was born from something very simple and powerful: the desire of a group of friends to pass on their love of martial arts to their children. What began as a family project to teach Rodrigo (Jiu-Jitsu practitioner since age 7) and Salvador (Aikido practitioner since age 6), soon transformed into a bigger dream: to share this passion with the entire Winnipeg community.</p>
                        <p>Our roots come from Chile, where Francisco Bugueño, our head instructor, founded Club Cinesis. Francisco is a Black Belt in Brazilian Jiu-Jitsu with over 25 years of experience on the mat. Today, on Canadian soil, he joins forces with Juan Escalona, a Black Belt in Aikido with 15 years of experience, to bring Kinesis Jiu-Jitsu Club to life.</p>
                        <p>Our mission is clear: we want the sport to be accessible to everyone in Winnipeg. We believe that Jiu-Jitsu is a tool for personal growth that should be within reach of anyone.</p>`,
        inst_name: "Our Instructor: Francisco Bugueño",
        inst_bio: `<p>Francisco Bugueño is a second-degree black belt in Brazilian Jiu-Jitsu, with over 25 years of experience in the discipline. Trained under the prestigious mentorship of Master Paulo Maurício Strauch, Francisco has dedicated his life to technical improvement, competition, and teaching of this martial art.</p>
                   <p>His career has been forged on the mats of Chile, where he founded and represented the Cinesis BJJ team, consolidating a high-level space for the development of practitioners at all stages of their training.</p>
                   <p>Over the years, Francisco has passed on his knowledge to multiple generations of students, instilling not only the Jiu-Jitsu technique but also the values of discipline, respect, and personal improvement.</p>`,
        day_tuesday: "Tuesday:", day_thursday: "Thursday:", schedule_soon: "Coming Soon: Saturday mornings",
        contact_title: "Contact Us", contact_btn: "Send Message",
        name_ph: "Name", email_ph: "Email", msg_ph: "Message"
    },
    es: {
        nav_home: "Inicio", nav_about: "Historia", nav_instructor: "Instructor", nav_gallery: "Galería", nav_schedule: "Horarios", nav_contact: "Contacto",
        hero_title: "JIUJITSU BRASILEÑO EN WINNIPEG", hero_subtitle: "De Padres a Maestros", hero_cta: "Únete a Nosotros",
        about_title: "De Padres a Maestros: Nuestra Historia",
        about_content: `<p>Kinesis nació de algo muy simple y poderoso: el deseo de un grupo de amigos de transmitir el amor por las artes marciales a sus hijos. Lo que comenzó como un proyecto familiar para enseñar a Rodrigo y a Salvador, pronto se transformó en un sueño más grande: compartir esta pasión con toda la comunidad de Winnipeg.</p>
                        <p>Nuestras raíces vienen de Chile, donde Francisco Bugueño, nuestro instructor principal, fundó el Club Cinesis. Francisco es Cinturón Negro en Jiujitsu Brasileño con más de 25 años de experiencia en el tatami.</p>`,
        inst_name: "Nuestro Instructor: Francisco Bugueño",
        inst_bio: `<p>Francisco Bugueño es cinturón negro segundo grado en Jiu-Jitsu Brasileño, con más de 25 años de experiencia en la disciplina. Entrenado bajo la prestigiosa mentoría del Maestro Paulo Maurício Strauch...</p>`,
        day_tuesday: "Martes:", day_thursday: "Jueves:", schedule_soon: "Próximamente: Sábados en la mañana",
        contact_title: "Contáctanos", contact_btn: "Enviar Mensaje",
        name_ph: "Nombre", email_ph: "Correo", msg_ph: "Mensaje"
    },
    fr: {
        nav_home: "Accueil", nav_about: "Histoire", nav_instructor: "Instructeur", nav_gallery: "Galerie", nav_schedule: "Horaires", nav_contact: "Contact",
        hero_title: "KINESIS BJJ WINNIPEG", hero_subtitle: "De Parents à Maîtres", hero_cta: "Rejoignez-nous",
        about_title: "De Parents à Maîtres: Notre Histoire",
        about_content: `<p>Kinesis est né de quelque chose de très simple et puissant: le désir d'un groupe d'amis de transmettre leur amour des arts martiaux à leurs enfants...</p>`,
        inst_name: "Notre Instructeur: Francisco Bugueño",
        inst_bio: `<p>Francisco Bugueño est ceinture noire deuxième degré en Jiu-Jitsu Brésilien, avec plus de 25 ans d'expérience dans la discipline...</p>`,
        day_tuesday: "Mardi:", day_thursday: "Jeudi:", schedule_soon: "Bientôt: Samedis matin",
        contact_title: "Contactez-nous", contact_btn: "Envoyer",
        name_ph: "Nom", email_ph: "Email", msg_ph: "Message"
    },
    pt: {
        nav_home: "Início", nav_about: "História", nav_instructor: "Instrutor", nav_gallery: "Galeria", nav_schedule: "Horário", nav_contact: "Contato",
        hero_title: "KINESIS BJJ WINNIPEG", hero_subtitle: "De Pais a Mestres", hero_cta: "Junte-se a nós",
        about_title: "De Pais a Mestres: Nossa História",
        about_content: `<p>Kinesis nasceu de algo muito simples e poderoso: o desejo de um grupo de amigos de transmitir o amor pelas artes marciais aos seus filhos...</p>`,
        inst_name: "Nosso Instrutor: Francisco Bugueño",
        inst_bio: `<p>Francisco Bugueño é faixa preta segundo grau em Jiu-Jitsu Brasileiro, com mais de 25 años de experiência...</p>`,
        day_tuesday: "Terça-feira:", day_thursday: "Quinta-feira:", schedule_soon: "Em breve: Sábados pela manhã",
        contact_title: "Contato", contact_btn: "Enviar",
        name_ph: "Nome", email_ph: "E-mail", msg_ph: "Mensagem"
    }
};

/* === LÓGICA DE IDIOMAS === */
function updateLanguage(lang) {
    localStorage.setItem('kinesis_lang', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Si el contenido debe ser HTML (como párrafos)
            if (key.includes('content') || key.includes('bio')) {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // Actualizar Placeholders del formulario
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const msgInput = document.querySelector('textarea[name="message"]');
    
    if (nameInput) nameInput.placeholder = translations[lang].name_ph;
    if (emailInput) emailInput.placeholder = translations[lang].email_ph;
    if (msgInput) msgInput.placeholder = translations[lang].msg_ph;
}

/* === CARRUSEL CON SOPORTE TÁCTIL (SAMSUNG S20) === */
let currentSlide = 0;
const track = document.getElementById('carousel');
const slides = document.querySelectorAll('#carousel img');

function moveSlide(direction) {
    if (!track) return;
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Soporte para Swipe (deslizar dedo)
let touchStartX = 0;
if (track) {
    track.addEventListener('touchstart', e => touchStartX = e.changedTouches[0].screenX, {passive: true});
    track.addEventListener('touchend', e => {
        let touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) moveSlide(1); // Deslizar izquierda -> Siguiente
        if (touchEndX - touchStartX > 50) moveSlide(-1); // Deslizar derecha -> Anterior
    }, {passive: true});
}

// Cambio automático cada 5 segundos
setInterval(() => moveSlide(1), 5000);

/* === MENÚ HAMBURGUESA MÓVIL === */
function toggleMenu() {
    const nav = document.getElementById('nav-links');
    if (nav) nav.classList.toggle('active');
}

/* === INICIALIZACIÓN === */
document.addEventListener('DOMContentLoaded', () => {
    // Idioma por defecto: Inglés
    const savedLang = localStorage.getItem('kinesis_lang') || 'en';
    const langSelector = document.getElementById('language-select');
    
    if (langSelector) {
        langSelector.value = savedLang;
    }
    
    updateLanguage(savedLang);
});
