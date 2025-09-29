## Bug ID: HP01
**Title:** Product search returns irrelevant results that don't match search criteria

**Pre-condition:**
Navigate to the homepage
URL: http://automationpractice.multiformis.com/

**Steps to Reproduce:**
1. Navigate to the homepage
2. Enter "dress" in the search input field
3. Click the search button or press Enter
4. Review the search results displayed
5. Check if all returned products are relevant to "dress"

**Expected Result:** 
- All search results should be relevant to the search term "dress"
- Product names/titles should contain or be related to "dress"
- Only clothing items categorized as dresses should appear

**Actual Result:** 
- Search results include products that are not related to "dress"
- Irrelevant products appear in the search results list
- Search algorithm fails to filter results properly

**Severity:** High

**Priority:** P2

**Environment:** 
- OS: macOS 14.6
- Browser: Chrome 140.0.7339.208
- Device: MacBook Air (Apple Silicon)

**Attachments:** <img width="1464" height="819" alt="Screenshot 2025-09-29 at 2 44 41 PM" src="https://github.com/user-attachments/assets/e01e7cf5-eae2-413b-8689-ebe825ad17f1" />

**Test Case Reference:** HP01 in searchTest.js

---

## Bug ID: CU06
**Title:** Contact form accepts messages containing only whitespace characters

**Pre-condition:**
Navigate to the contact form page
URL: http://automationpractice.multiformis.com/index.php?controller=contact

**Steps to Reproduce:**
1. Navigate to the contact form page
2. Select a subject from the dropdown (e.g., "Customer service")
3. Enter a valid email address
4. Enter a message that contains only spaces (e.g., "    ")
5. Click the submit button
6. Check form validation behavior

**Expected Result:** 
- Form should reject the submission
- Error message should be displayed: "The message cannot be blank."
- User should remain on the contact form page

**Actual Result:** 
- Form accepts the submission with whitespace-only message
- No validation error is displayed for whitespace-only content
- Form may process the invalid submission

**Severity:** Medium

**Priority:** P3

**Environment:** 
- OS: macOS 14.6
- Browser: Chrome 140.0.7339.208
- Device: MacBook Air (Apple Silicon)

**Test Case Reference:** CU06 in contactFormTest.js

---

## Bug ID: REG01
**Title:** Authentication token isn't returned after valid user registration

**Pre-condition:**
```bash
# Ensure the API server is running on localhost:3000
curl -X POST http://localhost:3000/api/v1/users \
-H "Content-Type: application/json" \
-d '{"name": "testuser", "email": "user@gmail.com", "password": "user123"}'
```

**Steps to Reproduce:**
1. Call the Create User API endpoint with valid user data
2. Check the response body for authentication token
3. Verify the response includes a `token` field

**Expected Result:** 
- HTTP Status: 200
- Response body contains success message: "User registered with success"
- Response body contains a valid authentication token in the `token` field

**Actual Result:** 
- HTTP Status: 200 
- Response body contains success message 
- **Token is missing in the response body** 

**Severity:** Critical

**Priority:** P1

**Test Case Reference:** REG01 in auth.test.js

---

## Bug ID: REG03
**Title:** System accepts user registration with empty email address

**Pre-condition:**
```bash
# Ensure the API server is running on localhost:3000
curl -X POST http://localhost:3000/api/v1/users \
-H "Content-Type: application/json" \
-d '{"name": "testuser", "email": "", "password": "user123"}'
```

**Steps to Reproduce:**
1. Call the Create User API endpoint with empty email field
2. Check the response status code
3. Verify system validation behavior

**Expected Result:** 
- HTTP Status: 401 (Unauthorized)
- System should reject registration with validation error message

**Actual Result:** 
- System accepts the registration request without proper email validation
- No validation error is returned for empty email

**Severity:** High

**Priority:** P2

**Test Case Reference:** REG03 in auth.test.js


---

## Bug ID: REG04
**Title:** System accepts user registration with empty password

