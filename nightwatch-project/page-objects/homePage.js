const assert = require('../helpers/assertionHelper');

module.exports = {
  url: function() {
    return this.api.globals.baseUrl + '/';
  },
  
  elements: {
    searchInput: '#search_query_top',
    searchButton: 'button[name="submit_search"]',
    searchResultsHeading: '.page-heading.product-listing',
    searchTerm: '.page-heading.product-listing .lighter',
    resultsCounter: '.heading-counter',
    productCards: '.product_list .ajax_block_product',
    productNames: '.product_list .product-name',
    allProductNames: '.product_list .product-name a',
    productPrices: '.product_list .price'
  },
  
  commands: [{
    searchForProduct(searchTerm) {
      this.setValue('@searchInput', searchTerm);
      this.click('@searchButton');
      return this;
    },
    
    getSearchResultsCount() {
      return this.getText('@resultsCounter');
    },
    
    getProductNames() {
      return this.getText('@productNames');
    },
    
    getAllProductNames() {
      return this.getText('@allProductNames');
    },
    
    getIndividualProductNames() {
      return this.elements('@allProductNames');
    },
    
    checkSearchRelevance(searchKeyword) {
      this.waitForElementVisible('.product_list', 5000);
      this.api.elements('css selector', '.product_list .ajax_block_product', (results) => {
        const totalProducts = results.value.length;
        console.log(`Analyzing ${totalProducts} search results for relevance`);
        
        for (let productIndex = 1; productIndex <= totalProducts; productIndex++) {
          this.api.verify.attributeContains(
            `#product_list > li:nth-child(${productIndex}) > div > div.right-block > h5 > a`,
            'title',
            searchKeyword,
            (verificationResult) => {
              if (verificationResult.value === false) {
                console.log(`Product ${productIndex} is not relevant to '${searchKeyword}' search`);
                this.api.getAttribute(`#product_list > li:nth-child(${productIndex}) > div > div.right-block > h5 > a`, 'title', (titleResult) => {
                  console.log(`Irrelevant product ${productIndex}: "${titleResult.value}"`);
                  if (!titleResult.value.toLowerCase().includes(searchKeyword.toLowerCase())) {
                    browser.assert.fail(`SEARCH BUG: Product ${productIndex} "${titleResult.value}" is not related to '${searchKeyword}'`);
                  }
                });
              } else {
                console.log(`Product ${productIndex} is relevant to '${searchKeyword}' search`);
              }
            }
          );
        }
      });
      return this;
    },
    
    checkXSSSanitization() {
      this.api.elements('css selector', '.page-heading.product-listing .lighter', (result) => {
        if (result.value.length > 0) {
          assert.assertNotContainsText(this, '@searchTerm', '<script>');
          assert.assertNotContainsText(this, '@searchTerm', 'alert');
        } else {
          console.log('XSS payload properly sanitized - search term element not displayed');
        }
      });
      return this;
    },

    assertSearchInputVisible() {
      assert.assertVisible(this, '@searchInput');
      return this;
    },

    assertSearchButtonVisible() {
      assert.assertVisible(this, '@searchButton');
      return this;
    },

    assertSearchResultsLoaded() {
      assert.assertVisible(this, '@searchResultsHeading');
      assert.assertVisible(this, '@resultsCounter');
      return this;
    },

    assertSearchTermMatches(term) {
      assert.assertMatchesText(this, '@searchTerm', new RegExp(term, 'i'));
      return this;
    },

    assertSearchResultsFound() {
      assert.assertContainsText(this, '@resultsCounter', 'results have been found');
      return this;
    },

    assertNoSearchResults() {
      assert.assertContainsText(this, '@resultsCounter', '0 results have been found');
      return this;
    },

    assertProductCardsVisible() {
      assert.assertPresent(this, '@productCards');
      assert.assertVisible(this, '@productCards');
      return this;
    },

    assertNoProductCards() {
      assert.assertNotPresent(this, '@productCards');
      return this;
    },

    assertHomePageLoaded() {
      assert.assertVisible(this, '@searchInput');
      assert.assertVisible(this, '@searchButton');
      return this;
    },

    assertUrlContains(text) {
      assert.assertUrlContains(this, text);
      return this;
    }
  }]
};