const net = require('net');
const readline = require('readline');

const client = new net.Socket();
const host = process.env.SERVER_HOST || '127.0.0.1'; // Use environment variable or default to localhost
const port = process.env.SERVER_PORT || 3000; 
client.connect(port, host, async () => {
    console.log('Connected to server');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on('line', async (input) => {
        client.write(input);
    });

    client.on('data', async (data) => {
        console.log('Received data from server:', data.toString());
        console.log(); 
    });

    client.on('close', () => {
        console.log('Connection closed');
        process.exit(0);
    });
});