**Pre-condition:**
```bash
# Ensure the API server is running on localhost:3000
curl -X POST http://localhost:3000/api/v1/users \
-H "Content-Type: application/json" \
-d '{"name": "testuser", "email": "user@gmail.com", "password": ""}'
```

**Steps to Reproduce:**
1. Call the Create User API endpoint with empty password field
2. Check the response status code
3. Verify system validation behavior

**Expected Result:** 
- HTTP Status: 401 (Unauthorized)
- System should reject registration with validation error message

**Actual Result:** 
- System accepts the registration request without proper password validation
- No validation error is returned for empty password

**Severity:** High

**Priority:** P2

**Test Case Reference:** REG04 in auth.test.js

---
## Bug ID: REG05
**Title:** System accepts user registration with null values in required fields

**Pre-condition:**
```bash
# Ensure the API server is running on localhost:3000
curl -X POST http://localhost:3000/api/v1/users \
-H "Content-Type: application/json" \
-d '{"name": null, "email": null, "password": null}'
```

**Steps to Reproduce:**
1. Call the Create User API endpoint with null values for all required fields
2. Check the response status code
3. Verify system validation behavior

**Expected Result:** 
- HTTP Status: 401 (Unauthorized)
- System should reject registration with validation error message

**Actual Result:** 
- System accepts the registration request without proper null value validation
- No validation error is returned for null values

**Severity:** High

**Priority:** P2

**Test Case Reference:** REG05 in auth.test.js

---
## Bug ID: REG06
**Title:** System accepts user registration with empty strings in all required fields

**Pre-condition:**
```bash
# Ensure the API server is running on localhost:3000
curl -X POST http://localhost:3000/api/v1/users \
-H "Content-Type: application/json" \
-d '{"name": "", "email": "", "password": ""}'
```

**Steps to Reproduce:**
1. Call the Create User API endpoint with empty strings for all required fields
2. Check the response status code
3. Verify system validation behavior

**Expected Result:** 
- HTTP Status: 401 (Unauthorized)
- System should reject registration with validation error message

**Actual Result:** 
- System accepts the registration request without proper empty string validation
- No validation error is returned for empty strings

**Severity:** High

**Priority:** P2

**Test Case Reference:** REG06 in auth.test.js

---
## Bug ID: REG07
**Title:** System accepts user registration with invalid email format

**Pre-condition:**
```bash
# Ensure the API server is running on localhost:3000
curl -X POST http://localhost:3000/api/v1/users \
-H "Content-Type: application/json" \
-d '{"name": "testuser", "email": "invalid-email", "password": "user123"}'
```

**Steps to Reproduce:**
1. Call the Create User API endpoint with invalid email format (missing @ symbol and domain)
2. Check the response status code
3. Verify system validation behavior

**Expected Result:** 
- HTTP Status: 401 (Unauthorized)
- System should reject registration with email format validation error

**Actual Result:** 
- System accepts the registration request without proper email format validation
- No validation error is returned for invalid email format

**Severity:** Medium

**Priority:** P3

**Test Case Reference:** REG07 in auth.test.js

---

## Bug ID: LOG07
**Title:** User login system accepts null values for credentials

**Pre-condition:**
```bash
# Ensure the API server is running on localhost:3000
curl -X POST http://localhost:3000/api/v1/auth \
-H "Content-Type: application/json" \
-d '{"email": null, "password": null}'
```

**Steps to Reproduce:**
1. Call the User Login API endpoint with null values for email and password
2. Check the response status code
3. Verify system validation behavior

**Expected Result:** 
- HTTP Status: 401 (Unauthorized)
- System should reject login attempt with validation error message

**Actual Result:** 
- System accepts the login request without proper null value validation
- No validation error is returned for null credentials

**Severity:** Medium

**Priority:** P3

**Test Case Reference:** LOG07 in auth.test.js

---

## Bug ID: PATCH03
**Title:** User profile update accepts empty request body without validation

