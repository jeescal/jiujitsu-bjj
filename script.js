document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================
    // 1. DICCIONARIO DE TRADUCCIÓN
    // ==========================================================
    const translations = {
        'es': {
            page_title: 'Kinesis BJJ - Escuela de Brazilian Jiu-Jitsu en Winnipeg',
            nav_home: 'Inicio',
            nav_about: 'Quiénes Somos',
            nav_instructor: 'Instructor',
            nav_gallery: 'Galería',
            nav_schedule: 'Horarios',
            nav_contact: 'Contacto',
            home_title: 'Entrena con Maestros. Crece con Kinesis BJJ.',
            home_subtitle: 'Brazilian Jiu-Jitsu en Winnipeg. Disciplina, respeto y crecimiento personal.',
            home_cta: 'Clase de Prueba Gratuita',
            about_title: 'Quiénes Somos',
            about_history_title: 'De Padres a Maestros: Nuestra Historia',
            about_p1: 'Kinesis nació de algo muy simple y poderoso: el deseo de un grupo de amigos de transmitir el amor por las artes marciales a sus hijos. Lo que comenzó como un proyecto familiar para enseñar a Rodrigo (practicante de Jiujitsu desde los 7 años) y a Salvador (practicante de Aikido desde los 6 años), pronto se transformó en un sueño más grande: compartir esta pasión con toda la comunidad de Winnipeg.',
            about_p2: 'Nuestras raíces vienen de Chile, donde Francisco Bugueño, nuestro instructor principal, fundó el Club Cinesis. Francisco es Cinturón Negro en Jiujitsu Brasileño con más de 25 años de experiencia en el tatami. Hoy, en tierras canadienses, une fuerzas con Juan Escalona, Cinturón Negro en Aikido con 15 años de trayectoria, para dar vida al Club de Jiujitsu Kinesis.',
            about_p3: 'Nuestra misión es clara: queremos que el deporte sea accesible para todos en Winnipeg. Creemos que el Jiujitsu es una herramienta de crecimiento personal que debe estar al alcance de cualquier persona.',
            about_p4: 'Actualmente, tenemos el honor de entrenar en las instalaciones de la Asociación Chilena de Manitoba, quienes nos han abierto sus puertas para seguir cultivando y expandiendo esta noble disciplina.',
            instructor_section_title: 'Nuestro Instructor',
            instructor_title: 'Nuestro Instructor: Francisco Bugueño',
            instructor_p1: 'Francisco Bugueño es cinturón negro segundo grado en Jiu-Jitsu Brasileño, con más de 25 años de experiencia en la disciplina. Entrenado bajo la prestigiosa mentoría del Maestro Paulo Maurício Strauch, Francisco ha dedicado su vida al perfeccionamiento técnico, la competencia y la enseñanza de este arte marcial.',
            instructor_p2: 'Su trayectoria se ha forjado en los tatamis de Chile, donde fundó y representó al equipo Cinesis BJJ, consolidando un espacio de alto nivel para el desarrollo de practicantes en todas las etapas de su formación. Ha entrenado y competido de manera constante, enfrentando a atletas reconocidos y manteniendo siempre un estilo técnico, dinámico y marcado por la búsqueda de la excelencia.',
            instructor_p3: 'A lo largo de los años, Francisco ha transmitido su conocimiento a múltiples generaciones de estudiantes, inculcando no solo la técnica del Jiu-Jitsu, sino también los valores de disciplina, respeto y superación personal. Actualmente continúa su carrera en Canadá, donde combina su vasta experiencia competitiva con su rol como profesor, impulsando el crecimiento del Jiu-Jitsu Brasileño en nuevas comunidades.',
            instructor_p4: 'Con una visión que une tradición y modernidad, Francisco Bugueño se proyecta como un referente en el Jiu-Jitsu, tanto a nivel competitivo como educativo, manteniendo intacta su pasión por este arte marcial.',
            gallery_title: 'Galería de Fotos',
            events_title: 'Próximos Eventos',
            event_1: 'Seminario de Guardia De La Riva con el Profesor Bugueño (Sábado 15 de marzo)',
            event_2: 'Competencia Interna del Club (Sábado 12 de abril)',
            event_3: 'Clases abiertas de BJJ: Trae un Amigo (Todos los jueves)',
            schedule_title: 'Horarios',
            schedule_tues: 'Martes:',
            schedule_thur: 'Jueves:',
            schedule_soon: 'Próximamente:',
            schedule_note: 'Clases de Jiu-Jitsu Brasileño para Adultos y Adolescentes (Mayores de 13 años).',
            contact_title: 'Contáctenos',
            contact_form_title: 'Envíanos un Mensaje',
            contact_name: 'Nombre',
            contact_email: 'Email',
            contact_phone: 'Teléfono',
            contact_message: 'Mensaje',
            contact_send_button: 'Enviar Mensaje',
            contact_location_title: 'Ubicación y Contacto',
            contact_address_label: 'Dirección:',
            chatbot_open_btn: 'Chat BJJ',
            chatbot_header: 'Chat de Técnicas BJJ',
            chatbot_welcome: '¡Hola! Soy el asistente de Kinesis BJJ. Pregúntame sobre técnicas, posiciones o terminología de Jiu-Jitsu Brasileño.',
            form_success: '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.'
        },
        'en': {
            page_title: 'Kinesis BJJ - Brazilian Jiu-Jitsu School in Winnipeg',
            nav_home: 'Home',
            nav_about: 'About Us',
            nav_instructor: 'Instructor',
            nav_gallery: 'Gallery',
            nav_schedule: 'Schedule',
            nav_contact: 'Contact',
            home_title: 'Train with Masters. Grow with Kinesis BJJ.',
            home_subtitle: 'Brazilian Jiu-Jitsu in Winnipeg. Discipline, respect, and personal growth.',
            home_cta: 'Free Trial Class',
            about_title: 'About Us',
            about_history_title: 'From Parents to Masters: Our Story',
            about_p1: 'Kinesis was born from something very simple and powerful: the desire of a group of friends to pass on the love for martial arts to their children. What started as a family project to teach Rodrigo (Jiujitsu practitioner since age 7) and Salvador (Aikido practitioner since age 6), soon transformed into a bigger dream: to share this passion with the entire Winnipeg community.',
            about_p2: 'Our roots come from Chile, where Francisco Bugueño, our head instructor, founded Club Cinesis. Francisco is a Brazilian Jiu-Jitsu Black Belt with over 25 years of experience on the mat. Today, in Canadian lands, he joins forces with Juan Escalona, an Aikido Black Belt with 15 years of experience, to bring the Kinesis Jiu-Jitsu Club to life.',
            about_p3: 'Our mission is clear: we want the sport to be accessible to everyone in Winnipeg. We believe that Jiu-Jitsu is a tool for personal growth that should be within reach of anyone.',
            about_p4: 'We currently have the honor of training at the Manitoba Chilean Association facilities, who have opened their doors to us to continue cultivating and expanding this noble discipline.',
            instructor_section_title: 'Our Instructor',
            instructor_title: 'Our Instructor: Francisco Bugueño',
            instructor_p1: 'Francisco Bugueño is a second-degree black belt in Brazilian Jiu-Jitsu, with over 25 years of experience in the discipline. Trained under the prestigious mentorship of Master Paulo Maurício Strauch, Francisco has dedicated his life to technical improvement, competition, and teaching of this martial art.',
            instructor_p2: 'His career has been forged on the mats of Chile, where he founded and represented the Cinesis BJJ team, consolidating a high-level space for the development of practitioners at all stages of their training. He has trained and competed consistently, facing renowned athletes and always maintaining a technical, dynamic style marked by the pursuit of excellence.',
            instructor_p3: 'Over the years, Francisco has passed on his knowledge to multiple generations of students, instilling not only the Jiu-Jitsu technique but also the values of discipline, respect, and personal improvement. He currently continues his career in Canada, where he combines his vast competitive experience with his role as a teacher, driving the growth of Brazilian Jiu-Jitsu in new communities.',
            instructor_p4: 'With a vision that unites tradition and modernity, Francisco Bugueño projects himself as a reference in Jiu-Jitsu, both in the competitive and educational levels, keeping his passion for this martial art intact.',
            gallery_title: 'Photo Gallery',
            events_title: 'Upcoming Events',
            event_1: 'De La Riva Guard Seminar with Professor Bugueño (Saturday, March 15)',
            event_2: 'Internal Club Competition (Saturday, April 12)',
            event_3: 'Open BJJ Classes: Bring a Friend (Every Thursday)',
            schedule_title: 'Schedule',
            schedule_tues: 'Tuesday:',
            schedule_thur: 'Thursday:',
            schedule_soon: 'Coming Soon:',
            schedule_note: 'Brazilian Jiu-Jitsu Classes for Adults and Teens (Ages 13+).',
            contact_title: 'Contact Us',
            contact_form_title: 'Send us a Message',
            contact_name: 'Name',
            contact_email: 'Email',
            contact_phone: 'Phone',
            contact_message: 'Message',
            contact_send_button: 'Send Message',
            contact_location_title: 'Location and Contact',
            contact_address_label: 'Address:',
            chatbot_open_btn: 'BJJ Chat',
            chatbot_header: 'BJJ Techniques Chat',
            chatbot_welcome: 'Hi! I am the Kinesis BJJ assistant. Ask me about Brazilian Jiu-Jitsu techniques, positions, or terminology.',
            form_success: 'Message sent successfully! We will contact you soon.'
        },
        'fr': {
            page_title: 'Kinesis BJJ - École de Jiu-Jitsu Brésilien à Winnipeg',
            nav_home: 'Accueil',
            nav_about: 'À Propos',
            nav_instructor: 'Instructeur',
            nav_gallery: 'Galerie',
            nav_schedule: 'Horaires',
            nav_contact: 'Contact',
            home_title: 'Entraînez-vous avec des Maîtres. Grandissez avec Kinesis BJJ.',
            home_subtitle: 'Jiu-Jitsu Brésilien à Winnipeg. Discipline, respect et croissance personnelle.',
            home_cta: 'Cours d\'Essai Gratuit',
            about_title: 'À Propos de Nous',
            about_history_title: 'De Parents à Maîtres : Notre Histoire',
            about_p1: 'Kinesis est né d\'une chose très simple et puissante : le désir d\'un groupe d\'amis de transmettre l\'amour des arts martiaux à leurs enfants. Ce qui a commencé comme un projet familial pour enseigner à Rodrigo (pratiquant de Jiujitsu depuis 7 ans) et à Salvador (pratiquant d\'Aïkido depuis 6 ans), s\'est rapidement transformé en un rêve plus grand : partager cette passion avec toute la communauté de Winnipeg.',
            about_p2: 'Nos racines viennent du Chili, où Francisco Bugueño, notre instructeur principal, a fondé le Club Cinesis. Francisco est Ceinture Noire en Jiu-Jitsu Brésilien avec plus de 25 ans d\'expérience sur le tatami. Aujourd\'hui, en terres canadiennes, il unit ses forces à Juan Escalona, Ceinture Noire en Aïkido avec 15 ans de trajectoire, pour donner vie au Club de Jiu-Jitsu Kinesis.',
            about_p3: 'Notre mission est claire : nous voulons que le sport soit accessible à tous à Winnipeg. Nous croyons que le Jiu-Jitsu est un outil de croissance personnelle qui doit être à la portée de n\'importe quelle personne.',
            about_p4: 'Nous avons actuellement l\'honneur de nous entraîner dans les installations de l\'Association Chilienne du Manitoba, qui nous ont ouvert leurs portes pour continuer à cultiver et à développer cette noble discipline.',
            instructor_section_title: 'Notre Instructeur',
            instructor_title: 'Notre Instructeur: Francisco Bugueño',
            instructor_p1: 'Francisco Bugueño est ceinture noire deuxième degré en Jiu-Jitsu Brésilien, avec plus de 25 ans d\'expérience dans la discipline. Formé sous le mentorat prestigieux du Maître Paulo Maurício Strauch, Francisco a consacré sa vie au perfectionnement technique, à la compétition et à l\'enseignement de cet art martial.',
            instructor_p2: 'Sa carrière s\'est forgée sur les tatamis du Chili, où il a fondé et représenté l\'équipe Cinesis BJJ, consolidant un espace de haut niveau pour le développement des pratiquants à toutes les étapes de leur formation. Il s\'est entraîné et a participé à des compétitions de manière constante, affrontant des athlètes reconnus et maintenant toujours un style technique, dynamique et marqué par la recherche de l\'excellence.',
            instructor_p3: 'Au fil des années, Francisco a transmis ses connaissances à plusieurs générations d\'étudiants, inculquant non seulement la technique du Jiu-Jitsu, mais aussi les valeurs de discipline, de respect et d\'amélioration personnelle. Il poursuit actuellement sa carrière au Canada, où il combine sa vaste expérience compétitive avec son rôle d\'enseignant, favorisant la croissance du Jiu-Jitsu Brésilien dans de nouvelles communautés.',
            instructor_p4: 'Avec une vision qui unit tradition et modernité, Francisco Bugueño se projette comme une référence dans le Jiu-Jitsu, tant au niveau compétitif qu\'éducatif, gardant intacte sa passion pour cet art martial.',
            gallery_title: 'Galerie de Photos',
            events_title: 'Événements à Venir',
            event_1: 'Séminaire de Garde De La Riva avec le Professeur Bugueño (Samedi 15 mars)',
            event_2: 'Compétition Interne du Club (Samedi 12 avril)',
            event_3: 'Cours ouverts de BJJ : Amenez un Ami (Tous les jeudis)',
            schedule_title: 'Horaires',
            schedule_tues: 'Mardi:',
            schedule_thur: 'Jeudi:',
            schedule_soon: 'Prochainement:',
            schedule_note: 'Cours de Jiu-Jitsu Brésilien pour Adultes et Adolescents (13 ans et plus).',
            contact_title: 'Contactez-Nous',
            contact_form_title: 'Envoyez-nous un Message',
            contact_name: 'Nom',
            contact_email: 'Email',
            contact_phone: 'Téléphone',
            contact_message: 'Message',
            contact_send_button: 'Envoyer le Message',
            contact_location_title: 'Emplacement et Contact',
            contact_address_label: 'Adresse:',
            chatbot_open_btn: 'Chat BJJ',
            chatbot_header: 'Chat des Techniques BJJ',
            chatbot_welcome: 'Bonjour ! Je suis l\'assistant de Kinesis BJJ. Demandez-moi des techniques, positions ou terminologie de Jiu-Jitsu Brésilien.',
            form_success: 'Message envoyé avec succès ! Nous vous contacterons bientôt.'
        },
        'pt': {
            page_title: 'Kinesis BJJ - Escola de Jiu-Jitsu Brasileiro em Winnipeg',
            nav_home: 'Início',
            nav_about: 'Quem Somos',
            nav_instructor: 'Instrutor',
            nav_gallery: 'Galeria',
            nav_schedule: 'Horários',
            nav_contact: 'Contato',
            home_title: 'Treine com Mestres. Cresça com Kinesis BJJ.',
            home_subtitle: 'Jiu-Jitsu Brasileiro em Winnipeg. Disciplina, respeito e crescimento pessoal.',
            home_cta: 'Aula Experimental Gratuita',
            about_title: 'Quem Somos',
            about_history_title: 'De Pais a Mestres: Nossa História',
            about_p1: 'A Kinesis nasceu de algo muito simples e poderoso: o desejo de um grupo de amigos de transmitir o amor pelas artes marciais aos seus filhos. O que começou como um projeto familiar para ensinar Rodrigo (praticante de Jiujitsu desde os 7 anos) e Salvador (praticante de Aikido desde os 6 anos), logo se transformou em um sonho maior: compartilhar essa paixão com toda a comunidade de Winnipeg.',
            about_p2: 'Nossas raízes vêm do Chile, onde Francisco Bugueño, nosso instrutor principal, fundou o Clube Cinesis. Francisco é Faixa Preta em Jiu-Jitsu Brasileiro com mais de 25 anos de experiência no tatame. Hoje, em terras canadenses, ele une forças com Juan Escalona, Faixa Preta em Aikido com 15 anos de trajetória, para dar vida ao Clube de Jiu-Jitsu Kinesis.',
            about_p3: 'Nossa missão é clara: queremos que o esporte seja acessível para todos em Winnipeg. Acreditamos que o Jiu-Jitsu é uma ferramenta de crescimento pessoal que deve estar ao alcance de qualquer pessoa.',
            about_p4: 'Atualmente, temos a honra de treinar nas instalações da Associação Chilena de Manitoba, que nos abriram as portas para continuar cultivando e expandindo esta nobre disciplina.',
            instructor_section_title: 'Nosso Instrutor',
            instructor_title: 'Nosso Instrutor: Francisco Bugueño',
            instructor_p1: 'Francisco Bugueño é faixa preta segundo grau em Jiu-Jitsu Brasileiro, com mais de 25 anos de experiência na disciplina. Treinado sob a prestigiosa mentoria do Mestre Paulo Maurício Strauch, Francisco dedicou sua vida ao aperfeiçoamento técnico, à competição e ao ensino desta arte marcial.',
            instructor_p2: 'Sua trajetória foi forjada nos tatames do Chile, onde fundou e representou a equipe Cinesis BJJ, consolidando um espaço de alto nível para o desenvolvimento de praticantes em todas as etapas de sua formação. Treinou e competiu de forma constante, enfrentando atletas reconhecidos e mantendo sempre um estilo técnico, dinâmico e marcado pela busca da excelência.',
            instructor_p3: 'Ao longo dos anos, Francisco transmitiu seu conhecimento a múltiplas gerações de alunos, incutindo não apenas a técnica do Jiu-Jitsu, mas também os valores de disciplina, respeito e superação pessoal. Atualmente continua sua carreira no Canadá, onde combina sua vasta experiência competitiva com seu papel como professor, impulsionando o crescimento do Jiu-Jitsu Brasileiro em novas comunidades.',
            instructor_p4: 'Com uma visão que une tradição e modernidade, Francisco Bugueño se projeta como uma referência no Jiu-Jitsu, tanto no nível competitivo quanto educativo, mantendo intacta sua paixão por esta arte marcial.',
            gallery_title: 'Galeria de Fotos',
            events_title: 'Próximos Eventos',
            event_1: 'Seminário de Guarda De La Riva com o Professor Bugueño (Sábado, 15 de Março)',
            event_2: 'Competição Interna do Clube (Sábado, 12 de Abril)',
            event_3: 'Aulas abertas de BJJ: Traga um Amigo (Todas as quintas-feiras)',
            schedule_title: 'Horários',
            schedule_tues: 'Terça-feira:',
            schedule_thur: 'Quinta-feira:',
            schedule_soon: 'Em Breve:',
            schedule_note: 'Aulas de Jiu-Jitsu Brasileiro para Adultos e Adolescentes (Maiores de 13 anos).',
            contact_title: 'Fale Conosco',
            contact_form_title: 'Envie-nos uma Mensagem',
            contact_name: 'Nome',
            contact_email: 'E-mail',
            contact_phone: 'Telefone',
            contact_message: 'Mensagem',
            contact_send_button: 'Enviar Mensagem',
            contact_location_title: 'Localização e Contato',
            contact_address_label: 'Endereço:',
            chatbot_open_btn: 'Chat BJJ',
            chatbot_header: 'Chat de Técnicas BJJ',
            chatbot_welcome: 'Olá! Eu sou o assistente da Kinesis BJJ. Pergunte-me sobre técnicas, posições ou terminologia de Jiu-Jitsu Brasileiro.',
            form_success: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
        }
    };

    let currentLanguage = localStorage.getItem('lang') || 'es';
    const languageSwitcher = document.getElementById('language-switcher');
    
    // Función de traducción
    const translatePage = (lang) => {
        document.querySelectorAll('.lang').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Traducción de atributos (placeholders, etc.)
        document.querySelectorAll('.lang-attr').forEach(element => {
            const attr = element.getAttribute('data-attr');
            const key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                element.setAttribute(attr, translations[lang][key]);
            }
        });

        // Traducción del título de la página
        document.getElementById('page_title').textContent = translations[lang].page_title;

        // Actualizar idioma del Chatbot
        updateChatbotWelcomeMessage(lang);
    };

    // Aplicar idioma al inicio y actualizar el selector
    languageSwitcher.value = currentLanguage;
    translatePage(currentLanguage);

    // Evento para cambiar idioma
    languageSwitcher.addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        localStorage.setItem('lang', currentLanguage);
        translatePage(currentLanguage);
    });

    // ==========================================================
    // 2. NAVEGACIÓN Y RESPONSIVE
    // ==========================================================
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        // Cerrar el menú al hacer clic en un link
        document.querySelectorAll('.nav-links li a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-active');
            });
        });
    });
    
    // ==========================================================
    // 3. ANIMACIÓN SCROLL (Intersection Observer)
    // ==========================================================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.content-section').forEach(section => {
        observer.observe(section);
    });

    // ==========================================================
    // 4. CARRUSEL DE FOTOS
    // ==========================================================
    const carouselSlide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    let currentIndex = 0;
    const totalImages = images.length;
    let slideWidth = images[0].clientWidth;
    let autoSlideInterval;

    // Crear dots indicadores
    for (let i = 0; i < totalImages; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToSlide(i);
        });
        dotsContainer.appendChild(dot);
    }
    const dots = document.querySelectorAll('.dot');

    const updateDots = () => {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    };

    const goToSlide = (index) => {
        currentIndex = index;
        if (currentIndex < 0) {
            currentIndex = totalImages - 1;
        } else if (currentIndex >= totalImages) {
            currentIndex = 0;
        }
        carouselSlide.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        updateDots();
    };

    const nextSlide = () => {
        goToSlide(currentIndex + 1);
    };

    const prevSlide = () => {
        goToSlide(currentIndex - 1);
    };

    // Botones
    nextButton.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    prevButton.addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    // Auto-slide
    const startAutoSlide = () => {
        autoSlideInterval = setInterval(nextSlide, 4500); // Pasa cada 4.5 segundos
    };

    const stopAutoSlide = () => {
        clearInterval(autoSlideInterval);
    };

    // Manejar redimensionamiento
    window.addEventListener('resize', () => {
        slideWidth = images[0].clientWidth;
        goToSlide(currentIndex);
    });

    // Inicializar carrusel
    goToSlide(0);
    startAutoSlide();


    // ==========================================================
    // 5. CHATBOT (Simulación)
    // ==========================================================

    // Base de conocimientos de BJJ
    const bjjKnowledgeBase = {
        'es': {
            'guardia': 'La Guardia es la posición fundamental del BJJ. Estás de espaldas, pero usas tus piernas para controlar la distancia y atacar al oponente. Es una posición defensiva y ofensiva.',
            'montada': 'La Montada es una posición de control superior donde te sientas sobre el pecho del oponente. Otorga el máximo control y es ideal para aplicar sumisiones.',
            'espalda': 'El Control de Espalda es la posición más dominante. Se asegura la espalda del oponente usando ganchos (con las piernas) y permite aplicar el Mata-león (Rear Naked Choke), la sumisión más efectiva.',
            'armbar': 'La Palanca de Brazo (Armbar o Jūji-Gatame) es una técnica de sumisión que busca hiperextender la articulación del codo del oponente.',
            'kimura': 'La Kimura es una llave de hombro que usa el agarre de 'figura de cuatro' para rotar el hombro del oponente, causándole dolor. Es muy útil desde el control lateral o la guardia.',
            'terminología': 'La terminología clave incluye: 'Gi' (uniforme), 'Faixa' (cinturón), 'Raspagem' (barrido), 'Queda' (derribo) y 'Finalização' (sumisión).',
            'principiante': 'Para principiantes, concéntrate en la Guardia Cerrada (Closed Guard), en el Escape de Montada y en la Palanca de Brazo (Armbar). ¡Las bases son lo más importante!',
            'avanzado': 'Los practicantes avanzados pueden explorar la Guardia De La Riva, los ataques de pierna (Heel Hooks) y las transiciones complejas como la 'berimbolo'.',
            'fallo': 'Lo siento, no entendí tu pregunta sobre BJJ. Intenta preguntar por una posición (Guardia, Montada, Espalda) o una sumisión (Armbar, Kimura).'
        },
        'en': {
            'guard': 'The Guard is the fundamental position of BJJ. You are on your back, but you use your legs to control distance and attack the opponent. It is both a defensive and offensive position.',
            'mount': 'The Mount is a superior control position where you sit on the opponent\'s chest. It grants maximum control and is ideal for applying submissions.',
            'back': 'Back Control is the most dominant position. You secure the opponent\'s back using hooks (with your legs) and allows for the application of the Rear Naked Choke (RNC), the most effective submission.',
            'armbar': 'The Armbar (or Jūji-Gatame) is a submission technique that seeks to hyperextend the opponent\'s elbow joint.',
            'kimura': 'The Kimura is a shoulder lock that uses the 'figure-four' grip to rotate the opponent\'s shoulder, causing pain. It is very useful from side control or guard.',
            'terminology': 'Key terminology includes: 'Gi' (uniform), 'Belt' (Faixa), 'Sweep' (Raspagem), 'Takedown' (Queda) and 'Submission' (Finalização).',
            'beginner': 'For beginners, focus on the Closed Guard, Mount Escapes, and the Armbar. The basics are the most important thing!',
            'advanced': 'Advanced practitioners can explore the De La Riva Guard, leg attacks (Heel Hooks), and complex transitions like the 'berimbolo'.',
            'fail': 'Sorry, I didn\'t understand your BJJ question. Try asking about a position (Guard, Mount, Back) or a submission (Armbar, Kimura).'
        },
        'fr': {
            'garde': 'La Garde est la position fondamentale du BJJ. Vous êtes sur le dos, mais vous utilisez vos jambes pour contrôler la distance et attaquer l\'adversaire. C\'est une position à la fois défensive et offensive.',
            'montée': 'La Montée est une position de contrôle supérieure où vous vous asseyez sur la poitrine de l\'adversaire. Elle offre un contrôle maximal et est idéale pour appliquer des soumissions.',
            'dos': 'Le Contrôle du Dos est la position la plus dominante. Vous sécurisez le dos de l\'adversaire à l\'aide de crochets (avec vos jambes) et permet d\'appliquer l\'Étranglement arrière (RNC), la soumission la plus efficace.',
            'clé de bras': 'La Clé de Bras (Armbar ou Jūji-Gatame) est une technique de soumission qui vise à hyperétendre l\'articulation du coude de l\'adversaire.',
            'kimura': 'La Kimura est une clé d\'épaule qui utilise la prise \'en quatre\' pour faire pivoter l\'épaule de l\'adversaire, causant de la douleur. Elle est très utile depuis le contrôle latéral ou la garde.',
            'terminologie': 'La terminologie clé comprend : 'Gi' (uniforme), 'Ceinture' (Faixa), 'Balayage' (Raspagem), 'Mise au Sol' (Queda) et 'Soumission' (Finalização).',
            'débutant': 'Pour les débutants, concentrez-vous sur la Garde Fermée (Closed Guard), l\'Échappement de Montée et la Clé de Bras (Armbar). Les bases sont le plus important !',
            'avancé': 'Les pratiquants avancés peuvent explorer la Garde De La Riva, les attaques de jambe (Heel Hooks) et les transitions complexes comme la 'berimbolo'.',
            'échec': 'Désolé, je n\'ai pas compris votre question sur le BJJ. Essayez de demander une position (Garde, Montée, Dos) ou une soumission (Clé de Bras, Kimura).'
        },
        'pt': {
            'guarda': 'A Guarda é a posição fundamental do BJJ. Você está de costas, mas usa as pernas para controlar a distância e atacar o oponente. É uma posição defensiva e ofensiva.',
            'montada': 'A Montada é uma posição de controle superior onde você se senta sobre o peito do oponente. Concede controle máximo e é ideal para aplicar finalizações.',
            'costas': 'O Controle das Costas é a posição mais dominante. Você garante as costas do oponente usando ganchos (com as pernas) e permite a aplicação do Mata-Leão (Rear Naked Choke), a finalização mais eficaz.',
            'chave de braço': 'A Chave de Braço (Armbar ou Jūji-Gatame) é uma técnica de finalização que busca hiperextender a articulação do cotovelo do oponente.',
            'kimura': 'A Kimura é uma chave de ombro que usa a pegada de 'quatro' para girar o ombro do oponente, causando dor. É muito útil a partir do controle lateral ou da guarda.',
            'terminologia': 'A terminologia chave inclui: 'Gi' (uniforme), 'Faixa' (cinturão), 'Raspagem' (varrida), 'Queda' (derrubada) e 'Finalização' (submissão).',
            'iniciante': 'Para iniciantes, concentre-se na Guarda Fechada (Closed Guard), no Escape da Montada e na Chave de Braço (Armbar). As bases são o mais importante!',
            'avançado': 'Os praticantes avançados podem explorar a Guarda De La Riva, os ataques de perna (Heel Hooks) e as transições complexas como o 'berimbolo'.',
            'falha': 'Desculpe, não entendi sua pergunta sobre BJJ. Tente perguntar sobre uma posição (Guarda, Montada, Costas) ou uma finalização (Chave de Braço, Kimura).'
        }
    };

    const chatbotToggler = document.getElementById('chatbot-toggler');
    const chatbotBox = document.getElementById('chatbot-box');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotBody = document.getElementById('chatbot-body');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');

    // Función para añadir mensaje al chat
    const appendMessage = (message, sender) => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', sender);
        messageDiv.textContent = message;
        chatbotBody.appendChild(messageDiv);
        // Desplazarse hasta el último mensaje
        chatbotBody.scrollTop = chatbotBody.scrollHeight;
    };

    // Función para actualizar el mensaje de bienvenida
    const updateChatbotWelcomeMessage = (lang) => {
        const welcomeMessage = chatbotBody.querySelector('.chat-message.bot');
        if (welcomeMessage) {
            welcomeMessage.textContent = translations[lang].chatbot_welcome;
        }
    };

    // Función principal de respuesta del Chatbot
    const getChatbotResponse = (userInput, lang) => {
        const kb = bjjKnowledgeBase[lang];
        const normalizedInput = userInput.toLowerCase().trim();

        // Buscar en la base de conocimientos
        for (const key in kb) {
            if (key !== 'fallo' && normalizedInput.includes(key)) {
                return kb[key];
            }
        }
        
        // Sugerencias por nivel (funcionalidad extra)
        if (normalizedInput.includes(kb['principiante'].split('Para principiantes')[0].toLowerCase()) || normalizedInput.includes('nivel')) {
             return kb['principiante'];
        }
        if (normalizedInput.includes(kb['avanzado'].split('Los practicantes avanzados')[0].toLowerCase()) || normalizedInput.includes('avanzado')) {
            return kb['avanzado'];
        }
        
        // Respuesta por defecto
        return kb['fallo'];
    };

    // Manejar el envío de mensajes
    const handleChat = () => {
        const userInput = chatbotInput.value;
        if (userInput === '') return;

        appendMessage(userInput, 'user');
        chatbotInput.value = '';

        setTimeout(() => {
            const response = getChatbotResponse(userInput, currentLanguage);
            appendMessage(response, 'bot');
        }, 500); 
    };

    // Eventos del Chatbot
    chatbotToggler.addEventListener('click', () => {
        chatbotBox.classList.toggle('hidden');
    });

    chatbotClose.addEventListener('click', () => {
        chatbotBox.classList.add('hidden');
    });

    chatbotSend.addEventListener('click', handleChat);

    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleChat();
        }
    });
    
    // ==========================================================
    // 6. FORMULARIO DE CONTACTO (Simulación de éxito)
    // ==========================================================
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', function(e) {
        // Validación básica de campos requeridos (el HTML ya lo hace, pero JS es mejor)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Por favor, rellena todos los campos requeridos.');
            return;
        }

        // Simular éxito del envío (FormSubmit se encargará del envío real)
        // Ya que el `action` de FormSubmit redirige, esta sección solo se usa para validación
        // Si no usas FormSubmit, descomenta las siguientes líneas y comenta la redirección:
        /*
        e.preventDefault(); 
        
        formMessage.textContent = translations[currentLanguage].form_success;
        formMessage.style.display = 'block';
        contactForm.reset();
        setTimeout(() => {
             formMessage.style.display = 'none';
        }, 5000);
        */
        
        // Si usas FormSubmit (como en el HTML), la redirección a una página de gracias es lo más limpio.
        
    });
});
