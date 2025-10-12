document.addEventListener('DOMContentLoaded', function() {
    const tombolBuka = document.getElementById('buka-undangan');
    const musik = document.getElementById('musik-latar');

    // Mencegah Autoplay diblokir browser, musik diputar saat tombol diklik
    tombolBuka.addEventListener('click', function() {
        if (musik) {
            musik.play().catch(error => {
                // Tangani error jika gagal autoplay
                console.log("Autoplay diblokir: " + error);
            });
        }
        // Sembunyikan cover dan tampilkan undangan utama (jika menggunakan cover terpisah)
        // Contoh: document.getElementById('cover').style.display = 'none';
    });
});
// Anda dapat menambahkan fungsi Countdown Timer di sini