/* =====================================================================
   1. KONFIGURASI UTAMA
   ===================================================================== */
const CONFIG = {
  namaUjian   : 'TKA 1945 — Matematika Tingkat Lanjut',
  token       : 'BENJOL',
  durasiMenit : 60,
  acakSoal    : true,
  acakOpsi    : true,
  kunciSimpan : 'tka_exam_v5', 
  fontMin     : 16,
  fontMax     : 26,
  fontAwal    : 18
};

/* =====================================================================
   2. BANK SOAL (25 Soal Limit)
   ===================================================================== */
const BANK_SOAL = [
  { id: 'S1', teks: 'Nilai dari lim x→3 (2x + 5) adalah ....', opsi: [{ kunci: 'A', teks: '6' }, { kunci: 'B', teks: '8' }, { kunci: 'C', teks: '11' }, { kunci: 'D', teks: '13' }, { kunci: 'E', teks: '15' }], jawaban: 'C' },
  { id: 'S2', teks: 'Nilai dari lim x→2 (x² - 4) / (x - 2) adalah ....', opsi: [{ kunci: 'A', teks: '0' }, { kunci: 'B', teks: '2' }, { kunci: 'C', teks: '3' }, { kunci: 'D', teks: '4' }, { kunci: 'E', teks: 'Tak hingga' }], jawaban: 'D' },
  { id: 'S3', teks: 'Nilai dari lim x→∞ (4x² + 3x) / (2x² - x) adalah ....', opsi: [{ kunci: 'A', teks: '0' }, { kunci: 'B', teks: '1' }, { kunci: 'C', teks: '2' }, { kunci: 'D', teks: '4' }, { kunci: 'E', teks: '∞' }], jawaban: 'C' },
  { id: 'S4', teks: 'Nilai dari lim x→0 (sin 4x) / (2x) adalah ....', opsi: [{ kunci: 'A', teks: '0' }, { kunci: 'B', teks: '1/2' }, { kunci: 'C', teks: '1' }, { kunci: 'D', teks: '2' }, { kunci: 'E', teks: '4' }], jawaban: 'D' },
  { id: 'S5', teks: 'Nilai dari lim x→0 (1 - cos 4x) / x² adalah ....', opsi: [{ kunci: 'A', teks: '2' }, { kunci: 'B', teks: '4' }, { kunci: 'C', teks: '8' }, { kunci: 'D', teks: '12' }, { kunci: 'E', teks: '16' }], jawaban: 'C' },
  { id: 'S6', teks: 'Nilai dari lim x→1 (x³ - 1) / (x² - 1) adalah ....', opsi: [{ kunci: 'A', teks: '0' }, { kunci: 'B', teks: '1/2' }, { kunci: 'C', teks: '1' }, { kunci: 'D', teks: '3/2' }, { kunci: 'E', teks: '2' }], jawaban: 'D' },
  { id: 'S7', teks: 'Nilai dari lim x→0 (√(x+9) - 3) / x adalah ....', opsi: [{ kunci: 'A', teks: '1/6' }, { kunci: 'B', teks: '1/3' }, { kunci: 'C', teks: '1/2' }, { kunci: 'D', teks: '1' }, { kunci: 'E', teks: '6' }], jawaban: 'A' },
  { id: 'S8', teks: 'Nilai dari lim x→∞ (√(x² + 3x) - x) adalah ....', opsi: [{ kunci: 'A', teks: '0' }, { kunci: 'B', teks: '1' }, { kunci: 'C', teks: '3/2' }, { kunci: 'D', teks: '3' }, { kunci: 'E', teks: '∞' }], jawaban: 'C' },
  { id: 'S9', teks: 'Nilai dari lim x→2 (2x² - 5x + 2) / (x - 2) adalah ....', opsi: [{ kunci: 'A', teks: '1' }, { kunci: 'B', teks: '2' }, { kunci: 'C', teks: '3' }, { kunci: 'D', teks: '4' }, { kunci: 'E', teks: '5' }], jawaban: 'C' },
  { id: 'S10', teks: 'Nilai dari lim x→∞ (5x³ - 2x²) / (4x³ + x) adalah ....', opsi: [{ kunci: 'A', teks: '0' }, { kunci: 'B', teks: '1' }, { kunci: 'C', teks: '4/5' }, { kunci: 'D', teks: '5/4' }, { kunci: 'E', teks: '∞' }], jawaban: 'D' },
  { id: 'S11', teks: 'Nilai dari lim x→0 (tan 3x) / (sin 2x) adalah ....', opsi: [{ kunci: 'A', teks: '2/3' }, { kunci: 'B', teks: '3/2' }, { kunci: 'C', teks: '1' }, { kunci: 'D', teks: '2' }, { kunci: 'E', teks: '3' }], jawaban: 'B' },
  { id: 'S12', teks: 'Nilai dari lim x→3 (x² - 9) / (√(x+1) - 2) adalah ....', opsi: [{ kunci: 'A', teks: '12' }, { kunci: 'B', teks: '18' }, { kunci: 'C', teks: '24' }, { kunci: 'D', teks: '36' }, { kunci: 'E', teks: '48' }], jawaban: 'C' },
  { id: 'S13', teks: 'Diketahui lim x→2 (x² + ax - 6) / (x - 2) = 5. Nilai a yang memenuhi adalah ....', opsi: [{ kunci: 'A', teks: '-1' }, { kunci: 'B', teks: '0' }, { kunci: 'C', teks: '1' }, { kunci: 'D', teks: '2' }, { kunci: 'E', teks: '3' }], jawaban: 'C' },
  { id: 'S14', teks: 'Nilai dari lim x→0 (2x² - 5x) / (3x² + 4x) adalah ....', opsi: [{ kunci: 'A', teks: '-5/4' }, { kunci: 'B', teks: '-4/5' }, { kunci: 'C', teks: '0' }, { kunci: 'D', teks: '4/5' }, { kunci: 'E', teks: '5/4' }], jawaban: 'A' },
  { id: 'S15', teks: 'Nilai dari lim x→∞ (√(4x² + 2x) - 2x + 3) adalah ....', opsi: [{ kunci: 'A', teks: '1/2' }, { kunci: 'B', teks: '3' }, { kunci: 'C', teks: '7/2' }, { kunci: 'D', teks: '4' }, { kunci: 'E', teks: '∞' }], jawaban: 'C' },
  { id: 'S16', teks: 'Populasi bakteri (P) setelah t jam mengikuti rumus P(t) = (400t² + 500t) / (2t² + 100). Jumlah populasi bakteri saat waktu mendekati tak hingga adalah ....', opsi: [{ kunci: 'A', teks: '100' }, { kunci: 'B', teks: '200' }, { kunci: 'C', teks: '250' }, { kunci: 'D', teks: '400' }, { kunci: 'E', teks: '500' }], jawaban: 'B' },
  { id: 'S17', teks: 'Nilai dari lim x→π/2 (cos x) / (x - π/2) adalah ....', opsi: [{ kunci: 'A', teks: '-1' }, { kunci: 'B', teks: '0' }, { kunci: 'C', teks: '1' }, { kunci: 'D', teks: 'π/2' }, { kunci: 'E', teks: '∞' }], jawaban: 'A' },
  { id: 'S18', teks: 'Nilai dari lim x→0 (x sin 3x) / (1 - cos 6x) adalah ....', opsi: [{ kunci: 'A', teks: '1/6' }, { kunci: 'B', teks: '1/3' }, { kunci: 'C', teks: '1/2' }, { kunci: 'D', teks: '1' }, { kunci: 'E', teks: '3' }], jawaban: 'A' },
  { id: 'S19', teks: 'Diketahui fungsi f(x) = (x² - 4x + 3) / (x - 1) untuk x ≠ 1. Agar f(x) kontinu di x = 1, nilai f(1) haruslah ....', opsi: [{ kunci: 'A', teks: '-3' }, { kunci: 'B', teks: '-2' }, { kunci: 'C', teks: '0' }, { kunci: 'D', teks: '1' }, { kunci: 'E', teks: '3' }], jawaban: 'B' },
  { id: 'S20', teks: 'Nilai dari lim x→4 (3 - √(x+5)) / (x - 4) adalah ....', opsi: [{ kunci: 'A', teks: '-1/6' }, { kunci: 'B', teks: '-1/3' }, { kunci: 'C', teks: '0' }, { kunci: 'D', teks: '1/6' }, { kunci: 'E', teks: '1/3' }], jawaban: 'A' },
  { id: 'S21', teks: 'Nilai dari lim x→0 (sin 5x - sin 3x) / (4x) adalah ....', opsi: [{ kunci: 'A', teks: '1/4' }, { kunci: 'B', teks: '1/2' }, { kunci: 'C', teks: '3/4' }, { kunci: 'D', teks: '1' }, { kunci: 'E', teks: '2' }], jawaban: 'B' },
  { id: 'S22', teks: 'Nilai dari lim x→0 (x² tan 2x) / (sin³ x) adalah ....', opsi: [{ kunci: 'A', teks: '0' }, { kunci: 'B', teks: '1' }, { kunci: 'C', teks: '2' }, { kunci: 'D', teks: '4' }, { kunci: 'E', teks: '∞' }], jawaban: 'C' },
  { id: 'S23', teks: 'Nilai dari lim x→∞ (√(9x² - 6x + 1) - (3x - 2)) adalah ....', opsi: [{ kunci: 'A', teks: '-1' }, { kunci: 'B', teks: '0' }, { kunci: 'C', teks: '1' }, { kunci: 'D', teks: '2' }, { kunci: 'E', teks: '∞' }], jawaban: 'C' },
  { id: 'S24', teks: 'Nilai dari lim x→-2 (x² + x - 2) / (x² - 4) adalah ....', opsi: [{ kunci: 'A', teks: '-3/4' }, { kunci: 'B', teks: '-1/4' }, { kunci: 'C', teks: '1/4' }, { kunci: 'D', teks: '3/4' }, { kunci: 'E', teks: '1' }], jawaban: 'D' },
  { id: 'S25', teks: 'Jika lim x→a (x² - (a+2)x + 2a) / (x - a) = 3, maka nilai a adalah ....', opsi: [{ kunci: 'A', teks: '1' }, { kunci: 'B', teks: '2' }, { kunci: 'C', teks: '3' }, { kunci: 'D', teks: '4' }, { kunci: 'E', teks: '5' }], jawaban: 'E' }
];

