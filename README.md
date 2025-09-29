# Web QA Automation Task 2025
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/sarahkhaledd/web-qa-automation-task/tree/main.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/sarahkhaledd/web-qa-automation-task/tree/main)

This repository contains the Web QA Automation Technical Task 2025.
It demonstrates automation coverage for both UI (NightwatchJS) and API (Supertest with mock-user-auth).

> **⚠️ Important Note:** Known bugs are kept in main branch and documented. For a green CI pipeline demonstration, use branch `ci-green`.

## 🚀 Project Overview

This project showcases a complete testing solution covering:

- **REST API Testing** with Jest and Supertest
- **End-to-End UI Testing** with Nightwatch.js  
- **Comprehensive Bug Reporting** with detailed documentation
- **CI/CD Integration** with CircleCI
- **HTML Test Reports** for both API and UI tests

## 📁 Project Structure

```
web-qa-automation-task/
├── api-automation/          # REST API Testing Suite
├── nightwatch-project/      # E2E UI Testing Suite
├── documentation/           # Project Documentation
├── bug-reporting.md        # Comprehensive Bug Report
└── .circleci/              # CI/CD Configuration
```

## ⚡ Quick Start

### Prerequisites
- Node.js 18.x+, npm 10.x+, Chrome browser

### Setup & Run
```bash
# Clone repository
git clone https://github.com/sarahkhaledd/web-qa-automation-task.git
cd web-qa-automation-task

#Set custom URLs for CI
API_BASE_URL=http://localhost:3000 WEB_BASE_URL=http://automationpractice.multiformis.com ADMIN_KEY=keyadmin123

# API Tests
cd api-automation && npm install && npm run dev && npm test

# UI Tests  
cd ../nightwatch-project && npm install && npm test
```

## 📋 Detailed Documentation

| Component | Description | Documentation |
|-----------|-------------|---------------|
| **API Testing** | REST API automation with Jest + Supertest | [📖 API README](api-automation/README.md) |
| **UI Testing** | E2E automation with Nightwatch.js | [📖 UI README](nightwatch-project/README.md) |
| **Test Cases** | Detailed test specifications | [📄 Test Cases Document](documentation/Test%20Cases%20Document.docx) |
| **Bug Reports** | Comprehensive bug documentation | [🐛 Bug Report](bug-reporting.md) |

## 📊 Test Reports

### HTML Reports Generated
- **API Reports**: `api-automation/reports/api-test-report.html`
- **UI Reports**: `nightwatch-project/tests_output/nightwatch-html-report/index.html`

### Report Examples
<img width="803" height="736" alt="Screenshot 2025-09-27 at 11 35 25 PM" src="https://github.com/user-attachments/assets/b615327f-fc46-450e-9030-0a77db68e834" />

--------

<img width="630" height="566" alt="Screenshot 2025-09-28 at 3 03 00 PM" src="https://github.com/user-attachments/assets/60fab990-34af-4c9f-a974-5c27c9c72cee" />


## 🐛 Bug Summary

**13 bugs identified** across the application:
- **Critical**: 1 bug (Authentication token missing)
- **High**: 6 bugs (Input validation failures)  
- **Medium**: 6 bugs (UI and search issues)

📋 **Full Details**: [Bug Reporting Document](https://github.com/sarahkhaledd/web-qa-automation-task/blob/main/documentation/Bugs.md)

## 🔄 CI/CD Integration

- **Build Status**: [![CircleCI](https://dl.circleci.com/status-badge/img/gh/sarahkhaledd/web-qa-automation-task/tree/main.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/sarahkhaledd/web-qa-automation-task/tree/main)
- **Branches**: 
  - `main`: Contains known bugs for documentation
  - `ci-green`: Clean branch for green pipeline demonstration

