# Nightwatch E2E Testing Project

A comprehensive end-to-end testing suite built with Nightwatch.js for automated web application testing.

## 🏗️ Project Structure

```
nightwatch-project/
├── helpers/                    # Utility functions and helpers
│   ├── assertionHelper.js     # Custom assertion methods
│   └── fileHelper.js          # File handling utilities
├── html-reporter.js           # HTML report configuration
├── logs/                      # Test execution logs
├── nightwatch.conf.js         # Nightwatch configuration
├── page-objects/              # Page Object Model implementations
│   ├── contactPage.js         # Contact form page object
│   └── homePage.js            # Homepage search page object
├── test-data/                 # Test data and fixtures
│   ├── subjects.js            # Contact form subject options
│   └── test-file.txt          # Sample file for upload tests
├── tests/                     # Test specifications
│   ├── contactFormTest.js     # Contact form validation tests
│   └── searchTest.js          # Search functionality tests
├── tests_output/              # Generated test reports and results
├── package.json               # Node.js dependencies and scripts
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- Chrome browser (for default configuration)
- Safari browser (optional, for Safari testing)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd nightwatch-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Verify installation:**
   ```bash
   npx nightwatch --help
   ```

## 📦 Dependencies

### Main Dependencies
- **nightwatch** (^3.12.2) - Core testing framework
- **chromedriver** (^140.0.4) - Chrome WebDriver for browser automation
- **nightwatch-html-reporter** (^2.0.6) - HTML report generation
- **mochawesome** (^7.1.4) - Additional reporting capabilities

### Development Dependencies
All dependencies are development dependencies as this is a testing project.

## 🧪 Running Tests

### Basic Commands

```bash
# Run all tests
npx nightwatch

# Run specific test files
npx nightwatch tests/contactFormTest.js    # Contact form tests only
npx nightwatch tests/searchTest.js         # Search functionality tests only

# Run tests in different browsers
npx nightwatch --env chrome     # Chrome browser (default)
npx nightwatch --env safari     # Safari browser
npx nightwatch --headless       # Headless Chrome mode
```

### Advanced Usage

```bash
# Run tests with verbose output
npx nightwatch --verbose

# Run tests with debug information
npx nightwatch --verbose --debug

# Generate HTML reports explicitly
npx nightwatch --reporter ./html-reporter.js

# Alternative: You can also use npm scripts if preferred
npm test                 # Same as npx nightwatch
npm run test:contact     # Same as npx nightwatch tests/contactFormTest.js
npm run test:search      # Same as npx nightwatch tests/searchTest.js
```
## 📊 Reports

Test reports are **automatically generated** every time you run tests in the `tests_output/` directory:
- **HTML Reports**: Interactive HTML reports with test results (`tests_output/report.html`)
- **JSON Reports**: Machine-readable test results
- **JUnit Reports**: XML format for CI/CD integration

## 🔧 Configuration

### Browser Configuration
The project supports multiple browsers configured in `nightwatch.conf.js`:
- **Chrome** (default): Uses chromedriver
- **Safari**: Uses safaridriver (macOS only)

### Page Objects
The project uses the Page Object Model pattern:
- `homePage.js`: Homepage search functionality
- `contactPage.js`: Contact form interactions

### Custom Helpers
- `assertionHelper.js`: Custom assertion methods for cleaner test code
- `fileHelper.js`: File path resolution for upload tests

## 📝 Writing New Tests

### Adding a New Test File
1. Create test file in `tests/` directory
2. Follow the existing naming convention: `featureNameTest.js`
3. Use the describe/it structure for test organization

### Adding a New Page Object
1. Create page object in `page-objects/` directory
2. Define elements, commands, and assertions
3. Import and use in test files

### Example Test Structure
```javascript
describe('Feature Tests', function() {
  const page = browser.page.pageName();

  beforeEach(browser => {
    page.navigate();
  });

  after(browser => browser.end());

  it('should test specific functionality', function() {
    // Test implementation
  });
});
```