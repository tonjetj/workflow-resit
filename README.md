# Workflow Resit

This is a resit for Workflow. _All_ required configurations, updates and work will be uploaded to this branch.

The master/main branch of this repository has been forked from this [link](https://github.com/noroffFEU/social-media-client) as required in the Workflow CA at Noroff.

## Description

The goal of this resit is using skills from the course Workflow.

The existing application package must feature:

- A front-end login form connected to an API JWT endpoint
- A front-end logout button connected to an API JWT endpoint
- Front-end CRUD functionality for at least one object type
- A front-end profile

## Tasks for the CA

### Basics

- [x] Fork the project repository to your GitHub account.
- [x] Create a new branch called "workflow".
- [] Create tests to cover the required test cases.

### Configuration

- [x] Configure the project to run ESlint on commit.
- [x] Configure the project to run Prettier on commit.
- [x] Configure the project with Commit Hooks.
- [] Configure the project with GitHub Actions for build/deploy if required.
- [x] Configure the project with Jest.
- [x] Configure the project with Cypress.

### Project Changes

- [x] Record bugs found during this process (steps above) in the Issues Tab.
- [x] README.md file is updated to include new configuration info and workflow status badges.
- [] All known bugs have been communicated in the Issues tab.

### Delivery

- [] Create a pull request from workflow into the default branch.
- [] Submit a link to the open pull request on Moodle.

### Workflow Tests

#### Unit Testing

- [] The login function stores a token in browser storage when a user is logged in with valid credentials.
- [] The logout function clear the token from browser storage.

#### E2E Testing

- [] The user can log in with valid credentials.
- [] The user can't log in without valid credentials and is shown a message when log in fails.
- [] The user is able to log out with the log out button.

#### Badges

(workflow branch)
[![Deploy static content to Pages](https://github.com/tonjetj/workflow-resit/actions/workflows/pages.yml/badge.svg?branch=workflow)](https://github.com/tonjetj/workflow-resit/actions/workflows/pages.yml)
(master branch)
[![Deploy static content to Pages](https://github.com/tonjetj/workflow-resit/actions/workflows/pages.yml/badge.svg?branch=master)](https://github.com/tonjetj/workflow-resit/actions/workflows/pages.yml)
