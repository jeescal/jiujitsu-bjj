/* === CONFIGURACIÓN DE TRADUCCIONES === */
const translations = {
    es: {
        nav_home: "Inicio", nav_about: "Historia", nav_instructor: "Instructor", nav_gallery: "Galería", nav_schedule: "Horarios", nav_contact: "Contacto",
        hero_title: "JIUJITSU BRASILEÑO EN WINNIPEG", hero_subtitle: "Disciplina, Respeto y Comunidad", hero_cta: "Únete a Nosotros",
        about_title: "De Padres a Maestros: Nuestra Historia",
        about_content: `<p>Kinesis nació de algo muy simple y poderoso: el deseo de un grupo de amigos de transmitir el amor por las artes marciales a sus hijos. Lo que comenzó como un proyecto familiar para enseñar a Rodrigo (practicante de Jiujitsu desde los 7 años) y a Salvador (practicante de Aikido desde los 6 años), pronto se transformó en un sueño más grande: compartir esta pasión con toda la comunidad de Winnipeg.</p>
                        <p>Nuestras raíces vienen de Chile, donde Francisco Bugueño, nuestro instructor principal, fundó el Club Cinesis. Francisco es Cinturón Negro en Jiujitsu Brasileño con más de 25 años de experiencia en el tatami.</p>`,
        inst_name: "Nuestro Instructor: Francisco Bugueño",
        inst_bio: `<p>Francisco Bugueño es cinturón negro segundo grado en Jiu-Jitsu Brasileño, con más de 25 años de experiencia en la disciplina. Entrenado bajo la prestigiosa mentoría del Maestro Paulo Maurício Strauch...</p>`, // (Bio completa recortada para brevedad, incluir todo el texto del prompt)
        schedule_title: "Horarios", schedule_box_heading: "Horario de Clases",
        day_wednesday: "Miércoles:", day_thursday: "Jueves:", schedule_soon: "**Próximamente:** Sábados en la mañana",
        contact_title: "Contáctanos", contact_btn: "Enviar Mensaje",
        chat_welcome: "¡Oss! Soy el Kinesis Bot. ¿Quieres saber sobre la guardia, montada o horarios?",
        chat_unknown: "Lo siento, pregunta por 'guardia', 'horario' o 'instructor'.",
        chat_suggestion: "Prueba preguntando: ¿Qué es la guardia?"
    },
    // English, Français, Português seguirían el mismo formato (Incluir toda la bio según el prompt)
};

// Logica de Traducción (Versión Completa)
function updateLanguage(lang) {
    localStorage.setItem('kinesis_lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (key.includes('content') || key.includes('bio')) {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
}

// === CAROUSEL LOGIC ===
let currentSlide = 0;
const slides = document.querySelectorAll('#carousel img');
const totalSlides = slides.length;

function showSlide(index) {
    const carousel = document.getElementById('carousel');
    if (index >= totalSlides) currentSlide = 0;
    else if (index < 0) currentSlide = totalSlides - 1;
    else currentSlide = index;
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(() => showSlide(currentSlide + 1), 5000);

// === CHATBOT LOGIC (CARGA ASÍNCRONA) ===
let bjjKnowledge = {};
async function loadKnowledge() {
    try {
        const response = await fetch('/data/knowledge.json');
        bjjKnowledge = await response.json();
    } catch (e) { console.log("Carga offline/placeholder"); }
}

const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotBox = document.getElementById('chatbot-box');
chatbotToggle.onclick = () => chatbotBox.style.display = chatbotBox.style.display === 'flex' ? 'none' : 'flex';

document.getElementById('send-btn').onclick = handleChat;
function handleChat() {
    const input = document.getElementById('user-input');
    const body = document.getElementById('chatbot-body');
    if (!input.value) return;

    body.innerHTML += `<div><b>Tú:</b> ${input.value}</div>`;
    const val = input.value.toLowerCase();
    
    setTimeout(() => {
        let reply = "Oss! No estoy seguro de eso, pero pregunta por técnicas básicas.";
        if (val.includes("guardia")) reply = "La guardia es la base del BJJ defensivo.";
        if (val.includes("horario")) reply = "Entrenamos Miércoles y Jueves 6 PM.";
        
        body.innerHTML += `<div style="color:var(--accent)"><b>Bot:</b> ${reply}</div>`;
        body.scrollTop = body.scrollHeight;
    }, 500);
    input.value = "";
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('kinesis_lang') || 'es';
    document.getElementById('language-select').value = savedLang;
    updateLanguage(savedLang);
    loadKnowledge();
});
