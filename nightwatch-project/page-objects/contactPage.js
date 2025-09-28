const { getFilePath } = require('../helpers/fileHelper');
const SUBJECTS = require('../test-data/subjects');
const assert = require('../helpers/assertionHelper');

module.exports = {
  url: 'http://automationpractice.multiformis.com/index.php?controller=contact',
  elements: {
    subjectHeading: 'select[name="id_contact"]',
    emailField: '#email',
    orderReference: '#id_order',
    fileUpload: '#fileUpload',
    messageField: '#message',
    submitButton: '#submitMessage',
    successAlert: '.alert-success',
    errorAlert: '.alert-danger'
  },
  commands: [{
    fillForm(subject, email, orderRef, fileName, message) {
      const subjectMap = {
        [SUBJECTS.CUSTOMER_SERVICE]: '2',
        [SUBJECTS.WEBMASTER]: '1'
      };

      if (subject) {
        const value = subjectMap[subject];
        if (!value) throw new Error(`Unknown subject: ${subject}`);
        this.click('@subjectHeading');
        this.waitForElementVisible(`select[name="id_contact"] option[value="${value}"]`, 1000);
        this.click(`select[name="id_contact"] option[value="${value}"]`);
      }

      if (email) this.setValue('@emailField', email);
      if (orderRef) this.setValue('@orderReference', orderRef);
      if (fileName) this.setValue('@fileUpload', getFilePath(fileName));
      if (message) this.setValue('@messageField', message);

      return this;
    },

    submit() {
      return this.click('@submitButton');
    },

    assertSuccessMessage() {
      assert.assertContainsText(this, '@successAlert', 'Your message has been successfully sent to our team.');
      return this;
    },

    assertInvalidEmailError() {
      assert.assertContainsText(this, '@errorAlert', 'Invalid email address.');
      return this;
    },

    assertBlankMessageError() {
      assert.assertContainsText(this, '@errorAlert', 'The message cannot be blank.');
      return this;
    },

    assertNoSubjectError() {
      assert.assertContainsText(this, '@errorAlert', 'Please select a subject from the list provided.');
      return this;
    },

    assertContactPageLoaded() {
      this.waitForElementVisible('@emailField', 10000);
      assert.assertVisible(this, '@emailField');
      assert.assertVisible(this, '@messageField');
      assert.assertVisible(this, '@submitButton');
      return this;
    },

    assertFormFieldsVisible() {
      assert.assertVisible(this, '@subjectHeading');
      assert.assertVisible(this, '@emailField');
      assert.assertVisible(this, '@orderReference');
      assert.assertVisible(this, '@fileUpload');
      assert.assertVisible(this, '@messageField');
      return this;
    }
  }],
};