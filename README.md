<h1 align="center">API Usage Guide</h1>
This guide provides instructions on how to use the API to interact with streamers data.

[Server](https://miraplay-test-server-sqsv.onrender.com)

<h2 align="center">Prerequisites</h2>
Before using the API, ensure that you have the following:

- Node.js installed
- MongoDB installed and running
- AWS S3 bucket credentials (access key ID, secret access key)

<h2 align="center">Getting Started</h2>
To get started with the API, follow these steps:

- Clone the repository and navigate to the project directory.
- Install dependencies by running the following command:

``` bash
npm install
```

- Create a .env file in the project root directory and configure the following environment variables:

``` bash
PORT=your_port
DB=your_mongodb_connection_url
JWTPRIVATEKEY=your_jwt_key
SALT=your_salt
```

- Start the server by running the following command:

``` bash
npm start
```

The server will start running on http://localhost:8080.