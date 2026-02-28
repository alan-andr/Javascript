// 1. Iniciando a conexão (Handshake)
const socket = new WebSocket('wss://echo.websocket.org');

// 2. Evento disparado quando a conexão é aberta
socket.onopen = () => {
    console.log("✅ Conexão estabelecida! O canal está aberto.");
    
    // Enviando uma mensagem para o servidor
    socket.send("Olá servidor! Sou o " + (Math.random() * 100).toFixed(0));
};

// 3. Evento disparado quando o servidor envia algo (Push)
socket.onmessage = (event) => {
    console.log("📩 Mensagem recebida do servidor:", event.data);
};

// 4. Evento disparado se a conexão fechar
socket.onclose = () => {
    console.log("❌ Conexão encerrada.");
};