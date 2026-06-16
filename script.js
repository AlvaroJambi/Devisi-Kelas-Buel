const storageKey = "devisiKelasBuelData";

const defaultData = {
  metrics: {
    studentCount: 128
  },
  profile: {
    nama: "Guru Hebat",
    nip: "19900101 201503 2 002",
    nuptk: "1234 5676 7890 0003",
    jabatan: "Guru Kelas",
    mapel: "Kelas 6",
    email: "guruhebat@sekolah.id"
  },
  attendance: {
    hadir: 25,
    sakit: 1,
    izin: 1,
    alpha: 1
  },
  announcements: [
    { title: "Rapat Guru Bulanan", meta: "20 Juni 2025" },
    { title: "Pengumpulan Perangkat Ajar", meta: "25 Juni 2025" },
    { title: "Penilaian Akhir Semester", meta: "01 Juli 2025" },
    { title: "Kegiatan Class Meeting", meta: "10 Juli 2025" }
  ],
  quickItems: [
    { title: "Data Guru", meta: "Kelola data guru dengan mudah", section: "guru", icon: "&#128105;" },
    { title: "Data Siswa", meta: "Kelola data siswa dengan mudah", section: "siswa", icon: "&#128101;" },
    { title: "Absensi Siswa", meta: "Absensi digital praktis & akurat", section: "absensi", icon: "&#9745;" },
    { title: "Jurnal Mengajar", meta: "Catat kegiatan pembelajaran harian", section: "jurnal", icon: "&#128214;" },
    { title: "Modul Ajar", meta: "Upload & kelola modul ajar", section: "modul", icon: "&#128193;" },
    { title: "Asesmen", meta: "Penilaian lengkap & rekap otomatis", section: "asesmen", icon: "&#128203;" },
    { title: "Perangkat Ajar", meta: "Semua perangkat ajar dalam satu tempat", section: "perangkat", icon: "&#128218;" },
    { title: "Galeri Media", meta: "Simpan foto & video kegiatan kelas", section: "galeri", icon: "&#128247;" },
    { title: "Catatan Wali Kelas", meta: "Catatan perkembangan dan prestasi siswa", section: "catatan", icon: "&#128221;" },
    { title: "Laporan", meta: "Cetak & unduh laporan otomatis", section: "laporan", icon: "&#128196;" }
  ],
  docs: [
    { title: "Modul Ajar Kelas 6", type: "PDF", meta: "15 Juni 2025" },
    { title: "ATP Semester 2", type: "PDF", meta: "14 Juni 2025" },
    { title: "LKPD Tema 8", type: "PDF", meta: "14 Juni 2025" },
    { title: "Kisi-kisi Soal PTS", type: "PDF", meta: "13 Juni 2025" },
    { title: "RPP IPA Kelas 6", type: "PDF", meta: "12 Juni 2025" }
  ],
  activities: [
    { title: "Absensi diperbarui", meta: "15 Juni 2025 - 07:30" },
    { title: "Modul Ajar diunggah", meta: "14 Juni 2025 - 21:15" },
    { title: "Jurnal Mengajar dibuat", meta: "14 Juni 2025 - 16:45" },
    { title: "Nilai Harian diinput", meta: "13 Juni 2025 - 19:20" }
  ],
  sectionContent: {
    siswa: [
      { nama: "Alya Putri", jenisKelamin: "Perempuan", orangTua: "Bapak Ahmad / Ibu Rina", nisn: "3123456789", ttl: "Bandung, 12 Mei 2013", alamat: "Jl. Melati No. 12", title: "Alya Putri", meta: "NISN 3123456789" },
      { nama: "Bagas Pratama", jenisKelamin: "Laki-laki", orangTua: "Bapak Dedi / Ibu Sari", nisn: "3123456790", ttl: "Garut, 20 Juni 2013", alamat: "Jl. Kenanga No. 7", title: "Bagas Pratama", meta: "NISN 3123456790" },
      { nama: "Citra Lestari", jenisKelamin: "Perempuan", orangTua: "Bapak Rudi / Ibu Wati", nisn: "3123456791", ttl: "Tasikmalaya, 3 Maret 2013", alamat: "Jl. Anggrek No. 4", title: "Citra Lestari", meta: "NISN 3123456791" }
    ],
    asesmen: [
      { title: "Nilai Harian Tema 8", meta: "Aktif" },
      { title: "Rekap PTS Semester Genap", meta: "Siap cetak" },
      { title: "Analisis Ketuntasan", meta: "Draf" },
      { title: "Bank Soal Kelas 6", meta: "Tersimpan" }
    ],
    perangkat: [
      { title: "Program Tahunan", meta: "Lengkap" },
      { title: "Program Semester", meta: "Lengkap" },
      { title: "Alur Tujuan Pembelajaran", meta: "Review" },
      { title: "Rencana Pelaksanaan Pembelajaran", meta: "Aktif" }
    ],
    galeri: [
      { title: "Upacara Senin", meta: "Kegiatan kelas", image: "" },
      { title: "Praktik IPA", meta: "Dokumentasi belajar", image: "" }
    ],
    pengaturan: [
      { title: "Tema pink aktif", meta: "Aktif" },
      { title: "Notifikasi pengingat aktif", meta: "Aktif" },
      { title: "Mode cetak laporan siap", meta: "Aktif" }
    ],
    bantuan: [
      { title: "Hubungi admin sekolah", meta: "Tersedia" },
      { title: "Panduan upload dokumen", meta: "Tersedia" },
      { title: "Panduan cetak laporan", meta: "Tersedia" }
    ]
  },
  note: "Jangan lupa cek absensi dan upload modul ajar ya"
};

