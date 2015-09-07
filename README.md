## What is this?

My personal "Angular seed" (a template for angular projects).

## What is included?

* [Angular](https://angularjs.org/) (with routing)
* Testing with [Karma](http://karma-runner.github.io/) and [Jasmine](http://jasmine.github.io/) in [PhantomJS](http://phantomjs.org/)
* Code coverage report with [Istanbul](https://gotwarlost.github.io/istanbul/)
* [Brackets](http://brackets.io/) configuration files for [JSHint](http://jshint.com/) und [JSCS](http://jscs.info/) linting
* [Gulpfile](http://gulpjs.com/) which runs tests and outputs minified JavaScript and CSS (see below)
* [Roboto font](https://www.google.com/fonts/specimen/Roboto) and the CSS to use it
* Example stuff

```sh
.
├── css
│   ├── app.css
│   └── font.css
├── font
│   ├── Roboto-Bold.woff
│   ├── Roboto-Light.woff
│   ├── Roboto-Regular.woff
│   └── Roboto-Thin.woff
├── img
│   ├── icon.png
│   └── logo.png
├── js
│   ├── controllers
│   │   └── example.js
│   ├── services
│   │   └── example.js
│   └── app.js
├── templates
│   └── example.html
├── test
│   ├── controllers
│   │   └── example.js
│   └── services
│       └── example.js
├── .brackets.json
├── .gitignore
├── .jscsrc
├── bower.json
├── gulpfile.js
├── index.html
├── karma.conf.js
├── package.json
└── README.md
```

## Cool! How do I use this?

### Install dependencies:
```sh
  $ npm install
  $ bower install
```

### Build:
```sh
  $ gulp
```

**Result:**

```sh
build/
├── bower_components
│   └── *
├── css
│   └── app.min.css
├── font
│   ├── Roboto-Bold.woff
│   ├── Roboto-Light.woff
│   ├── Roboto-Regular.woff
│   └── Roboto-Thin.woff
├── img
│   ├── icon.png
│   └── logo.png
├── js
│   └── app.min.js
├── templates
│   └── example.html
└── index.html
```

### Test:
```sh
  $ gulp test
```
