/* Konfigurasi situs TheraHub */
/* Isi nomor WhatsApp resmi TheraHub (format 62xxxxxxxxxx). Selama kosong, tombol WA mengarah ke halaman kontak. */
var WA_NUMBER = '';

(function(){
  if (!WA_NUMBER) return;
  document.querySelectorAll('[data-wa]').forEach(function(a){
    a.href = 'https://wa.me/' + WA_NUMBER + '?text=' + a.getAttribute('data-wa');
    a.target = '_blank'; a.rel = 'noopener';
  });
  document.querySelectorAll('[data-wa-text]').forEach(function(el){
    el.textContent = 'WhatsApp +' + WA_NUMBER;
  });
})();
