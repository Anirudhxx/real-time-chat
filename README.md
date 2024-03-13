Simple Chat Server and Client

This is a simple chat server and client application that allows multiple users to communicate in real-time over the network using sockets. The server listens for incoming connections on a specified port and handles multiple client connections concurrently. Users can send and receive messages in a shared chatroom environment.
Features
Server Initialization: The server starts listening on a specified port for incoming connections.
Connection Handling: It can handle multiple client connections concurrently using sockets.
Broadcast Messages: When a message is received from one client, it broadcasts the message to all connected clients, excluding the sender.
Client Connection: The client can connect to the server using its IP address and port.
User Interface: The client has a simple text-based interface where users can type messages and see messages from others in real-time.
Message Sending: Users can send messages to the server, which will then be broadcasted to other clients.
Receiving Messages: Messages from other users are displayed in real-time.

Technical Details

Language: Implemented in Node.js.
Concurrency: Uses async/await patterns for handling multiple clients.
Socket API: Utilizes the standard socket library provided by Node.js for network communication.
No External Libraries: Does not use any external libraries or frameworks for the chat logic. Standard libraries for threading or asynchronous operations are used.

Running the Application

Clone this repository to your local machine.

Navigate to the project directory.

Open a terminal and run the server:

    bash

    node server.js

Open another terminal and run the client:

    bash

    node client.js

Start typing messages in the client terminal to send messages to the chat server. You will see messages from other clients displayed in real-time.
Prerequisites

Before running the Docker image, ensure that you have Docker installed on your system. You can download and install Docker from the official website: https://www.docker.com/get-started
Usage

To download and run the chat server Docker image, follow these steps:

Download the Docker image:

bash

    docker pull anirudhchauhan10/chat-server:v1


Run the Docker container:

bash

    docker run -d -p 3000:3000 anirudhchauhan10/chat-server:v1

This command will start the chat server container in detached mode (-d) and map port 3000 on the host to port 3000 in the container.

Accessing the Chat Server

Once the Docker container is running, you can access the chat server by connecting to localhost:3000 in your web browser or using a tool like cURL or Postman to send messages to the server.

Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request for any improvements or bug fixes.
License

This project is licensed under the MIT License.
