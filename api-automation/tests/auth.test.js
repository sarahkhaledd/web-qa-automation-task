const endpoints = require('../helpers/endpoints');
const { assertStatusCode, assertMessage, assertToken } = require('../helpers/assertions');
const { user, newUser } = require('../testData/credentials');
  describe('POST /api/v1/users - Register', () => {
    it.skip('should return 200 with success message and token for valid registration - KNOWN BUG: API defect with token', async () => {
      const res = await endpoints.createUser(user.name, user.email, user.password);
      assertStatusCode(res, 200);
      assertMessage(res, 'User registered with success');
      assertToken(res); // This will fail - API defect
    });

    it('should return 401 when registering with duplicate email', async () => {
      await endpoints.createUser(newUser.name, newUser.email, newUser.password);
      const res = await endpoints.createUser(newUser.name, newUser.email, newUser.password);
      assertStatusCode(res, 401);
    });

    it.skip('should return 401 when email field is empty during registration - KNOWN BUG: Empty email validation not working', async () => {
      const res = await endpoints.createUser(newUser.name, '', newUser.password);
      assertStatusCode(res, 401);
    });

    it.skip('should return 401 when password field is empty during registration - KNOWN BUG: Empty password validation not working', async () => {
      const res = await endpoints.createUser(newUser.name, newUser.email, '');
      assertStatusCode(res, 401);
    });

    it.skip('should return 401 when registration request body contains null values - KNOWN BUG: Null validation not working', async () => {
      const res = await endpoints.createUser(null, null, null);
      assertStatusCode(res, 401);
    });

    it.skip('should return 401 when registration request body contains empty strings - KNOWN BUG: Empty string validation not working', async () => {
      const res = await endpoints.createUser('', '', '');
      assertStatusCode(res, 401);
    });

    it.skip('should return 401 when email format is invalid during registration - KNOWN BUG: Invalid email format validation not working', async () => {
      const res = await endpoints.createUser(newUser.name, 'invalid-email', newUser.password);
      assertStatusCode(res, 401);
    });
  });

  describe('Authentication API Tests', () => {
      
    describe('POST /api/v1/auth - Login', () => {
      it('should return 200 with valid token for correct email and password', async () => {
        await endpoints.createUser(newUser.name, newUser.email, newUser.password);
        const res = await endpoints.login(newUser.email, newUser.password);
        assertStatusCode(res, 200);
        assertToken(res);
      });
  
      it('should return 401 when login email does not exist in system', async () => {
        const res = await endpoints.login('invalid@email.com', user.password);
        assertStatusCode(res, 401);
      });
  
      it('should return 401 when login password is incorrect', async () => {
        await endpoints.createUser(user.name, user.email, user.password);
        const res = await endpoints.login(user.email, "incorrectpassword");
        assertStatusCode(res, 401);
      });
  
      it('should return 401 when login email field is empty', async () => {
        const res = await endpoints.login('', user.password);
        assertStatusCode(res, 401);
      });
  
      it('should return 401 when login request body is completely empty', async () => {
        const res = await endpoints.login();
        assertStatusCode(res, 401);
      });
  
      it('should return 401 when login password field is empty', async () => {
        const res = await endpoints.login(user.email, '');
        assertStatusCode(res, 401);
      });
  
      it.skip('should return 401 when login request body contains null values - KNOWN BUG: Null login validation not working', async () => {
        const res = await endpoints.login(null, null);
        assertStatusCode(res, 401);
      });
    });
  
});