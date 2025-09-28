const routes = require('../constants/routes');
const { sendGet, sendPost, sendPatch, sendDelete } = require('./base_requests');
const { ADMIN_KEY } = require('../utils/load_env');

async function login(email, password) {
  const payload = { email, password };
  return sendPost(routes.AUTH, payload);
}

async function createUser(name, email, password) {
  const payload = { name, email, password };
  return sendPost(routes.CREATE_USER, payload);
}

async function getUser(token) {
  return sendGet(routes.GET_USER, token);
}

async function patchUser(token, data) {
  return sendPatch(routes.PATCH_USER, data, token);
}

async function deleteUser(token) {
  return sendDelete(routes.DELETE_USER, token);
}

async function deleteAllUsers(adminKey = ADMIN_KEY) {
  const payload = { key_admin: adminKey };
  return sendDelete(routes.DELETE_ALL_USERS, null, payload);
}

module.exports = { login, createUser, getUser, patchUser, deleteUser, deleteAllUsers };