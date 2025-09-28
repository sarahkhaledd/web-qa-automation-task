module.exports = {
    assertVisible(page, selector) {
      page.expect.element(selector).to.be.visible;
      return page;
    },
  
    assertNotVisible(page, selector) {
      page.expect.element(selector).to.not.be.visible;
      return page;
    },
  
    assertPresent(page, selector) {
      page.expect.element(selector).to.be.present;
      return page;
    },
  
    assertNotPresent(page, selector) {
      page.expect.element(selector).to.not.be.present;
      return page;
    },
  
    assertContainsText(page, selector, text) {
      page.expect.element(selector).text.to.contain(text);
      return page;
    },
  
    assertNotContainsText(page, selector, text) {
      page.expect.element(selector).text.to.not.contain(text);
      return page;
    },
  
    assertMatchesText(page, selector, regex) {
      page.expect.element(selector).text.to.match(regex);
      return page;
    },
  
    assertHasAttribute(page, selector, attribute, value) {
      page.expect.element(selector).attribute(attribute).to.equal(value);
      return page;
    },
  
    assertContainsAttribute(page, selector, attribute, value) {
      page.expect.element(selector).attribute(attribute).to.contain(value);
      return page;
  
    },
  
    assertUrlContains(page, text) {
      page.expect.url().to.contain(text);
      return page;
    },
  
    assertTitleContains(page, text) {
      page.expect.title().to.contain(text);
      return page;
    },
  
    assertTitleEquals(page, text) {
      page.expect.title().to.equal(text);
      return page;
    }
  };  