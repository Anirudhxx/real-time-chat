const net = require('net');
const { promisify } = require('util');

const server = net.createServer();
const connections = [];

server.on('connection', async (socket) => {
    connections.push(socket);
    console.log('New client connected');

    socket.on('data', async (data) => {
        console.log('Received data:', data.toString());

        await Promise.all(connections.map(async (conn) => {
            if (conn !== socket) {
                await promisify(conn.write).bind(conn)(data);
            }
        }));
    });

    socket.on('close', async () => {
        console.log('Client disconnected');
        const index = connections.indexOf(socket);
        if (index !== -1) {
            connections.splice(index, 1);
        }
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