const labels = {
  announcements: "Pengumuman",
  quickItems: "Akses Cepat",
  docs: "Dokumen Terbaru",
  activities: "Kegiatan Terbaru",
  siswa: "Data Siswa",
  asesmen: "Asesmen",
  perangkat: "Perangkat Ajar",
  galeri: "Galeri Media",
  pengaturan: "Pengaturan",
  bantuan: "Bantuan"
};

let data = loadData();
const modal = document.querySelector("#modal");
const modalTitle = document.querySelector("#modalTitle");
const modalBody = document.querySelector("#modalBody");
const toast = document.querySelector("#toast");
const currentMonth = { index: 5, year: 2025 };
const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadData() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    return saved ? mergeData(clone(defaultData), saved) : clone(defaultData);
  } catch {
    return clone(defaultData);
  }
}

function mergeData(base, saved) {
  Object.keys(saved || {}).forEach((key) => {
    if (saved[key] && typeof saved[key] === "object" && !Array.isArray(saved[key]) && base[key]) {
      base[key] = mergeData(base[key], saved[key]);
    } else {
      base[key] = saved[key];
    }
  });
  return base;
}

function saveData() {
  localStorage.setItem(storageKey, JSON.stringify(data));
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function openModal(title, html) {
  modalTitle.textContent = title;
  modalBody.innerHTML = html;
  if (!modal.open) modal.showModal();
}

function listHtml(items) {
  return `<ul class="modal-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function getList(key) {
  return data[key] || data.sectionContent[key] || [];
}

function setList(key, value) {
  if (key in data) {
    data[key] = value;
  } else {
    data.sectionContent[key] = value;
  }
}

function itemText(item) {
  const title = item.title || item.nama || "Data";
  return `${title}${item.meta ? ` - ${item.meta}` : ""}`;
}

function normalizeStudent(item) {
  const nama = item.nama || item.title || "";
  const nisn = item.nisn || "";
  return {
    nama,
    jenisKelamin: item.jenisKelamin || "",
    orangTua: item.orangTua || "",
    nisn,
    ttl: item.ttl || "",
    alamat: item.alamat || "",
    title: nama,
    meta: nisn ? `NISN ${nisn}` : (item.meta || "")
  };
}

function renderStats() {
  document.querySelector("#studentCountStat").textContent = data.metrics?.studentCount ?? data.sectionContent.siswa.length;
}

function renderProfile() {
  const fields = [
    ["Nama", data.profile.nama],
    ["NIP", data.profile.nip],
    ["NUPTK", data.profile.nuptk],
    ["Jabatan", data.profile.jabatan],
    ["Mata Pelajaran", data.profile.mapel],
    ["Email", data.profile.email]
  ];
  document.querySelector("#profileData").innerHTML = fields
    .map(([label, value]) => `<div><dt>${label}</dt><dd>${escapeHtml(value)}</dd></div>`)
    .join("");
  document.querySelector(".welcome-card strong").textContent = `Hai, ${data.profile.nama}!`;
}

function rowActions(list, index) {
  return `
    <span class="item-actions">
      <button type="button" data-edit-item="${list}" data-index="${index}">Edit</button>
      <button type="button" data-delete-item="${list}" data-index="${index}">Hapus</button>
    </span>
  `;
}

function renderAnnouncements() {
  document.querySelector("#announcementList").innerHTML = data.announcements
    .map((item, index) => `
      <div class="editable-row">
        <button type="button" data-action="event" data-title="${escapeHtml(item.title)}">
          <span class="heart">&#9825;</span>
          <strong>${escapeHtml(item.title)}</strong>
          <small>${escapeHtml(item.meta)}</small>
        </button>
        ${rowActions("announcements", index)}
      </div>
    `)
    .join("");
  renderEvents();
}

function renderEvents() {
  document.querySelector("#eventLines").innerHTML = data.announcements.slice(0, 3)
    .map((item) => `
      <button type="button" data-action="event" data-title="${escapeHtml(item.title)}">
        <strong>${escapeHtml(item.meta.split(" ").slice(0, 2).join(" "))}</strong>
        <span>${escapeHtml(item.title)}</span>
      </button>
    `)
    .join("");
}

function renderQuickItems() {
  document.querySelector("#quickGrid").innerHTML = data.quickItems
    .map((item, index) => `
      <div class="quick-edit-wrap">
        <button class="quick-card" type="button" data-section="${escapeHtml(item.section)}">
          <span class="quick-icon">${item.icon}</span>
          <strong>${escapeHtml(item.title)}</strong>
          <small>${escapeHtml(item.meta)}</small>
          <span>Kelola</span>
        </button>
        ${rowActions("quickItems", index)}
      </div>
    `)
    .join("");
}

function renderDocs() {
  document.querySelector("#docsList").innerHTML = data.docs
    .map((item, index) => `
      <div class="editable-row">
        <button type="button" data-action="document" data-title="${escapeHtml(item.title)}">
          <span class="doc-icon">${escapeHtml(item.type)}</span>
          <strong>${escapeHtml(item.title)}</strong>
          <small>${escapeHtml(item.type)}</small>
          <small>${escapeHtml(item.meta)}</small>
        </button>
        ${rowActions("docs", index)}
      </div>
    `)
    .join("");
}

function renderActivities() {
  document.querySelector("#activityList").innerHTML = data.activities
    .map((item, index) => `
      <div class="editable-row">
        <button type="button" data-action="activity" data-title="${escapeHtml(item.title)}">
          <span class="activity-icon">OK</span>
          <span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.meta)}</small></span>
        </button>
        ${rowActions("activities", index)}
      </div>
    `)
    .join("");
}

function renderAttendance() {
  const total = Object.values(data.attendance).reduce((sum, value) => sum + Number(value || 0), 0) || 1;
  const hadir = Math.round((data.attendance.hadir / total) * 100);
  const sakit = Math.round((data.attendance.sakit / total) * 100);
  const izin = Math.round((data.attendance.izin / total) * 100);
  const hadirEnd = hadir;
  const sakitEnd = hadir + sakit;
  const izinEnd = sakitEnd + izin;

  document.querySelector("#attendanceDonut").style.background = `conic-gradient(#f66ba6 0 ${hadirEnd}%, #ffc5d8 ${hadirEnd}% ${sakitEnd}%, #ffd18d ${sakitEnd}% ${izinEnd}%, #d7a4ef ${izinEnd}% 100%)`;
  document.querySelector("#attendanceDonut span").innerHTML = `Total<br><strong>${total}</strong><br>Siswa`;
  document.querySelector("#attendanceLegend").innerHTML = [
    ["hadir", "Hadir", data.attendance.hadir],
    ["sakit", "Sakit", data.attendance.sakit],
    ["izin", "Izin", data.attendance.izin],
    ["alpha", "Alpha", data.attendance.alpha]
  ].map(([key, label, value]) => {
    const percent = Math.round((Number(value || 0) / total) * 100);
    return `<button type="button" data-action="attendance" data-title="${label}"><i class="dot ${key}"></i>${label} <strong>${value} (${percent}%)</strong></button>`;
  }).join("");
}

