/* =========================================================
   PORTFOLIO MAIN JAVASCRIPT - FAJAR SAPUTRA
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    // 1. NAVBAR SCROLL EFFECT
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 2. MOBILE MENU TOGGLE
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
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

        const navLinks = document.querySelectorAll(".nav-menu a:not(#lang-switch-btn)");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("show");
                const icon = menuToggle.querySelector("i");
                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }
            });
        });
    }

    // 3. ACTIVE NAVIGATION HIGHLIGHT ON SCROLL
    const sections = document.querySelectorAll("section[id]");
    const navLinksAll = document.querySelectorAll(".nav-menu a:not(#lang-switch-btn)");
    
    window.addEventListener("scroll", function () {
        let current = "";
        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinksAll.forEach(function (link) {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });

    // 4. SCROLL REVEAL ANIMATION
    const revealElements = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });

    // 5. BACK TO TOP BUTTON
    const backToTop = document.querySelector(".back-to-top");
    if (backToTop) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 500) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        });

        backToTop.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // 6. MODAL / POP-UP DETAIL LAYANAN
    const openModalBtns = document.querySelectorAll('.open-modal-btn');
    const closeBtns = document.querySelectorAll('.close-modal');

    openModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
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

    // 7. AUTOMATIC FULL LANGUAGE & CURRENCY SWITCHER (ID / EN)
    const translations = {
        id: {
            navHome: "Home",
            navAbout: "About",
            navSkills: "Skills",
            navServices: "Services",
            navProjects: "Projects",
            navContact: "Contact",
            heroDesc: "Saya adalah mahasiswa yang memiliki ketertarikan pada dunia web development dan teknologi. Saya senang membuat website yang modern, responsive, dan mudah digunakan.",
            btnProjects: "View My Projects",
            btnContact: "Contact Me",
            statProjects: "Projects",
            statTech: "Technologies",
            statYears: "Years Learning",
            aboutTitle: "Mengenal Saya",
            aboutP1: "Halo, saya Fajar Saputra. Saya adalah mahasiswa yang memiliki ketertarikan pada dunia web development dan teknologi.",
            aboutP2: "Saya senang mempelajari bagaimana sebuah website dirancang, dikembangkan, dan dibuat agar memiliki tampilan yang modern, responsive, serta mudah digunakan.",
            aboutP3: "Selama belajar web development, saya telah mengerjakan beberapa project seperti website sekolah, website UMKM, website ekspedisi, dan berbagai project berbasis HTML, CSS, JavaScript, PHP, dan MySQL.",
            infoName: "Nama",
            infoRole: "Role",
            infoFocus: "Focus",
            btnContactHub: "Hubungi Saya",
            btnSeeSkills: "Lihat Skills",
            skillsTitle: "Teknologi yang Saya Pelajari",
            skillsDesc: "Beberapa teknologi dan tools yang saya gunakan dalam proses belajar dan membuat project website.",
            skillHtml: "Digunakan untuk membangun struktur dan elemen dasar sebuah website.",
            skillCss: "Digunakan untuk membuat tampilan website menjadi modern, menarik, dan responsive.",
            skillJs: "Digunakan untuk membuat website menjadi interaktif dan memiliki berbagai fungsi.",
            skillPhp: "Digunakan untuk membangun website dinamis dan sistem berbasis server.",
            skillMysql: "Digunakan untuk menyimpan dan mengelola data pada aplikasi website.",
            skillGit: "Digunakan untuk version control, menyimpan source code, dan mengelola project.",
            servicesTitle: "Jasa Pembuatan Website Profesional & Super Cepat untuk Bisnis Anda",
            servicesDesc: "Bantu bisnis Anda lebih kredibel di internet dengan website standar tinggi. Pilih layanan yang paling sesuai dengan target pasar Anda.",
            sp1Title: "Tanpa Plugin Berat",
            sp1Desc: "Dibuat dengan koding murni (HTML/CSS/JS) sehingga loading website sangat kilat.",
            sp2Title: "100% Mobile-Friendly",
            sp2Desc: "Tampilan dipastikan rapi saat dibuka lewat smartphone klien maupun calon pembeli.",
            sp3Title: "Harga Transparan",
            sp3Desc: "Tidak ada biaya tersembunyi. Investasi yang sangat pas untuk kemajuan bisnis Anda.",
            
            // Harga & Unit ID
            priceStarter: "Rp 300rb",
            priceCompany: "Rp 700rb",
            priceStart: "Mulai",
            priceCustom: "Rp 1,5jt",
            priceMaint: "Rp 150rb",
            projUnit: "/ project",
            maintUnit: "/ bulan",

            pkg1Desc: "Fokus pada penjualan! Sangat cocok untuk promosi 1 produk spesifik, event, atau kampanye iklan.",
            pkg1f1: "1 Halaman panjang fokus konversi",
            pkg1f2: "Desain kustom sesuai identitas brand",
            pkg1f3: "Integrasi tombol Chat WhatsApp",
            pkg1f4: "Loading kilat (< 3 detik)",
            btnDetail: "Lihat Detail Lengkap",
            popularBadge: "Paling Diminati",
            pkg2Desc: "Tingkatkan kredibilitas & kepercayaan klien. Ideal untuk PT, CV, instansi, atau kafe elit.",
            pkg2f1: "3–5 Halaman Profil Detail",
            pkg2f2: "Fitur 2 Bahasa (Indo & Inggris)",
            pkg2f3: "Formulir kontak & Google Maps terintegrasi",
            pkg2f4: "Optimasi SEO Dasar untuk Google",
            pkg3Desc: "Solusi kustom untuk digitalisasi sistem operasional, booking tiket, atau manajemen pendataan.",
            pkg3f1: "Database & Sistem Alur Kerja Khusus",
            pkg3f2: "Dukungan Multi-Bahasa (ID/EN)",
            pkg3f3: "Panel Admin (Dashboard) interaktif",
            pkg3f4: "Pemrograman server (PHP/MySQL)",
            maintTitle: "Jasa Perawatan (Maintenance) Website",
            maintDesc: "Anda fokus urus bisnis, biar saya yang mengurus teknis. Pastikan website Anda selalu aktif, aman, dan kontennya ter-update tanpa perlu pusing mikirin server dan kodingan.",
            maintF1: "Update Teks/Gambar Rutin",
            maintF2: "Perpanjangan Server Hosting & Domain",
            maintF3: "Backup Data & Pemantauan Keamanan",
            btnSubscribe: "WhatsApp",
            projectsTitle: "Project Saya",
            projectsDesc: "Beberapa website yang telah saya buat selama belajar dan mengembangkan kemampuan di bidang web development.",
            proj1Desc: "Website profil sekolah dengan tampilan modern untuk memperkenalkan sekolah, program pendidikan, informasi siswa, dan sistem registrasi.",
            proj2Desc: "Website UMKM untuk memperkenalkan produk makanan khas Cirebon, menampilkan katalog produk, galeri, informasi usaha, dan pemesanan melalui WhatsApp.",
            proj3Desc: "Gunung Siang Arjuna Mabes adalah website landing page dan sistem booking kursi via online/digital modern yang dirancang khusus untuk layanan transportasi bus rute Kuningan – Jakarta (Mangga Besar).",
            btnWorkTogether: "Let's Work Together",
            contactTitle: "Mari Berkolaborasi",
            contactDesc: "Jika kamu memiliki project atau ingin berdiskusi mengenai website, silakan hubungi saya.",
            contactInfoTitle: "Hubungi Saya",
            contactInfoDesc: "Saya terbuka untuk berdiskusi mengenai project website, pengembangan web, maupun kesempatan untuk belajar dan berkembang bersama.",
            formName: "Nama",
            formEmail: "Email",
            formMessage: "Pesan",
            formSubmit: "Kirim Pesan",
            footerText: "Built with HTML, CSS & JavaScript."
        },
        en: {
            navHome: "Home",
            navAbout: "About",
            navSkills: "Skills",
            navServices: "Services",
            navProjects: "Projects",
            navContact: "Contact",
            heroDesc: "I am a student with a keen interest in web development and technology. I love building modern, responsive, and user-friendly websites.",
            btnProjects: "View My Projects",
            btnContact: "Contact Me",
            statProjects: "Projects",
            statTech: "Technologies",
            statYears: "Years Learning",
            aboutTitle: "About Me",
            aboutP1: "Hello, I am Fajar Saputra. I am a student with a keen interest in web development and technology.",
            aboutP2: "I love learning how a website is designed, developed, and built to look modern, responsive, and user-friendly.",
            aboutP3: "While learning web development, I have worked on several projects such as school websites, UMKM websites, logistics websites, and various projects based on HTML, CSS, JavaScript, PHP, and MySQL.",
            infoName: "Name",
            infoRole: "Role",
            infoFocus: "Focus",
            btnContactHub: "Contact Me",
            btnSeeSkills: "View Skills",
            skillsTitle: "Technologies I Learn",
            skillsDesc: "Some of the technologies and tools I use during the learning process and in building website projects.",
            skillHtml: "Used to build the structure and basic elements of a website.",
            skillCss: "Used to make the website design modern, attractive, and responsive.",
            skillJs: "Used to make websites interactive and functional.",
            skillPhp: "Used to build dynamic websites and server-based systems.",
            skillMysql: "Used to store and manage data for website applications.",
            skillGit: "Used for version control, storing source code, and managing projects.",
            servicesTitle: "Professional & Super Fast Website Development Services for Your Business",
            servicesDesc: "Help your business gain credibility on the internet with high-standard websites. Choose the service that best fits your target market.",
            sp1Title: "No Heavy Plugins",
            sp1Desc: "Built with pure coding (HTML/CSS/JS) ensuring ultra-fast website loading times.",
            sp2Title: "100% Mobile-Friendly",
            sp2Desc: "Ensured neat and clean displays when opened via clients' or potential buyers' smartphones.",
            sp3Title: "Transparent Pricing",
            sp3Desc: "No hidden fees. A very fitting investment for your business growth.",
            
            // Harga & Unit EN (USD)
            priceStarter: "$20",
            priceCompany: "$45",
            priceStart: "Starts at",
            priceCustom: "$100",
            priceMaint: "$10",
            projUnit: "/ project",
            maintUnit: "/ month",

            pkg1Desc: "Focus on sales! Highly suitable for promoting 1 specific product, event, or advertising campaign.",
            pkg1f1: "1 Long conversion-focused page",
            pkg1f2: "Custom design matching brand identity",
            pkg1f3: "WhatsApp chat button integration",
            pkg1f4: "Lightning-fast loading (< 3 seconds)",
            btnDetail: "View Full Details",
            popularBadge: "Most Popular",
            pkg2Desc: "Boost client credibility & trust. Ideal for PT, CV, institutions, or elite cafes.",
            pkg2f1: "Up to 5 Detailed Profile Pages",
            pkg2f2: "Bilingual Feature (Indo & English)",
            pkg2f3: "Integrated contact form & Google Maps",
            pkg2f4: "Basic SEO optimization for Google",
            pkg3Desc: "Custom solutions for operational system digitalization, ticket booking, or data management.",
            pkg3f1: "Custom Database & Workflow System",
            pkg3f2: "Multi-Language Support (ID/EN)",
            pkg3f3: "Interactive Admin Panel (Dashboard)",
            pkg3f4: "Server programming (PHP/MySQL)",
            maintTitle: "Website Maintenance Services",
            maintDesc: "You focus on running your business, let me handle the technical side. Ensure your website is always active, secure, and updated without worrying about servers and code.",
            maintF1: "Routine Text/Image Updates",
            maintF2: "Hosting Server & Domain Renewal",
            maintF3: "Data Backup & Security Monitoring",
            btnSubscribe: "WhatsApp",
            projectsTitle: "My Projects",
            projectsDesc: "Several websites I have built while learning and developing my skills in web development.",
            proj1Desc: "A modern school profile website to introduce the school, educational programs, student information, and registration system.",
            proj2Desc: "An UMKM website to showcase Cirebon's signature food products, product catalog, gallery, business info, and WhatsApp ordering.",
            proj3Desc: "Gunung Siang Arjuna Mabes is a modern landing page and online seat booking system specifically designed for the Kuningan – Jakarta (Mangga Besar) bus route transportation service.",
            btnWorkTogether: "Let's Work Together",
            contactTitle: "Let's Collaborate",
            contactDesc: "If you have a project or want to discuss about websites, feel free to contact me.",
            contactInfoTitle: "Get in Touch",
            contactInfoDesc: "I am open to discussing website projects, web development, and opportunities to learn and grow together.",
            formName: "Name",
            formEmail: "Email",
            formMessage: "Message",
            formSubmit: "Send Message",
            footerText: "Built with HTML, CSS & JavaScript."
        }
    };

    const langBtn = document.getElementById("lang-switch-btn");
    let currentLang = localStorage.getItem("portfolio_lang") || "id";

    function updateLanguage(lang) {
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][key]) {
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

});
