function assertStatusCode(response, code) {
    expect(response.status).toBe(code);
  }
  
  function assertMessage(response, expectedMessage) {
    expect(response.body.message).toBe(expectedMessage);
  }
  
  function assertToken(response) {
    expect(response.body.token).toBeDefined();
  }
  
  module.exports = { assertStatusCode, assertMessage, assertToken };  