function renderCalendar() {
  const firstDay = new Date(currentMonth.year, currentMonth.index, 1).getDay();
  const daysInMonth = new Date(currentMonth.year, currentMonth.index + 1, 0).getDate();
  const start = firstDay === 0 ? 6 : firstDay - 1;
  const labels = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];
  const cells = labels.map((label) => `<span>${label}</span>`);

  for (let i = 0; i < start; i += 1) cells.push("<span></span>");
  for (let day = 1; day <= daysInMonth; day += 1) {
    const isToday = currentMonth.index === 5 && day === 15;
    cells.push(`<button class="${isToday ? "today" : ""}" type="button" data-action="calendar-day" data-title="${day} ${monthNames[currentMonth.index]} ${currentMonth.year}">${day}</button>`);
  }

  document.querySelector("#calendarTitle").textContent = `${monthNames[currentMonth.index]} ${currentMonth.year}`;
  document.querySelector("#miniCalendarTitle").textContent = `${monthNames[currentMonth.index]} ${currentMonth.year}`;
  document.querySelector("#mainCalendar").innerHTML = cells.join("");
  document.querySelector("#miniCalendar").innerHTML = cells.join("");
}

function renderNote() {
  document.querySelector("#noteText").value = data.note || "";
}

function renderAll() {
  renderStats();
  renderProfile();
  renderAnnouncements();
  renderQuickItems();
  renderDocs();
  renderActivities();
  renderAttendance();
  renderCalendar();
  renderNote();
}

