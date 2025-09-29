const SUBJECTS = require('../test-data/subjects');

describe('Contact Us Form Tests', function() {
  let contact;

  beforeEach(browser => {
    contact = browser.page.contactPage();
    contact.navigate();
    contact.assertContactPageLoaded();
  });

  after(browser => browser.end());

  it('CU01 - Complete submission form with all fields should be accepted', function() {
    contact.fillForm(
      SUBJECTS.CUSTOMER_SERVICE,
      'user@example.com',
      'REF123',
      'test-file.txt',
      'This is a valid message'
    ).submit();

    contact.assertSuccessMessage();
  });

  it('CU02 - Missing subject heading should show error', function() {
    contact.fillForm(
      null,
      'user@example.com',
      'REF123',
      null,
      'Test message'
    ).submit();

    contact.assertNoSubjectError();
  });

  it('CU03 - Missing email should show error', function() {
    contact.fillForm(
      SUBJECTS.CUSTOMER_SERVICE,
      null,
      'REF123',
      null,
      'Test message'
    ).submit();

    contact.assertInvalidEmailError();
  });

  it('CU04 - Invalid email format should show error', function() {
    contact.fillForm(
      SUBJECTS.WEBMASTER,
      'invalid-email',
      null,
      null,
      'Test message'
    ).submit();

    contact.assertInvalidEmailError();
  });

  it('CU05 - Blank message should show error', function() {
    contact.fillForm(
      SUBJECTS.CUSTOMER_SERVICE,
      'user@example.com',
      null,
      null,
      null
    ).submit();

    contact.assertBlankMessageError();
  });

  // Known bug: Form accepts messages with only spaces
  it('CU06 - should not accept message with only spaces - KNOWN BUG', function() {
    contact.fillForm(
        SUBJECTS.CUSTOMER_SERVICE,
        'user@example.com',
        'REF123',
        null,
        '    '  
    ).submit();

    contact.assertBlankMessageError();  
  });

  it('CU07 - Empty order reference should be accepted', function() {
    contact.fillForm(
      SUBJECTS.CUSTOMER_SERVICE,
      'user@example.com',
      null,
      null,
      'Message without order ref'
    ).submit();

    contact.assertSuccessMessage();
  });

  it('CU08 -  File upload should be accepted', function() {
    contact.fillForm(
      SUBJECTS.WEBMASTER,
      'user@example.com',
      'REF456',
      'test-file.txt',
      'Message with file upload'
    ).submit();

    contact.assertSuccessMessage();
  });
});