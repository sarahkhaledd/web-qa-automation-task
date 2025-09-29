describe('Homepage Search Tests', function() {
    let home; 
  
    beforeEach(browser => {
      home = browser.page.homePage();
      home.navigate();
      home.assertHomePageLoaded();
    });
  
    after(browser => browser.end());
  
    // Known bug: Search results include irrelevant products
    it("HP01 - Search for 'dress' should return only relevant products - KNOWN BUG", function() {
      home.searchForProduct('dress');
      
      home.assertSearchResultsLoaded();
      home.assertSearchTermMatches('dress');
      home.assertSearchResultsFound();
      home.assertProductCardsVisible();
      home.checkSearchRelevance('Dress');
    });
    
    it('HP02 - Search term should persist in URL after page refresh', function(browser) {
      home.searchForProduct('dress');
      home.assertUrlContains('dress');
      home.api.refresh();
      home.assertUrlContains('dress');
    });
    
  
    it("HP03 - Search for 'dress' should update URL with search term", function() {
      home.searchForProduct('dress');
      home.assertUrlContains('dress');
    });  
  
    it('HP04 - Search for non-existent product should show no results', function() {
      home.searchForProduct('nonexistentproduct123');
      
      home.assertSearchResultsLoaded();
      home.assertNoSearchResults();
      home.assertNoProductCards();
    });
  
    it('HP05 - Search for empty term should remain on homepage', function() {
      home.searchForProduct('');
      
      home.assertSearchInputVisible();
    });
  
    it('HP06 - Search with XSS payload should be sanitized', function() {
      const xssPayload = '<script>alert("XSS")</script>';
      home.searchForProduct(xssPayload);
  
      home.assertSearchResultsLoaded();
      home.checkXSSSanitization();
      home.assertSearchInputVisible();
    });
  });
  