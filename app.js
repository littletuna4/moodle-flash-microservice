const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.use('/', require('./routes'));

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

module.exports = app;