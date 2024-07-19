const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
const prisma = new PrismaClient();

app.use(express.json());



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});