function openItemForm(listKey, index = null) {
  if (listKey === "siswa") {
    openStudentForm(index);
    return;
  }
  if (listKey === "galeri") {
    openGalleryForm(index);
    return;
  }
  const list = getList(listKey);
  const item = index === null ? {} : list[index];
  const isQuick = listKey === "quickItems";
  const isDoc = listKey === "docs";
  const title = index === null ? `Tambah ${labels[listKey]}` : `Edit ${labels[listKey]}`;
  openModal(title, `
    <form class="edit-form" id="itemForm">
      <label>Judul
        <input name="title" value="${escapeHtml(item.title || "")}" required>
      </label>
      <label>${isQuick ? "Deskripsi" : isDoc ? "Tanggal" : "Keterangan"}
        <input name="meta" value="${escapeHtml(item.meta || "")}" required>
      </label>
      ${isDoc ? `<label>Tipe Dokumen<input name="type" value="${escapeHtml(item.type || "PDF")}" required></label>` : ""}
      ${isQuick ? `
        <label>Target menu
          <input name="section" value="${escapeHtml(item.section || "dashboard")}" required>
        </label>
        <label>Kode ikon
          <input name="icon" value="${escapeHtml(item.icon || "&#11088;")}" required>
        </label>
      ` : ""}
      <div class="form-actions">
        <button class="pink-button" type="submit">Simpan</button>
      </div>
    </form>
  `);

  document.querySelector("#itemForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const next = {
      title: form.get("title").trim(),
      meta: form.get("meta").trim()
    };
    if (isDoc) next.type = form.get("type").trim();
    if (isQuick) {
      next.section = form.get("section").trim();
      next.icon = form.get("icon").trim();
    }
    const updated = [...list];
    if (index === null) updated.push(next);
    else updated[index] = next;
    setList(listKey, updated);
    saveData();
    renderAll();
    modal.close();
    showToast("Data berhasil disimpan");
  });
}

function openStudentCountForm() {
  openModal("Edit Jumlah Siswa", `
    <form class="edit-form" id="studentCountForm">
      <label>Jumlah siswa aktif
        <input name="studentCount" type="number" min="0" value="${escapeHtml(data.metrics?.studentCount ?? data.sectionContent.siswa.length)}" required>
      </label>
      <div class="form-actions"><button class="pink-button" type="submit">Simpan Jumlah Siswa</button></div>
    </form>
  `);
  document.querySelector("#studentCountForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    data.metrics = data.metrics || {};
    data.metrics.studentCount = Number(form.get("studentCount"));
    saveData();
    renderAll();
    modal.close();
    showToast("Jumlah siswa berhasil diperbarui");
  });
}

