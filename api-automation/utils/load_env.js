require('dotenv').config();

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const ADMIN_KEY = process.env.ADMIN_KEY || 'keyadmin123';

module.exports = { BASE_URL, ADMIN_KEY };