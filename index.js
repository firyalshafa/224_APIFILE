const express = require('express');
const conectDatabase = require('./config/db');

const app = express();
const PORT =  3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function startServer() {
    await conectDatabase();
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}
startServer();