/* =====================================================================
   3. LOGIKA APLIKASI
   ===================================================================== */
window.addEventListener('DOMContentLoaded', () => {
  console.log("Aplikasi Ujian Siap!");

  const $ = id => document.getElementById(id);
  const soalById = id => BANK_SOAL.find(s => s.id === id);

  function acak(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function formatMenit(detik) {
    const m = Math.floor(detik / 60);
    const s = detik % 60;
    if (m === 0) return s + ' detik';
    return m + ' menit ' + s + ' detik';
  }

  function duaDigit(n) { return String(n).padStart(2, '0'); }

  function formatMatematika(teks) {
    const regex = /(\([^)]+\)|[a-zA-Z0-9²³√π]+)\s*\/\s*(\([^)]+\)|[a-zA-Z0-9²³√π]+)/g;
    return teks.replace(regex, (match, atas, bawah) => {
      return `<span class="pecahan"><span class="atas">${atas}</span><span class="bawah">${bawah}</span></span>`;
    });
  }

  let state = null;
  let layarAktif = 'login';
  let timerId = null;

  function buatUrutanSoal() {
    const ids = BANK_SOAL.map(s => s.id);
    return CONFIG.acakSoal ? acak(ids) : ids;
  }

  function buatUrutanOpsi() {
    const peta = {};
    BANK_SOAL.forEach(s => {
      const kunci = s.opsi.map(o => o.kunci);
      peta[s.id] = CONFIG.acakOpsi ? acak(kunci) : kunci;
    });
    return peta;
  }

  function stateBaru(nama) {
    const sekarang = Date.now();
    return {
      nama, soalIds: buatUrutanSoal(), opsiUrut: buatUrutanOpsi(), jawaban: {}, 
      status: {}, 
      idx: 0, mulai: sekarang, deadline: sekarang + CONFIG.durasiMenit * 60000, 
      pelanggaran: 0, font: CONFIG.fontAwal, selesai: false
    };
  }

  function simpan() { if (state) { try { localStorage.setItem(CONFIG.kunciSimpan, JSON.stringify(state)); } catch (e) {} } }
  function muatSimpanan() {
    try {
      const raw = localStorage.getItem(CONFIG.kunciSimpan);
      if (!raw) return null;
      const s = JSON.parse(raw);
      return (s && s.nama && Array.isArray(s.soalIds)) ? s : null;
    } catch (e) { return null; }
  }
  function hapusSimpanan() { try { localStorage.removeItem(CONFIG.kunciSimpan); } catch (e) {} }

  function tampilkan(nama) {
    layarAktif = nama;
    document.querySelectorAll('.screen').forEach(el => {
      el.classList.toggle('aktif', el.id === 'screen-' + nama);
    });
    window.scrollTo(0, 0);
  }

  $('btn-login').addEventListener('click', masuk);
  $('input-token').addEventListener('keydown', e => { if (e.key === 'Enter') masuk(); });
  $('input-nama').addEventListener('keydown', e => { if (e.key === 'Enter') $('input-token').focus(); });

  function masuk() {
    const nama = $('input-nama').value.trim();
    const token = $('input-token').value.trim().toUpperCase();
    const err = $('login-error');
    err.hidden = true;

    if (nama.length < 3) {
      err.textContent = 'Nama peserta minimal 3 karakter.';
      err.hidden = false; return;
    }
    if (token !== CONFIG.token) {
      err.textContent = 'Token ujian tidak valid. Periksa kembali.';
      err.hidden = false; return;
    }

    state = stateBaru(nama);
    isiKonfirmasi();
    tampilkan('konfirmasi');
  }

  function isiKonfirmasi() {
    $('k-nama').textContent   = state.nama;
    $('k-ujian').textContent  = CONFIG.namaUjian;
    $('k-jumlah').textContent = state.soalIds.length + ' soal';
    $('k-waktu').textContent  = CONFIG.durasiMenit + ' menit';
    $('cek-tertib').checked   = false;
    $('btn-mulai').disabled   = true;
  }

  $('cek-tertib').addEventListener('change', e => { $('btn-mulai').disabled = !e.target.checked; });
  $('btn-kembali-login').addEventListener('click', () => { state = null; $('input-token').value = ''; tampilkan('login'); });
  $('btn-mulai').addEventListener('click', () => { simpan(); mulaiUjian(false); });

  function mulaiUjian(lanjutan) {
    tampilkan('ujian');
    terapkanFont();
    renderSemua();
    $('ujian-nama').textContent    = CONFIG.namaUjian;
    $('ujian-peserta').textContent = state.nama;
    $('lbl-pelanggaran').textContent = state.pelanggaran;
    $('lbl-pelanggaran').classList.toggle('ada', state.pelanggaran > 0);
    mulaiTimer();
    if (!lanjutan) mintaFullscreen();
    else if (!document.fullscreenElement) tampilkanBanner('Sesi ujian dilanjutkan. Aktifkan kembali mode layar penuh.', true);
  }

  function mulaiTimer() { clearInterval(timerId); perbaruiTimer(); timerId = setInterval(perbaruiTimer, 1000); }
  function perbaruiTimer() {
    const sisa = Math.max(0, Math.floor((state.deadline - Date.now()) / 1000));
    const el = $('timer');
    el.textContent = duaDigit(Math.floor(sisa / 60)) + ':' + duaDigit(sisa % 60);
    el.classList.toggle('danger', sisa <= 300);
    if (sisa <= 0) { clearInterval(timerId); selesaikan(true); }
  }

  function soalAktif() { return soalById(state.soalIds[state.idx]); }
  function renderSemua() { renderSoal(); renderGrid(); renderFooter(); renderRingkasan(); }

  function renderSoal() {
    const q = soalAktif();
    if (!q) return;
    $('soal-nomor').textContent = state.idx + 1;
    $('soal-total').textContent = state.soalIds.length;
    $('soal-teks').innerHTML = formatMatematika(q.teks);

    const daftar = $('opsi-list');
    daftar.innerHTML = '';
    const urutan = state.opsiUrut[q.id] || q.opsi.map(o => o.kunci);

    urutan.forEach(kunci => {
      const opsi = q.opsi.find(o => o.kunci === kunci);
      if (!opsi) return;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'opsi' + (state.jawaban[q.id] === kunci ? ' dipilih' : '');
      btn.dataset.kunci = kunci;
      const k = document.createElement('span'); k.className = 'opsi-kunci'; k.textContent = kunci;
      const t = document.createElement('span'); t.className = 'opsi-teks'; t.textContent = opsi.teks;
      btn.append(k, t);
      btn.addEventListener('click', () => pilihJawaban(q.id, kunci));
      daftar.appendChild(btn);
    });

    document.querySelectorAll('.btn-status').forEach(btn => {
      const status = btn.dataset.status;
      btn.classList.toggle('aktif', state.status[q.id] === status);
    });

    $('soal-panel').scrollTop = 0;
  }

  function pilihJawaban(idSoal, kunci) {
    state.jawaban[idSoal] = kunci;
    simpan();
    document.querySelectorAll('#opsi-list .opsi').forEach(b => b.classList.toggle('dipilih', b.dataset.kunci === kunci));
    renderGrid(); renderRingkasan();
  }

  document.querySelectorAll('.btn-status').forEach(btn => {
    btn.addEventListener('click', () => {
      const status = btn.dataset.status;
      const id = soalAktif().id;
      if (state.status[id] === status) {
        delete state.status[id];
      } else {
        state.status[id] = status;
      }
      simpan(); renderSoal(); renderGrid(); renderRingkasan();
    });
  });

  function renderGrid() {
    const grid = $('grid-soal');
    grid.innerHTML = '';
    state.soalIds.forEach((id, i) => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'gnum'; b.textContent = i + 1;
      if (state.jawaban[id]) b.classList.add('dijawab');
      if (state.status[id]) b.classList.add('st-' + state.status[id]);
      if (i === state.idx) b.classList.add('aktif');
      b.addEventListener('click', () => pergiKe(i));
      grid.appendChild(b);
    });
  }

  function renderFooter() {
    const last = state.idx === state.soalIds.length - 1;
    $('btn-prev').disabled = state.idx === 0;
    const next = $('btn-next');
    next.textContent = last ? 'Selesai' : 'Selanjutnya →';
    next.classList.toggle('btn-success', last);
    next.classList.toggle('btn-primary', !last);
  }

  function renderRingkasan() {
    let dijawab = 0, statusCount = 0;
    state.soalIds.forEach(id => { 
      if (state.jawaban[id]) dijawab++; 
      if (state.status[id]) statusCount++; 
    });
    $('sum-dijawab').textContent = dijawab; 
    $('sum-status').textContent = statusCount;
  }

  function pergiKe(i) {
    if (i < 0 || i >= state.soalIds.length) return;
    state.idx = i; simpan(); renderSoal(); renderGrid(); renderFooter(); tutupNav();
  }

  $('btn-prev').addEventListener('click', () => pergiKe(state.idx - 1));
  $('btn-next').addEventListener('click', () => { if (state.idx === state.soalIds.length - 1) bukaModalSelesai(); else pergiKe(state.idx + 1); });
  
  $('btn-nav-toggle').addEventListener('click', () => { $('nav-panel').classList.toggle('terbuka'); });
  $('btn-tutup-nav').addEventListener('click', tutupNav);
  function tutupNav() { $('nav-panel').classList.remove('terbuka'); }

  function terapkanFont() {
    const f = state ? (state.font || CONFIG.fontAwal) : CONFIG.fontAwal;
    document.documentElement.style.setProperty('--font-soal', f + 'px');
    $('btn-font-minus').disabled = f <= CONFIG.fontMin;
    $('btn-font-plus').disabled  = f >= CONFIG.fontMax;
  }
  function ubahFont(delta) {
    if (!state) return;
    state.font = Math.min(CONFIG.fontMax, Math.max(CONFIG.fontMin, (state.font || CONFIG.fontAwal) + delta));
    terapkanFont(); simpan();
  }
  $('btn-font-minus').addEventListener('click', () => ubahFont(-1));
  $('btn-font-plus').addEventListener('click', () => ubahFont(1));

  function bukaModalSelesai() {
    let dijawab = 0, statusCount = 0;
    state.soalIds.forEach(id => { 
      if (state.jawaban[id]) dijawab++; 
      if (state.status[id]) statusCount++;
    });
    $('rekap-belum').textContent   = state.soalIds.length - dijawab;
    $('rekap-tanda').textContent   = statusCount;
    $('rekap-dijawab').textContent = dijawab;
    $('modal-selesai').hidden = false;
  }
  function tutupModalSelesai() { $('modal-selesai').hidden = true; }
  $('btn-batal-selesai').addEventListener('click', tutupModalSelesai);
  $('btn-konfirmasi-selesai').addEventListener('click', () => { tutupModalSelesai(); selesaikan(false); });

  function selesaikan(otomatis) {
    if (!state || state.selesai) return;
    state.selesai = true; clearInterval(timerId);
    const total = state.soalIds.length;
    const dijawab = state.soalIds.filter(id => state.jawaban[id]).length;
    const terpakai = Math.max(0, Math.round((Date.now() - state.mulai) / 1000));
    hapusSimpanan();
    
    $('h-nama').textContent = state.nama;
    $('h-ujian').textContent = CONFIG.namaUjian;
    $('h-dijawab').textContent = dijawab + ' dari ' + total + ' soal';
    $('h-waktu').textContent = formatMenit(terpakai);
    $('h-pelanggaran').textContent = state.pelanggaran + ' catatan';
    $('selesai-note').textContent = otomatis ? 'Waktu ujian habis. Jawaban dikirim otomatis.' : 'Jawaban Anda telah berhasil dikirim.';
    tampilkan('selesai');
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
  }

  $('btn-ke-login').addEventListener('click', () => {
    state = null; $('input-nama').value = ''; $('input-token').value = ''; $('login-error').hidden = true; tampilkan('login');
  });

  function mintaFullscreen() {
    const el = document.documentElement;
    if (!document.fullscreenElement && el.requestFullscreen) {
      el.requestFullscreen().catch(() => { tampilkanBanner('Mode layar penuh diperlukan.', true); });
    }
  }

  document.addEventListener('fullscreenchange', () => {
    if (layarAktif !== 'ujian' || !state || state.selesai) return;
    if (!document.fullscreenElement) catatPelanggaran('Anda keluar dari mode layar penuh.'); else sembunyikanBanner();
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden && layarAktif === 'ujian' && state && !state.selesai) catatPelanggaran('Anda berpindah tab.');
  });

  function catatPelanggaran(pesan) {
    state.pelanggaran++; simpan();
    $('lbl-pelanggaran').textContent = state.pelanggaran;
    $('lbl-pelanggaran').classList.add('ada');
    tampilkanBanner(pesan + ' Pelanggaran: ' + state.pelanggaran + '.', !document.fullscreenElement);
  }

  function tampilkanBanner(pesan, butuhFullscreen) {
    $('banner-text').textContent = pesan;
    const btn = $('btn-banner');
    if (butuhFullscreen) { btn.textContent = 'Aktifkan Layar Penuh'; btn.onclick = () => mintaFullscreen(); } 
    else { btn.textContent = 'Tutup'; btn.onclick = sembunyikanBanner; }
    $('banner').hidden = false;
  }
  function sembunyikanBanner() { $('banner').hidden = true; }

  ['contextmenu', 'copy', 'cut', 'paste'].forEach(evt => {
    document.addEventListener(evt, e => { if (layarAktif === 'ujian') e.preventDefault(); });
  });

  const tersimpan = muatSimpanan();
  if (tersimpan && !tersimpan.selesai) { 
    state = tersimpan; 
    mulaiUjian(true); 
  } else { 
    if (tersimpan && tersimpan.selesai) hapusSimpanan(); 
    tampilkan('login'); 
  }

});