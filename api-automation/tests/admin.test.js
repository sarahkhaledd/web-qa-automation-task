const endpoints = require('../helpers/endpoints');
const { assertStatusCode, assertMessage } = require('../helpers/assertions');

describe('Admin API Tests', () => {
  describe('DELETE /api/v1/all-users - Delete All Users', () => {
    it('should return 200 with success message when deleting all users with valid admin key', async () => {
      const res = await endpoints.deleteAllUsers();
      assertStatusCode(res, 200);
      assertMessage(res, 'Users deleted with success');
    });

    it('should return 403 when delete all users request uses invalid admin key', async () => {
      const res = await endpoints.deleteAllUsers('invalid-admin-key');
      assertStatusCode(res, 403);
    });

    it('should return 403 when delete all users request has empty admin key', async () => {
      const res = await endpoints.deleteAllUsers('');
      assertStatusCode(res, 403);
    });

    it('should return 403 when delete all users request has null admin key', async () => {
      const res = await endpoints.deleteAllUsers(null);
      assertStatusCode(res, 403);
    });

    it('should return 403 when delete all users request uses wrong admin key format', async () => {
      const res = await endpoints.deleteAllUsers('12345');
      assertStatusCode(res, 403);
    });

    it('should return 403 when delete all users request uses case sensitive admin key', async () => {
      const res = await endpoints.deleteAllUsers('ADMIN_KEY');
      assertStatusCode(res, 403);
    });
    
  });
});
