const net = require('net');
const readline = require('readline');

const client = new net.Socket();

client.connect(3000, '127.0.0.1', async () => {
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