function openStudentForm(index = null) {
  const list = data.sectionContent.siswa.map(normalizeStudent);
  const item = index === null ? {} : list[index];
  const title = index === null ? "Tambah Siswa" : "Edit Siswa";
  openModal(title, `
    <form class="edit-form" id="studentForm">
      <label>Nama lengkap<input name="nama" value="${escapeHtml(item.nama || "")}" required></label>
      <label>Jenis kelamin
        <select name="jenisKelamin" required>
          <option value="">Pilih jenis kelamin</option>
          <option value="Perempuan" ${item.jenisKelamin === "Perempuan" ? "selected" : ""}>Perempuan</option>
          <option value="Laki-laki" ${item.jenisKelamin === "Laki-laki" ? "selected" : ""}>Laki-laki</option>
        </select>
      </label>
      <label>Nama orang tua<input name="orangTua" value="${escapeHtml(item.orangTua || "")}" required></label>
      <label>NISN<input name="nisn" value="${escapeHtml(item.nisn || "")}" required></label>
      <label>Tempat tanggal lahir<input name="ttl" value="${escapeHtml(item.ttl || "")}" required></label>
      <label>Alamat<textarea name="alamat" required>${escapeHtml(item.alamat || "")}</textarea></label>
      <div class="form-actions"><button class="pink-button" type="submit">Simpan Siswa</button></div>
    </form>
  `);
  document.querySelector("#studentForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const next = normalizeStudent(Object.fromEntries(form.entries()));
    const updated = [...list];
    if (index === null) updated.push(next);
    else updated[index] = next;
    data.sectionContent.siswa = updated;
    data.metrics = data.metrics || {};
    data.metrics.studentCount = Math.max(Number(data.metrics.studentCount || 0), updated.length);
    saveData();
    renderAll();
    openManager("siswa");
    showToast("Data siswa berhasil disimpan");
  });
}

function openGalleryForm(index = null) {
  const list = getList("galeri");
  const item = index === null ? {} : list[index];
  const title = index === null ? "Tambah Foto Galeri" : "Edit Foto Galeri";
  openModal(title, `
    <form class="edit-form" id="galleryForm">
      <label>Judul foto<input name="title" value="${escapeHtml(item.title || "")}" required></label>
      <label>Keterangan<input name="meta" value="${escapeHtml(item.meta || "")}" required></label>
      <label>Ambil foto dari device<input name="imageFile" type="file" accept="image/*"></label>
      ${item.image ? `<img class="gallery-preview" src="${item.image}" alt="Preview foto">` : ""}
      <div class="form-actions"><button class="pink-button" type="submit">Simpan Foto</button></div>
    </form>
  `);
  document.querySelector("#galleryForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const file = form.get("imageFile");
    const saveGallery = (image) => {
      const next = {
        title: form.get("title").trim(),
        meta: form.get("meta").trim(),
        image: image || item.image || ""
      };
      const updated = [...list];
      if (index === null) updated.push(next);
      else updated[index] = next;
      data.sectionContent.galeri = updated;
      saveData();
      renderAll();
      openManager("galeri");
      showToast("Foto galeri berhasil disimpan");
    };

    if (file && file.size) {
      const reader = new FileReader();
      reader.addEventListener("load", () => saveGallery(reader.result));
      reader.readAsDataURL(file);
    } else {
      saveGallery(item.image || "");
    }
  });
}

function openProfileForm() {
  openModal("Edit Profil Guru", `
    <form class="edit-form" id="profileForm">
      <label>Nama<input name="nama" value="${escapeHtml(data.profile.nama)}" required></label>
      <label>NIP<input name="nip" value="${escapeHtml(data.profile.nip)}" required></label>
      <label>NUPTK<input name="nuptk" value="${escapeHtml(data.profile.nuptk)}" required></label>
      <label>Jabatan<input name="jabatan" value="${escapeHtml(data.profile.jabatan)}" required></label>
      <label>Mata Pelajaran<input name="mapel" value="${escapeHtml(data.profile.mapel)}" required></label>
      <label>Email<input name="email" value="${escapeHtml(data.profile.email)}" required></label>
      <div class="form-actions"><button class="pink-button" type="submit">Simpan Profil</button></div>
    </form>
  `);
  document.querySelector("#profileForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    data.profile = Object.fromEntries(form.entries());
    saveData();
    renderAll();
    modal.close();
    showToast("Profil berhasil diperbarui");
  });
}

