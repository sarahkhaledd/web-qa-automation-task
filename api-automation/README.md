# API Automation Test Suite

A comprehensive test suite for testing REST API endpoints using Jest and Supertest.

## 📋 Requirements

See `requirements.txt` for detailed dependency information.

### System Requirements
- **Node.js**: 18.x or higher
- **npm**: 10.x or higher
- **Operating System**: macOS, Linux, or Windows

### Dependencies
- **Jest**: Testing framework
- **Supertest**: HTTP assertions
- **Faker**: Random data generation
- **Dotenv**: Environment variable management
- **Mock User Auth**: Mock API server

## 🚀 Quick Start

```bash
# Install and run tests
npm install && npm run dev && npm test

### 2. Environment Setup
Create a `.env` file in the project root:
```env
BASE_URL=http://localhost:3000
ADMIN_KEY=your-admin-key-here
```

### 3. Run Tests
```bash
#Run the server
npm run dev

# Export the api base url
API_BASE_URL=http://localhost:3000 
ADMIN_KEY=keyadmin123

# Run all tests
npm test

# Run specific test suites
npm test auth.test.js
npm test users.test.js
npm test admin.test.js
npm test integration.test.js
```

### 4. View Test Reports
After running tests, an HTML report is generated in the `reports/` directory:

```bash
# Open the HTML test report
open reports/api-test-report.html
```

The HTML report includes:
- Test execution summary
- Pass/fail status for each test
- Execution time
- Error details for failed tests
- Test coverage information

## 📁 Project Structure

```
api-automation/
├── tests/                    # Test files
│   ├── auth.test.js         # Authentication tests
│   ├── users.test.js        # User CRUD tests
│   ├── admin.test.js        # Admin operations tests
│   └── integration.test.js  # End-to-end tests
├── helpers/                  # Test utilities
│   ├── assertions.js        # Custom assertions
│   ├── base_requests.js     # HTTP request helpers
│   └── endpoints.js         # API endpoint functions
├── testData/                # Test data
│   └── credentials.js       # User credentials
├── utils/                   # Utilities
│   └── data_generator.js    # Random data generation
├── constants/               # Constants
│   └── routes.js           # API routes
├── reports/                # Test reports
│   └── api-test-report.html # HTML test report
└── requirements.txt        # Dependencies list
```

## 🧪 Test Categories

### Authentication Tests (`auth.test.js`)
- User registration with validation
- User login with various scenarios
- Token generation and validation

### User CRUD Tests (`users.test.js`)
- Create user operations
- Read user data
- Update user information
- Delete user accounts
- Token-based authentication

### Admin Tests (`admin.test.js`)
- Admin-only operations
- Delete all users functionality
- Admin key validation

### Integration Tests (`integration.test.js`)
- Complete user lifecycle flows
- Cross-endpoint dependencies
- Token refresh scenarios

## 🔍 Test Features

- **Random Data Generation**: Uses Faker.js for dynamic test data
- **Token Management**: Automatic token refresh between tests
- **API Defect Documentation**: Failing tests document API issues
- **Comprehensive Coverage**: Valid, invalid, and edge case scenarios
- **HTML Reporting**: Detailed test reports generated

## 🛠️ Development

### Adding New Tests
1. Create test file in `tests/` directory
2. Follow naming convention: `should [expected behavior] when [condition]`
3. Use existing helpers in `helpers/` directory
4. Include both positive and negative test cases

### Custom Assertions
Available in `helpers/assertions.js`:
- `assertStatusCode(response, expectedCode)`
- `assertMessage(response, expectedMessage)`
- `assertToken(response)`

## 📝 Notes

- Tests use `beforeEach` to ensure fresh tokens for each test
- Random data prevents test conflicts and improves coverage
- API defects are intentionally left as failing tests for documentation
- Test reports are generated in HTML format in `reports/` directory
