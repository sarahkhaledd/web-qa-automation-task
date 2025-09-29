require('dotenv').config();

const API_BASE_URL = process.env.API_BASE_URL;
const ADMIN_KEY = process.env.ADMIN_KEY;

module.exports = { API_BASE_URL, ADMIN_KEY };