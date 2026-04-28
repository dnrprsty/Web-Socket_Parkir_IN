# Parkir-In: Real-Time Parking Monitoring System

**Parkir-In** adalah prototipe sistem pemantauan ketersediaan slot parkir secara *real-time* yang dibangun menggunakan protokol **WebSocket**.

---

## Alur Kerja Sistem (Mermaid Diagram)

Berikut adalah visualisasi bagaimana data dikirim dari Server ke Browser lu secara otomatis:

sequenceDiagram
    autonumber
    participant Browser as Client (Frontend)
    participant Server as Node.js Server (Backend)

    Note over Browser, Server: Handshake (HTTP Upgrade)
    Browser->>Server: HTTP GET (Upgrade to WebSocket)
    Server->>Browser: 101 Switching Protocols
    Note over Browser, Server: Connection Established (Full-Duplex)

    rect rgb(240, 240, 240)
        loop Setiap 5 Detik (Simulasi)
            Server->>Browser: Push JSON (status: "Tersedia/Terisi")
            Note right of Browser: UI Updates (DOM Manipulation)
        end
    end

    Note over Browser: User memutus koneksi
    Browser->>Server: Close Frame
    Server->>Browser: Acknowledge Close
    Note over Browser, Server: Connection Closed

---

## Fitur Utama
* **Real-Time Update:** Status slot parkir diperbarui secara instan tanpa *refresh*.
* **Visual Feedback:** Perubahan warna antarmuka (Hijau/Merah) berdasarkan status.
* **Low Latency:** Menggunakan WebSocket untuk meminimalkan *overhead* data.

---

## Teknologi yang Digunakan
* **Backend:** Node.js
* **Library:** `ws` (WebSocket library)
* **Frontend:** HTML5, JavaScript (ES6+), Tailwind CSS

---

## Dokumentasi Eksperimen

### 1. Koneksi Awal (Standby)
![Status Standby](Assets/null.png)
*Gambar 1: Antarmuka dalam kondisi menunggu koneksi server.*

### 2. Slot Tersedia (Available)
![Slot Tersedia](Assets/avail.png)
*Gambar 2: Notifikasi real-time saat slot parkir kosong.*

### 3. Slot Terisi (Occupied)
![Slot Terisi](Assets/terisi.png)
*Gambar 3: Perubahan status visual saat slot digunakan.*

---

## 🏃 Cara Menjalankan Proyek

1. **Clone repositori ini:**
   ```bash
   git clone [https://github.com/username-lu/parkir-in-websocket.git](https://github.com/username-lu/parkir-in-websocket.git)
   cd parkir-in-websocket
   ```

2. **Instal dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan server:**
   ```bash
   node server.js
   ```

4. **Buka aplikasi:**
   Buka file `index.html` di browser lu.

---

## 📝 Detail Eksperimen (UTS)
Proyek ini dikembangkan sebagai bagian dari tugas UTS Pemrograman Web di **Universitas Pelita Bangsa**.
```

### **Cara Pakai di GitHub:**
1. Di repositori GitHub lu, klik **Add file** > **Create new file**.
2. Beri nama file: `README.md`.
3. *Paste* kode di atas.
4. GitHub secara otomatis akan merender kode `mermaid` tadi jadi diagram yang cakep banget di halaman depan repo lu.

**Note:** Jangan lupa ganti `./screenshots/ss-xxx.png` dengan lokasi file foto yang lu upload ke folder `screenshots` di GitHub lu ya!

Ada lagi yang mau dipoles biar GitHub lu makin "pro"?
