# todomvc-with-delay [![CircleCI][ci-badge]][ci-url]

## Requirements ⚙️

- Any computer: Mac, Windows, Linux
- [Node 6+](https://nodejs.org/)
- [git](https://git-scm.com)

In order to get the code and install dependencies

```shell
git clone git@github.com:bahmutov/todomvc-with-delay.git
cd todomvc-with-delay
npm install
```

## Application 💾

[Vue.js](https://vuejs.org/) + [Vuex](https://vuex.vuejs.org/) + REST server application that we are going to test is in the folder `todomvc`. This application and its full testing is described in [this blog post](https://www.cypress.io/blog/2017/11/28/testing-vue-web-application-with-vuex-data-store-and-rest-backend/).

The application starts several seconds _AFTER_ the page loads to simulate slowly loading app.

[ci-badge]: https://circleci.com/gh/bahmutov/todomvc-with-delay.svg?style=svg
[ci-url]: https://circleci.com/gh/bahmutov/todomvc-with-delay