function openAttendanceForm() {
  openModal("Edit Absensi", `
    <form class="edit-form" id="attendanceForm">
      <label>Hadir<input name="hadir" type="number" min="0" value="${data.attendance.hadir}" required></label>
      <label>Sakit<input name="sakit" type="number" min="0" value="${data.attendance.sakit}" required></label>
      <label>Izin<input name="izin" type="number" min="0" value="${data.attendance.izin}" required></label>
      <label>Alpha<input name="alpha" type="number" min="0" value="${data.attendance.alpha}" required></label>
      <div class="form-actions"><button class="pink-button" type="submit">Simpan Absensi</button></div>
    </form>
  `);
  document.querySelector("#attendanceForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    data.attendance = {
      hadir: Number(form.get("hadir")),
      sakit: Number(form.get("sakit")),
      izin: Number(form.get("izin")),
      alpha: Number(form.get("alpha"))
    };
    saveData();
    renderAll();
    modal.close();
    showToast("Absensi berhasil diperbarui");
  });
}

function openManager(section) {
  const list = getList(section);
  const isGallery = section === "galeri";
  const isStudent = section === "siswa";
  openModal(labels[section] || section, `
    <div class="manager-list">
      ${list.map((item, index) => `
        <div>
          ${isGallery && item.image ? `<img class="gallery-thumb" src="${item.image}" alt="${escapeHtml(item.title)}">` : ""}
          <span>
            <strong>${escapeHtml(item.title || item.nama)}</strong>
            <small>${escapeHtml(item.meta || item.nisn || "")}</small>
            ${isStudent ? `<small>${escapeHtml(item.jenisKelamin || "")} | ${escapeHtml(item.ttl || "")}</small><small>${escapeHtml(item.orangTua || "")}</small><small>${escapeHtml(item.alamat || "")}</small>` : ""}
          </span>
          ${rowActions(section, index)}
        </div>
      `).join("")}
    </div>
    <button class="pink-button" type="button" data-action="add-item" data-list="${section}">Tambah Data</button>
  `);
}

function setActiveSection(section) {
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.section === section);
  });

  const target = document.querySelector(`#${section}`) || document.querySelector("#dashboard");
  target.scrollIntoView({ behavior: "smooth", block: "start" });

  if (data.sectionContent[section]) {
    openManager(section);
  } else {
    showToast(`Membuka ${section.replace("-", " ")}`);
  }
}

