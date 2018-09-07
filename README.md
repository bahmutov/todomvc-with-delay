# todomvc-with-delay [![CircleCI][ci-badge]][ci-url] [![renovate-app badge][renovate-badge]][renovate-app]

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
[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/

### Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2018

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](https://glebbahmutov.com)
* [blog](https://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/todomvc-with-delay/issues) on Github

## MIT License

Copyright (c) 2018 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
