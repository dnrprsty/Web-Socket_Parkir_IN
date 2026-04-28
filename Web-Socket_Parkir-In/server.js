const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

console.log("Server WebSocket berjalan di port 8080...");

wss.on('connection', (ws) => {
    console.log("Pengguna baru terhubung!");

    // Simulasi perubahan status parkir setiap 5 detik
    const interval = setInterval(() => {
        const statusParkir = {
            slot: "A1",
            status: Math.random() > 0.5 ? "Tersedia" : "Terisi",
            waktu: new Date().toLocaleTimeString()
        };
        
        // Kirim data ke klien
        ws.send(JSON.stringify(statusParkir));
    }, 5000);

    ws.on('close', () => clearInterval(interval));
});
