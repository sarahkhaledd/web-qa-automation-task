describe('Homepage Search Tests', function() {
    let home; 
  
    beforeEach(browser => {
      home = browser.page.homePage();
      home.navigate();
      home.assertHomePageLoaded();
    });
  
    after(browser => browser.end());
  
    it.skip("Search for 'dress' should return only relevant products - KNOWN BUG", function() {
      home.searchForProduct('dress');
      
      home.assertSearchResultsLoaded();
      home.assertSearchTermMatches('dress');
      home.assertSearchResultsFound();
      home.assertProductCardsVisible();
      home.checkSearchRelevance('Dress');
    });
    
    it('Search term should persist in URL after page refresh', function(browser) {
      home.searchForProduct('dress');
      home.assertUrlContains('dress');
      home.api.refresh();
      home.assertUrlContains('dress');
    });
    
  
    it("Search for 'dress' should update URL with search term", function() {
      home.searchForProduct('dress');
      home.assertUrlContains('dress');
    });  
  
    it('Search for non-existent product should show no results', function() {
      home.searchForProduct('nonexistentproduct123');
      
      home.assertSearchResultsLoaded();
      home.assertNoSearchResults();
      home.assertNoProductCards();
    });
  
    it('Search for empty term should remain on homepage', function() {
      home.searchForProduct('');
      
      home.assertSearchInputVisible();
    });
  
    it('Search with XSS payload should be sanitized', function() {
      const xssPayload = '<script>alert("XSS")</script>';
      home.searchForProduct(xssPayload);
  
      home.assertSearchResultsLoaded();
      home.checkXSSSanitization();
      home.assertSearchInputVisible();
    });
  });
  