**Pre-condition:**
```bash
# First register and login to get authentication token
curl -X POST http://localhost:3000/api/v1/users \
-H "Content-Type: application/json" \
-d '{"name": "testuser", "email": "test@example.com", "password": "password123"}'

curl -X POST http://localhost:3000/api/v1/auth \
-H "Content-Type: application/json" \
-d '{"email": "test@example.com", "password": "password123"}'
```

**Steps to Reproduce:**
1. Get valid authentication token from login
2. Call the Update User API endpoint with empty request body
3. Check the response status code and validation behavior

**Expected Result:** 
- HTTP Status: 400 (Bad Request)
- System should reject update with validation error for empty body

**Actual Result:** 
- System accepts the update request without proper empty body validation
- No validation error is returned for empty request body

**Severity:** Medium

**Priority:** P3

**Test Case Reference:** PATCH03 in users.test.js

---

## Bug ID: PATCH04
**Title:** User profile update accepts invalid email format without validation

**Pre-condition:**
```bash
# First register and login to get authentication token
curl -X POST http://localhost:3000/api/v1/users \
-H "Content-Type: application/json" \
-d '{"name": "testuser", "email": "test@example.com", "password": "password123"}'

curl -X POST http://localhost:3000/api/v1/auth \
-H "Content-Type: application/json" \
-d '{"email": "test@example.com", "password": "password123"}'
```

**Steps to Reproduce:**
1. Get valid authentication token from login
2. Call the Update User API endpoint with invalid email format in request body
3. Check the response status code and validation behavior

**Expected Result:** 
- HTTP Status: 400 (Bad Request)
- System should reject update with email format validation error

**Actual Result:** 
- System accepts the update request without proper email format validation
- No validation error is returned for invalid email format

**Severity:** Medium

**Priority:** P3

**Test Case Reference:** PATCH04 in users.test.js

---

## Bug ID: PATCH05
**Title:** User profile update allows duplicate email addresses

**Pre-condition:**
```bash
# First register two users and login with one to get authentication token
curl -X POST http://localhost:3000/api/v1/users \
-H "Content-Type: application/json" \
-d '{"name": "user1", "email": "user1@example.com", "password": "password123"}'

curl -X POST http://localhost:3000/api/v1/users \
-H "Content-Type: application/json" \
-d '{"name": "user2", "email": "user2@example.com", "password": "password123"}'

curl -X POST http://localhost:3000/api/v1/auth \
-H "Content-Type: application/json" \
-d '{"email": "user2@example.com", "password": "password123"}'
```

**Steps to Reproduce:**
1. Register two different users in the system
2. Login with second user to get authentication token
3. Call the Update User API to change email to the first user's email
4. Check the response status code and validation behavior

**Expected Result:** 
- HTTP Status: 400 (Bad Request)
- System should reject update with duplicate email validation error

**Actual Result:** 
- System accepts the update request allowing duplicate email addresses
- No validation error is returned for duplicate email

**Severity:** High

**Priority:** P2

**Test Case Reference:** PATCH05 in users.test.js

---

## Bug ID: PATCH06
**Title:** User profile update accepts empty string values in request fields

**Pre-condition:**
```bash
# First register and login to get authentication token
curl -X POST http://localhost:3000/api/v1/users \
-H "Content-Type: application/json" \
-d '{"name": "testuser", "email": "test@example.com", "password": "password123"}'

curl -X POST http://localhost:3000/api/v1/auth \
-H "Content-Type: application/json" \
-d '{"email": "test@example.com", "password": "password123"}'
```

**Steps to Reproduce:**
1. Get valid authentication token from login
2. Call the Update User API endpoint with empty string as request body
3. Check the response status code and validation behavior

**Expected Result:** 
- HTTP Status: 400 (Bad Request)
- System should reject update with validation error for empty fields

**Actual Result:** 
- System accepts the update request without proper empty field validation
- No validation error is returned for empty string fields

**Severity:** Medium

**Priority:** P3

**Test Case Reference:** PATCH06 in users.test.js

---