function downloadReport() {
  const total = Object.values(data.attendance).reduce((sum, value) => sum + Number(value || 0), 0);
  const lines = [
    "Laporan Devisi Kelas Buel",
    `Guru: ${data.profile.nama}`,
    `Jumlah Pengumuman: ${data.announcements.length}`,
    `Jumlah Siswa: ${data.metrics?.studentCount ?? data.sectionContent.siswa.length}`,
    `Jumlah Dokumen: ${data.docs.length}`,
    `Absensi Total: ${total} siswa`,
    `Hadir: ${data.attendance.hadir}`,
    `Sakit: ${data.attendance.sakit}`,
    `Izin: ${data.attendance.izin}`,
    `Alpha: ${data.attendance.alpha}`
  ];
  const blob = new Blob([lines.join("\n")], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "laporan-devisi-kelas-buel.txt";
  link.click();
  URL.revokeObjectURL(url);
  showToast("Laporan berhasil diunduh");
}

document.addEventListener("click", (event) => {
  const close = event.target.closest("[data-close]");
  if (close) modal.close();

  const editButton = event.target.closest("[data-edit-item]");
  if (editButton) {
    event.stopPropagation();
    openItemForm(editButton.dataset.editItem, Number(editButton.dataset.index));
    return;
  }

  const deleteButton = event.target.closest("[data-delete-item]");
  if (deleteButton) {
    event.stopPropagation();
    const listKey = deleteButton.dataset.deleteItem;
    const index = Number(deleteButton.dataset.index);
    const list = [...getList(listKey)];
    list.splice(index, 1);
    setList(listKey, list);
    saveData();
    renderAll();
    if (modal.open) openManager(listKey);
    showToast("Data berhasil dihapus");
    return;
  }

  const sectionButton = event.target.closest("[data-section]");
  if (sectionButton) {
    setActiveSection(sectionButton.dataset.section);
    return;
  }

  const calendarButton = event.target.closest("[data-calendar]");
  if (calendarButton) {
    currentMonth.index += calendarButton.dataset.calendar === "next" ? 1 : -1;
    if (currentMonth.index > 11) {
      currentMonth.index = 0;
      currentMonth.year += 1;
    }
    if (currentMonth.index < 0) {
      currentMonth.index = 11;
      currentMonth.year -= 1;
    }
    renderCalendar();
    showToast(`Kalender ${monthNames[currentMonth.index]} ${currentMonth.year}`);
    return;
  }

  const actionButton = event.target.closest("[data-action]");
  if (!actionButton) return;

  const action = actionButton.dataset.action;
  const title = actionButton.dataset.title || "Detail";

  if (action === "add-item") {
    openItemForm(actionButton.dataset.list);
  } else if (action === "edit-student-count") {
    openStudentCountForm();
  } else if (action === "edit-profile") {
    openProfileForm();
  } else if (action === "edit-attendance") {
    openAttendanceForm();
  } else if (action === "menu") {
    document.querySelector(".side-nav").scrollIntoView({ behavior: "smooth", block: "nearest" });
    showToast("Menu utama siap dipilih");
  } else if (action === "profile") {
    openModal("Profil Guru Lengkap", listHtml([
      `Nama: ${data.profile.nama}`,
      `NIP: ${data.profile.nip}`,
      `NUPTK: ${data.profile.nuptk}`,
      `Jabatan: ${data.profile.jabatan}`,
      `Mata Pelajaran: ${data.profile.mapel}`,
      `Email: ${data.profile.email}`
    ]));
  } else if (action === "open-list") {
    openModal(title, listHtml(["Klik tombol Tambah/Edit/Hapus di tiap bagian untuk mengelola data.", "Perubahan tersimpan otomatis di browser."]));
  } else if (action === "school-year") {
    openModal("Tahun Ajaran", listHtml(["2024/2025", "Semester Genap", "Kurikulum Merdeka"]));
  } else if (action === "see-all") {
    const source = title === "Pengumuman" ? data.announcements :
      title === "Dokumen Terbaru" ? data.docs :
      data.activities;
    openModal(title, listHtml(source.map(itemText)));
  } else if (action === "event") {
    openModal(title, listHtml(["Status: Terjadwal", "Bisa diedit lewat tombol Edit di daftar pengumuman.", "Klik Hapus untuk mengurangi data."]));
  } else if (action === "calendar-detail") {
    openManager("announcements");
  } else if (action === "attendance" || action === "attendance-detail") {
    openModal(action === "attendance" ? title : "Detail Absensi", listHtml([
      `Hadir: ${data.attendance.hadir} siswa`,
      `Sakit: ${data.attendance.sakit} siswa`,
      `Izin: ${data.attendance.izin} siswa`,
      `Alpha: ${data.attendance.alpha} siswa`
    ]));
  } else if (action === "download-report") {
    downloadReport();
  } else if (action === "document") {
    openModal(title, listHtml(["Format bisa diedit lewat tombol Edit.", "Data dokumen bisa ditambah atau dihapus."]));
  } else if (action === "activity") {
    openModal(title, listHtml(["Aktivitas tercatat.", "Riwayat bisa ditambah, diedit, atau dihapus."]));
  } else if (action === "calendar-day") {
    openModal(title, listHtml(["Klik Kalender Lengkap untuk mengelola agenda.", "Agenda tersambung dari data pengumuman."]));
  }
});

document.querySelector("#chartRange").addEventListener("change", (event) => {
  showToast(`Grafik diubah ke ${event.target.value}`);
});

document.querySelector("#noteForm").addEventListener("submit", (event) => {
  event.preventDefault();
  data.note = document.querySelector("#noteText").value;
  saveData();
  showToast("Catatan cepat tersimpan");
});

renderAll();
