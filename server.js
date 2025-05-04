const WebSocket = require("ws");

// Membuat server WebSocket pada port 3000
const wss = new WebSocket.Server({ port: 3000 });

// Menangani koneksi dari klien
wss.on("connection", (ws) => {
  console.log("Client connected");

  // Menangani pesan yang diterima dari klien
  ws.on("message", (message) => {
    console.log(`Received: ${message}`);

    // Balasan server sesuai dengan pesan yang diterima
    let serverResponse = "Pesan tidak dikenali.";

    const serverReplies = {
      halo: "Halo!",
      "tolong subscribe channel saya": "Baik, apa nama channelnya?.",
      "Anshor Official": "Baik, saya akan subscribe channel anda",
      "terima kasih": "Sama-sama! Senang bisa membantu.",
    };

    // Jika pesan ada dalam daftar balasan, gunakan balasan yang sesuai
    if (serverReplies[message.toLowerCase()]) {
      serverResponse = serverReplies[message.toLowerCase()];
    }

    // Kirim balasan ke klien
    ws.send(serverResponse);
  });

  // Menangani ketika klien terputus
  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server running on ws://localhost:3000");
