document.addEventListener('DOMContentLoaded', function() {
    // 1. Ambil elemen-elemen yang diperlukan
    const tombolBuka = document.getElementById('buka-undangan');
    const cover = document.getElementById('cover'); 
    const musik = document.getElementById('musik-latar');

    // 2. FUNGSI TOMBOL BUKA UNDANGAN & FADE-OUT COVER
    if (tombolBuka && cover) {
        tombolBuka.addEventListener('click', function() {
            // Putar musik jika ada
            if (musik) {
                musik.play().catch(error => {
                    console.log("Autoplay diblokir: " + error);
                });
            }
            
            // Lakukan fade-out
            cover.style.opacity = '0';
            setTimeout(() => {
                cover.style.display = 'none';
                // Aktifkan scroll setelah cover hilang
                document.body.style.overflow = 'auto'; 
            }, 500); 
        });
    }


    // 3. INTERSECTION OBSERVER (FADE-IN Konten saat Scroll)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Berhenti mengamati setelah elemen terlihat
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 // Mulai terlihat saat 10% elemen masuk viewport
    });

    // Amati semua section dengan class 'konten-utama'
    document.querySelectorAll('.konten-utama').forEach((section) => {
        observer.observe(section);
    });

    // Awalnya nonaktifkan scroll di body (hanya untuk tampilan cover)
    if (cover) {
        document.body.style.overflow = 'hidden'; 
    }
});
