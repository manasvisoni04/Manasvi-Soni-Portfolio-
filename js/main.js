document.addEventListener('DOMContentLoaded', () => {

    // --- Navigation Scroll Effect ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // We'll add a simple inline style toggle for now
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(10, 10, 15, 0.95)';
        navLinks.style.padding = '2rem 0';
        navLinks.style.backdropFilter = 'blur(10px)';
    });

    // --- Skill Card Modal Logic ---
    const skillCards = document.querySelectorAll('.skill-card');
    const modalOverlay = document.getElementById('skill-modal');
    const closeBtn = document.querySelector('.close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalIcon = document.getElementById('modal-icon');

    const skillData = {
        html: {
            title: 'HTML',
            desc: 'Expert in semantic HTML5 markup, ensuring accessibility and SEO best practices.',
            iconClass: 'fab fa-html5',
            color: '#e34f26'
        },
        css: {
            title: 'CSS',
            desc: 'Advanced CSS including Flexbox, Grid, custom properties, and modern animations.',
            iconClass: 'fab fa-css3-alt',
            color: '#1572b6'
        },
        cpp: {
            title: 'C++',
            desc: 'Strong foundation in object-oriented programming, memory management, and competitive programming.',
            iconClass: 'fas fa-code',
            color: '#00599c'
        },
        java: {
            title: 'Java',
            desc: 'Proficient in Java for backend development and algorithmic problem solving.',
            iconClass: 'fab fa-java',
            color: '#f89820'
        },
        python: {
            title: 'Python',
            desc: 'Extensive experience in Python for scripting, automation, AI, and backend frameworks.',
            iconClass: 'fab fa-python',
            color: '#3776ab'
        },
        sql: {
            title: 'SQL',
            desc: 'Capable of designing complex queries, database normalization, and relational schema management.',
            iconClass: 'fas fa-database',
            color: '#00758f'
        },
        prompt: {
            title: 'Prompt Engineering',
            desc: 'Mastery in crafting precise prompts to extract optimal responses from LLMs, reducing hallucination and guiding context.',
            iconClass: 'fas fa-robot',
            color: '#a020f0'
        },
        agentic: {
            title: 'Agentic AI Mastery',
            desc: 'Deep understanding of agent architectures, enabling autonomous AI to plan, execute, and adapt complex tasks.',
            iconClass: 'fas fa-network-wired',
            color: '#00ffcc'
        },
        msexcel: {
            title: 'Advanced MS Excel',
            desc: 'Proficient in advanced Excel features including complex formulas, PivotTables, data analysis tools, dashboards, and automation for efficient data management and insights.',
            iconClass: 'fab fa-microsoft',
            color: '#00a4ef'
        },
        video: {
            title: 'Video Editing',
            desc: '5 years of professional video editing experience using Filmora, Premiere Pro, and After Effects.',
            iconClass: 'fas fa-video',
            color: '#e0245e'
        },
        powerbi: {
            title: 'Power BI',
            desc: 'Experienced in building interactive dashboards and reports using Power BI, with a focus on data visualization, insights generation, and business-oriented analysis.',
            iconClass: 'fas fa-chart-pie',
            color: '#f2c811'
        },
        uidesign: {
            title: 'UI/UX Design',
            desc: '3 years of mid-level design experience in Figma and Canva, focusing on beautiful aesthetics and intuitive user experiences.',
            iconClass: 'fas fa-pen-nib',
            color: '#f24e1e'
        }
    };

    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            const skillType = card.getAttribute('data-skill');
            const data = skillData[skillType];

            if (data) {
                modalTitle.textContent = data.title;
                modalDesc.textContent = data.desc;
                modalIcon.className = data.iconClass;
                modalIcon.style.color = data.color;

                modalOverlay.classList.add('active');
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
    });

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    });

    // --- On Scroll Animations (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.skill-card, .project-card, .cert-card, .section-title, .qualifications');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

});