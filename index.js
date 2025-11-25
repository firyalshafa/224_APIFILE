const express = require('express');
const conectDatabase = require('./config/db');
const apiRoutes = require('./routes/api');

const app = express();
const PORT =  3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', apiRoutes); 
async function startServer() {
    await conectDatabase();
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}
startServer();