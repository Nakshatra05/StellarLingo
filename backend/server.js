const express = require('express');
const bodyParser = require('body-parser');
const StellarSdk = require('@stellar/sdk');

const app = express();
app.use(bodyParser.json());

const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
const pair = StellarSdk.Keypair.random();

app.post('/register', async (req, res) => {
    const { username } = req.body;

    // Registration logic here (e.g., storing user in a database)
    // Interact with Soroban smart contract if needed

    res.send({ message: `User ${username} registered!`, publicKey: pair.publicKey() });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
