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

        // Tutup menu saat link diklik
        document.querySelectorAll(".nav-menu a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("show");
                menuToggle.querySelector("i").className = "fa-solid fa-bars";
            });
        });
    }

    // 2. DARK/LIGHT MODE TOGGLE
    const themeToggleBtn = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;
    const themeIcon = themeToggleBtn.querySelector("i");

    // Cek preferensi dari LocalStorage
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

    // 3. PROJECT FILTER
    const filterBtns = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".projects-grid .project-card");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Hapus class active dari semua tombol
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            projectCards.forEach(card => {
                if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
                    card.style.display = "block";
                    // Sedikit animasi fade-in
                    setTimeout(() => { card.style.opacity = "1"; }, 50);
                } else {
                    card.style.opacity = "0";
                    setTimeout(() => { card.style.display = "none"; }, 300);
                }
            });
        });
    });

    // 4. MODAL / CASE STUDY POP-UP
    const openCaseStudyBtns = document.querySelectorAll('.open-case-study');
    const closeBtns = document.querySelectorAll('.close-modal');

    openCaseStudyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // Mencegah scroll ke atas
            const targetId = btn.getAttribute('data-target');
            const modal = document.getElementById(targetId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Kunci scroll background
            }
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal-overlay');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto'; // Buka kembali scroll
            }
        });
    });

    // Tutup modal jika user klik area luar konten modal
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            e.target.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // 5. SCROLL REVEAL ANIMATION
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

    // 6. ACTIVE NAVIGATION HIGHLIGHT ON SCROLL
    const sections = document.querySelectorAll("section[id]");
    const navLinksAll = document.querySelectorAll(".nav-menu a:not(#theme-toggle)");
    
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
