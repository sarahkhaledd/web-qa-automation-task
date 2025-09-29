const endpoints = require('../helpers/endpoints');
const { assertStatusCode, assertMessage, assertToken } = require('../helpers/assertions');
const { user, newUser, lifecycleUser, updatedLifecycleUser, tokenTestUser, updatedTokenTestUser } = require('../testData/credentials');

describe('Integration Tests - End-to-End Flows', () => {
  let token;

  beforeAll(async () => {
    try {
      await endpoints.deleteAllUsers();
    } catch (error) {
    }
  });

  describe('Complete User Lifecycle', () => {
    it('E2E01 - should successfully complete full user lifecycle: create -> login -> get -> update -> delete', async () => {
      try {
        const createRes = await endpoints.createUser(lifecycleUser.name, lifecycleUser.email, lifecycleUser.password);
        console.log('CREATE USER RESPONSE:', createRes.status, createRes.body);
        assertStatusCode(createRes, 200);
        assertMessage(createRes, 'User registered with success');
  
        const loginRes = await endpoints.login(lifecycleUser.email, lifecycleUser.password);
        console.log('LOGIN RESPONSE:', loginRes.status, loginRes.body);
        assertStatusCode(loginRes, 200);
        assertToken(loginRes);
        const userToken = loginRes.body.token;
  
        const getRes = await endpoints.getUser(userToken);
        console.log('GET USER RESPONSE:', getRes.status, getRes.body);
        assertStatusCode(getRes, 200);
        expect(getRes.body.email).toBe(lifecycleUser.email);
  
        const updateRes = await endpoints.patchUser(userToken, {
          name: updatedLifecycleUser.name,
          email: updatedLifecycleUser.email,
          password: updatedLifecycleUser.password
        });
        console.log('UPDATE USER RESPONSE:', updateRes.status, updateRes.body);
        assertStatusCode(updateRes, 200);
        assertMessage(updateRes, 'User updated with success!');
  
        const reLoginRes = await endpoints.login(updatedLifecycleUser.email, updatedLifecycleUser.password);
        console.log('RE-LOGIN RESPONSE:', reLoginRes.status, reLoginRes.body);
        assertStatusCode(reLoginRes, 200);
        assertToken(reLoginRes);
        const updatedToken = reLoginRes.body.token;
  
        const deleteRes = await endpoints.deleteUser(updatedToken);
        console.log('DELETE USER RESPONSE:', deleteRes.status, deleteRes.body);
        assertStatusCode(deleteRes, 200);
        assertMessage(deleteRes, 'User deleted with success!');
      } catch (error) {
        console.error('TEST FAILED:', error.response?.status, error.response?.data || error);
        throw error; 
      }
    });
  });
  

  describe('Token Refresh After Update', () => {
    it('E2E02 - should demonstrate token refresh requirement after user update operation', async () => {
      const createRes = await endpoints.createUser(tokenTestUser.name, tokenTestUser.email, tokenTestUser.password);
      assertStatusCode(createRes, 200);
      assertMessage(createRes, 'User registered with success');

      const loginRes = await endpoints.login(tokenTestUser.email, tokenTestUser.password);
      assertStatusCode(loginRes, 200);
      assertToken(loginRes);
      const userToken = loginRes.body.token;

      const updateRes = await endpoints.patchUser(userToken, updatedTokenTestUser);
      assertStatusCode(updateRes, 200);
      assertMessage(updateRes, 'User updated with success!');

      const getRes = await endpoints.getUser(userToken);
      assertStatusCode(getRes, 403);

      const deleteRes = await endpoints.deleteUser(userToken);
      console.log('Delete with old token status:', deleteRes.status);

      const reLoginRes = await endpoints.login(updatedTokenTestUser.email, updatedTokenTestUser.password);
      assertStatusCode(reLoginRes, 200);
      const newToken = reLoginRes.body.token;

      const deleteRes2 = await endpoints.deleteUser(newToken);
      assertStatusCode(deleteRes2, 200);
      assertMessage(deleteRes2, 'User deleted with success!');
    });
  });

  describe('Cleanup Operations', () => {
    it('E2E03 - should successfully clean up all users using admin delete all endpoint', async () => {
      const res = await endpoints.deleteAllUsers();
      assertStatusCode(res, 200);
      assertMessage(res, 'Users deleted with success');
    });
  });
});
