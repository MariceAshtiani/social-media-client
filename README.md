# Workflow Course Assignment


https://mariceashtiani.github.io/social-media-client/


[![Automated Unit Testing](https://github.com/MariceAshtiani/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/MariceAshtiani/social-media-client/actions/workflows/unit-test.yml)
[![Automated E2E Testing](https://github.com/MariceAshtiani/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/MariceAshtiani/social-media-client/actions/workflows/e2e-test.yml)
[![Deploy static content to Pages](https://github.com/MariceAshtiani/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/MariceAshtiani/social-media-client/actions/workflows/pages.yml)



## Description

This Course Assignment is to improve the quality of an existing environment by establishing useful workflows that make the development process more efficient. 


## Built With

### Developer platform

- ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
- ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

### Code Editor

- ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

### Language

- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
  - ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
  -	![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)


## Getting Started


1. Clone the repo

```bash
git clone --branch workflow https://github.com/MariceAshtiani/social-media-client.git
```

2. Install dependencies

```bash
npm i
```

3. Run
```bash
npm run build
```

## What is done
### Configured workflows/hooks
- Run prettier on commit
- Run ESLint on commit
- Run Jest
- Run Cypress
- Deploy to pages on merge
- Automaticly run tests on merge

### Tested with unit tests
- create.js --> The user can create a post with valid input
- login.js --> The user can log in with valid credentials
- logout.js --> The user can logout with the token cleared from local storage

### Testet with end-to-end tests
- login.cy.js --> The user can log in with valid credentials
- loginfail.cy.js --> The user cannot log in with invalid credentials or non-registered credentials
- logout.cy.js --> The user can log out


## Testing
To run tests, type the following commands in the terminal:

#### Run unit-tests
```bash
npm run test-unit
```

#### Run e2e-tests
```bash
npm run test-e2e 
```

To run the e2e tests only in the CLI, type:
```bash
npm run e2e-test-cli
```

## Contact

- [<img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white">](https://discordapp.com/users/900117499662708807)

- [<img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white">](mailto:marice6795@gmail.com)
