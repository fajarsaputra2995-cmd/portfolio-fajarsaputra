document.addEventListener("DOMContentLoaded", function () {

    // 1. MOBILE MENU TOGGLE
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("show");
            const icon = menuToggle.querySelector("i");
            if (navMenu.classList.contains("show")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        });

        document.querySelectorAll(".nav-menu a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("show");
                if(menuToggle.querySelector("i")) {
                    menuToggle.querySelector("i").className = "fa-solid fa-bars";
                }
            });
        });
    }

    // 2. DARK/LIGHT MODE TOGGLE
    const themeToggleBtn = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;
    
    if (themeToggleBtn) {
        const themeIcon = themeToggleBtn.querySelector("i");
        
        // Ambil dari LocalStorage
        const currentTheme = localStorage.getItem("fajar_theme") || "dark";
        htmlElement.setAttribute("data-theme", currentTheme);
        updateThemeIcon(currentTheme);

        themeToggleBtn.addEventListener("click", () => {
            let newTheme = htmlElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
            htmlElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("fajar_theme", newTheme);
            updateThemeIcon(newTheme);
        });

        function updateThemeIcon(theme) {
            if (theme === "light") {
                themeIcon.className = "fa-solid fa-moon";
            } else {
                themeIcon.className = "fa-solid fa-sun";
            }
        }
    }

    // 3. LANGUAGE SWITCHER (INDO / ENG)
    const langBtn = document.getElementById("lang-switch-btn");
    let currentLang = localStorage.getItem("portfolio_lang") || "id";

    // Kamus Terjemahan
    const translations = {
        id: {
            navHome: "Home", navServices: "Layanan", navWorkflow: "Cara Kerja", navPortfolio: "Portfolio", navPricing: "Harga", btnStart: "Mulai Project",
            heroTitle: "Membantu Bisnis Anda Memiliki Website Profesional",
            heroDesc: "Saya membangun website modern, cepat, dan responsif sesuai kebutuhan bisnis Anda — mulai dari Company Profile, Web UMKM, hingga Sistem Web Kustom.",
            btnConsult: "🚀 Konsultasi Gratis", btnViewWork: "💼 Lihat Portfolio", heroTech: "Teknologi yang digunakan:",
            featSub: "NILAI TAMBAH", featTitle: "Kenapa Memilih Layanan Saya?",
            feat1Title: "Desain Kustom", feat1Desc: "Website dibangun khusus menyesuaikan identitas dan target pasar bisnis Anda.",
            feat2Title: "100% Responsif", feat2Desc: "Tampilan rapi dan optimal diakses dari HP, tablet, maupun komputer.",
            feat3Title: "Performa Cepat", feat3Desc: "Kode yang bersih dan ringan memastikan website Anda loading tanpa lemot.",
            feat4Title: "Support Maintenance", feat4Desc: "Dukungan teknis dan update konten rutin langsung via WhatsApp.",
            srvSub: "LAYANAN SAYA", srvTitle: "Apa Yang Bisa Saya Bantu?", srvDesc: "Spesialisasi saya dalam membantu digitalisasi dan pertumbuhan bisnis Anda di internet.",
            srv1Title: "Web Development", srv1Desc: "Pembuatan website dari awal dengan kode bersih dan performa tinggi.",
            srv2Title: "Redesign Website", srv2Desc: "Memperbarui tampilan website lama Anda menjadi lebih modern dan responsif.",
            srv3Title: "Website Maintenance", srv3Desc: "Jasa pengelolaan website bulanan, termasuk backup data dan penjagaan keamanan.",
            workSub: "PROSES KERJA", workTitle: "Bagaimana Saya Bekerja?", workDesc: "Proses transparan dari awal diskusi hingga website Anda siap diluncurkan.",
            work1Title: "Konsultasi", work1Desc: "Diskusi kebutuhan, target, dan budget project Anda via WhatsApp atau Google Meet.",
            work2Title: "Desain & Planning", work2Desc: "Pembuatan struktur halaman, pemilihan warna, dan pengumpulan konten.",
            work3Title: "Development", work3Desc: "Proses pengkodean website menjadi sistem yang interaktif dan dinamis.",
            work4Title: "Testing & Launching", work4Desc: "Pengecekan akhir, pengaturan hosting, lalu website online dan siap digunakan.",
            projTitle: "Project Pilihan", projDesc: "Beberapa solusi digital yang telah saya kembangkan.", filterAll: "Semua", btnCase: "Lihat Case Study",
            prcSub: "INVESTASI", prcTitle: "Paket Layanan Website", prcDesc: "Harga transparan yang menyesuaikan dengan skala kebutuhan bisnis Anda.",
            cntSub: "TERTARIK BEKERJA SAMA?", cntTitle: "Ceritakan Kebutuhan Project Anda.", cntDesc: "Saya siap membantu Anda merealisasikan website yang berfungsi maksimal untuk bisnis Anda."
        },
        en: {
            navHome: "Home", navServices: "Services", navWorkflow: "Workflow", navPortfolio: "Portfolio", navPricing: "Pricing", btnStart: "Start Project",
            heroTitle: "Helping Your Business Build a Professional Website",
            heroDesc: "I build modern, fast, and responsive websites tailored to your business needs — from Company Profiles and SME sites to Custom Web Systems.",
            btnConsult: "🚀 Free Consultation", btnViewWork: "💼 View Portfolio", heroTech: "Technologies used:",
            featSub: "VALUE ADDED", featTitle: "Why Choose My Services?",
            feat1Title: "Custom Design", feat1Desc: "Websites built specifically to match your brand identity and target market.",
            feat2Title: "100% Responsive", feat2Desc: "Neat and optimal display across smartphones, tablets, and computers.",
            feat3Title: "Fast Performance", feat3Desc: "Clean and lightweight code ensures your website loads without lag.",
            feat4Title: "Maintenance Support", feat4Desc: "Technical support and routine content updates directly via WhatsApp.",
            srvSub: "MY SERVICES", srvTitle: "How Can I Help You?", srvDesc: "My specialty is helping the digitalization and growth of your business on the internet.",
            srv1Title: "Web Development", srv1Desc: "Building websites from scratch with clean code and high performance.",
            srv2Title: "Website Redesign", srv2Desc: "Updating your old website to look more modern and responsive.",
            srv3Title: "Website Maintenance", srv3Desc: "Monthly website management services, including backups and security.",
            workSub: "WORK PROCESS", workTitle: "How Do I Work?", workDesc: "A transparent process from initial discussion until your website is ready to launch.",
            work1Title: "Consultation", work1Desc: "Discuss your project needs, targets, and budget via WhatsApp or Google Meet.",
            work2Title: "Design & Planning", work2Desc: "Creating page structures, selecting colors, and gathering assets/content.",
            work3Title: "Development", work3Desc: "The coding process turns your website into an interactive and dynamic system.",
            work4Title: "Testing & Launch", work4Desc: "Final checks, hosting setup, and your website goes online and is ready to use.",
            projTitle: "Featured Projects", projDesc: "Several digital solutions I have developed.", filterAll: "All", btnCase: "View Case Study",
            prcSub: "INVESTMENT", prcTitle: "Website Service Packages", prcDesc: "Transparent pricing that scales with your business needs.",
            cntSub: "INTERESTED IN WORKING TOGETHER?", cntTitle: "Tell Me About Your Project.", cntDesc: "I am ready to help you realize a website that functions optimally for your business."
        }
    };

    function updateLanguage(lang) {
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            // Khusus untuk bagian Title (h1) di Hero, kita retain span tag di dalamnya
            if(key === "heroTitle" && translations[lang][key]) {
                if(lang === "id") {
                    el.innerHTML = `Membantu Bisnis Anda Memiliki <span>Website Profesional</span>`;
                } else {
                    el.innerHTML = `Helping Your Business Build a <span>Professional Website</span>`;
                }
            } else if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        
        if (langBtn) {
            langBtn.textContent = lang === "id" ? "EN" : "ID";
        }
        localStorage.setItem("portfolio_lang", lang);
    }

    if (langBtn) {
        langBtn.addEventListener("click", (e) => {
            e.preventDefault();
            currentLang = currentLang === "id" ? "en" : "id";
            updateLanguage(currentLang);
        });
        updateLanguage(currentLang); 
    }

    // 4. PROJECT FILTER
    const filterBtns = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".projects-grid .project-card");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            projectCards.forEach(card => {
                if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
                    card.style.display = "block";
                    setTimeout(() => { card.style.opacity = "1"; }, 50);
                } else {
                    card.style.opacity = "0";
                    setTimeout(() => { card.style.display = "none"; }, 300);
                }
            });
        });
    });

    // 5. MODAL / CASE STUDY POP-UP
    const openCaseStudyBtns = document.querySelectorAll('.open-case-study');
    const closeBtns = document.querySelectorAll('.close-modal');

    openCaseStudyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = btn.getAttribute('data-target');
            const modal = document.getElementById(targetId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; 
            }
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal-overlay');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto'; 
            }
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            e.target.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // 6. SCROLL REVEAL ANIMATION
    const revealElements = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // 7. ACTIVE NAVIGATION HIGHLIGHT ON SCROLL
    const sections = document.querySelectorAll("section[id]");
    const navLinksAll = document.querySelectorAll(".nav-menu a:not(#theme-toggle):not(#lang-switch-btn)");
    
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinksAll.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });

});
