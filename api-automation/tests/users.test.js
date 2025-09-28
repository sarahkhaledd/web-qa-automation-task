const endpoints = require('../helpers/endpoints');
const { assertStatusCode, assertMessage } = require('../helpers/assertions');
const { user, newUser } = require('../testData/credentials');

describe('Users CRUD API Tests', () => {
  let token;

  beforeEach(async () => {
    await endpoints.createUser(newUser.name, newUser.email, newUser.password);
    const res = await endpoints.login(newUser.email, newUser.password);
    token = res.body.token; 
  });

  describe('GET /api/v1/users - Get User', () => {
    it('should return 200 with user data when valid authentication token is provided', async () => {
      const res = await endpoints.getUser(token);
      assertStatusCode(res, 200);
      expect(res.body.email).toBe(newUser.email);
    });

    it('should return 403 when authentication token is malformed or invalid', async () => {
      const res = await endpoints.getUser('invalid-token');
      assertStatusCode(res, 403);
    });

    it('should return 403 when authentication token has expired', async () => {
      const expiredToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRzZXJAZ21haWwuY29tIiwiaWQiOjEsImlhdCI6MTYwMDAwMDAwMCwiZXhwIjoxNjAwMDAwMDAwfQ.invalid';
      const res = await endpoints.getUser(expiredToken);
      assertStatusCode(res, 403);
    });

    it('should return 403 when authentication token is missing or empty', async () => {
      const res = await endpoints.getUser('');
      assertStatusCode(res, 403);
    });
  });

  describe('PATCH /api/v1/users - Update User', () => {
    it('should return 200 with success message when updating user with valid data', async () => {
      const res = await endpoints.patchUser(token, newUser);
      assertStatusCode(res, 200);
      assertMessage(res, 'User updated with success!');
    });

    it('should return 403 when update request uses invalid authentication token', async () => {
      const res = await endpoints.patchUser('invalid-token', newUser);
      assertStatusCode(res, 403);
    });

    it.skip('should return 400 when update request body is empty - KNOWN BUG: Validation not working', async () => {
      const res = await endpoints.patchUser(token, {});
      assertStatusCode(res, 400);
    });

    it.skip('should return 400 when update email format is invalid - KNOWN BUG: Email validation not working', async () => {
      const invalidUpdate = { ...newUser, email: 'invalid-email' };
      const res = await endpoints.patchUser(token, invalidUpdate);
      assertStatusCode(res, 400);
    });

    it.skip('should return 400 when update email already exists - KNOWN BUG: Duplicate email validation not working', async () => {
      const duplicateUpdate = { ...newUser, email: user.email };
      const res = await endpoints.patchUser(token, duplicateUpdate);
      assertStatusCode(res, 400);
    });

    it.skip('should return 400 when update fields are empty - KNOWN BUG: Empty field validation not working', async () => {
      const res = await endpoints.patchUser(token, "");
      assertStatusCode(res, 400);
    });
  });

  describe('DELETE /api/v1/users - Delete User', () => {

    it('should return 200 with success message when deleting user with valid token', async () => {
      let tokenpass;
      await endpoints.createUser(newUser.name, newUser.email, newUser.password);
      const res = await endpoints.login(newUser.email, newUser.password);
      tokenpass = res.body.token; 

      const resq = await endpoints.deleteUser(tokenpass);
      assertStatusCode(resq, 200);
      assertMessage(resq, 'User deleted with success!');
    });

    it('should return 403 when delete request uses invalid authentication token', async () => {
      const res = await endpoints.deleteUser('invalid-token');
      assertStatusCode(res, 403);
    });

    it('should return 403 when delete request uses expired authentication token', async () => {
      const expiredToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRzZXJAZ21haWwuY29tIiwiaWQiOjEsImlhdCI6MTYwMDAwMDAwMCwiZXhwIjoxNjAwMDAwMDAwfQ.invalid';
      const res = await endpoints.deleteUser(expiredToken);
      assertStatusCode(res, 403);
    });

    it('should return 403 when delete request has missing authentication token', async () => {
      const res = await endpoints.deleteUser('');
      assertStatusCode(res, 403);
    });
  });
});
