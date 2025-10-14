document.addEventListener('DOMContentLoaded', function() {
    const tombolBuka = document.getElementById('buka-undangan');
    const cover = document.getElementById('cover'); 
    const musik = document.getElementById('musik-latar');

    // =========================================================
    // 1. FUNGSI TOMBOL BUKA UNDANGAN & FADE-OUT COVER
    // =========================================================
    tombolBuka.addEventListener('click', function() {
        // Memainkan Musik
        if (musik) {
            musik.play().catch(error => {
                console.log("Autoplay diblokir: " + error);
            });
        }
        
        // Transisi Cover Fade-out
        cover.style.opacity = '0';
        
        // Menghilangkan Cover setelah transisi selesai (500ms)
        setTimeout(() => {
            cover.style.display = 'none';
        }, 500); 
    });


    // =========================================================
    // 2. INTERSECTION OBSERVER (FADE-IN Konten saat Scroll - Fitur Mahal)
    // =========================================================
    // Observer ini memicu kelas 'visible' pada elemen yang memiliki kelas 'konten-utama'
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Tambahkan kelas 'visible' untuk memicu transisi fade-in (dari style.css)
                entry.target.classList.add('visible');
                // Hentikan observer setelah elemen muncul
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 // Pemicu saat 10% elemen terlihat di layar
    });

    // Terapkan observer ke semua bagian yang memiliki kelas 'konten-utama'
    document.querySelectorAll('.konten-utama').forEach((section) => {
        observer.observe(section);
    });
});
