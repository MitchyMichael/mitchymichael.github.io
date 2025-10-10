// --- Helpers ---------------------------------------------------------------
function onReady(fn) {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", fn, { once: true });
    } else {
        fn();
    }
}

// Throttle scroll pakai rAF biar halus & hemat performa
function makeScrollHandler(handler) {
    let ticking = false;
    return function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handler();
                ticking = false;
            });
            ticking = true;
        }
    };
}

// --- Main ------------------------------------------------------------------
onReady(() => {
    const navbar = document.getElementById("navbar");
    const navbarTitle = document.getElementById("navbar_title");

    // Guard jika elemen tidak ada
    if (!navbar || !navbarTitle) return;

    const applyNavbarState = () => {
        const scrolled = window.scrollY > 10;

        // Background & shadow
        navbar.classList.toggle("bg-gray-50", scrolled);
        navbar.classList.toggle("shadow", scrolled);
        navbar.classList.toggle("bg-transparent", !scrolled);

        // Warna teks navbar (white saat di hero)
        navbar.classList.toggle("text-white", !scrolled);

        // Warna judul
        navbarTitle.classList.toggle("text-brand", scrolled);
        navbarTitle.classList.toggle("text-white", !scrolled);
    };

    // Jalankan saat load pertama & saat scroll
    applyNavbarState();
    window.addEventListener("scroll", makeScrollHandler(applyNavbarState), { passive: true });

    // --- Auto year di footer ---
    const yearEl = document.getElementById("pl-year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});
