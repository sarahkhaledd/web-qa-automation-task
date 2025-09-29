const supertest = require('supertest');
const { API_BASE_URL } = require('../utils/load_env');

const request = supertest(API_BASE_URL);

async function sendGet(path, token) {
  const req = request.get(path);
  if (token) req.set('Authorization', token);
  return req;
}

async function sendPost(path, payload, token) {
  const req = request.post(path).send(payload);
  if (token) req.set('Authorization', token);
  return req;
}

async function sendPatch(path, payload, token) {
  const req = request.patch(path).send(payload);
  if (token) req.set('Authorization', token);
  return req;
}

async function sendDelete(path, token, payload) {
  const req = request.delete(path);
  if (token) req.set('Authorization', token);
  if (payload) req.send(payload);
  return req;
}

module.exports = { sendGet, sendPost, sendPatch, sendDelete };