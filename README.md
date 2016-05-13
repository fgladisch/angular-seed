## What is this?

My personal "Angular seed" (a template for angular projects).

## What is included?

* [Angular](https://angularjs.org/) (with routing)
* Testing with [Karma](http://karma-runner.github.io/) and [Jasmine](http://jasmine.github.io/) in [PhantomJS](http://phantomjs.org/)
* Code coverage report with [Istanbul](https://gotwarlost.github.io/istanbul/)
* Configuration files for [tern](http://ternjs.net/) und [JSCS](http://jscs.info/)
* [Gulpfile](http://gulpjs.com/) which runs tests and outputs minified JavaScript and CSS (see below)
* [Roboto font](https://www.google.com/fonts/specimen/Roboto) and the CSS to use it
* Example stuff

## Recommended Atom Plugins

* [atom-ternjs](https://atom.io/packages/atom-ternjs)
* [linter](https://atom.io/packages/linter)
* [linter-jshint](https://atom.io/packages/linter-jshint)

## Project structure

```sh
.
├── app
│   ├── images
│   │   ├── icon.png
│   │   └── logo.png
│   ├── scripts
│   │   ├── controllers
│   │   │   └── example.js
│   │   ├── services
│   │   │   └── example.js
│   │   └── app.js
│   ├── styles
│   │   ├── font
│   │   │   ├── Roboto-Bold.woff
│   │   │   ├── Roboto-Light.woff
│   │   │   ├── Roboto-Regular.woff
│   │   │   └── Roboto-Thin.woff
│   │   └── font.css
│   ├── templates
│   │   └── example.html
│   └── index.html
├── test
│   ├── controllers
│   │   └── example.js
│   └── services
│       └── example.js
├── .bowerrc
├── .gitignore
├── .tern-project
├── bower.json
├── gulpfile.js
├── karma.conf.js
├── package.json
└── README.md
```

## How do I use this?

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
.
├── bower_components
├── images
│   ├── icon.png
│   └── logo.png
├── scripts
│   └── app.min.js
├── styles
│   ├── font
│   │   ├── Roboto-Bold.woff
│   │   ├── Roboto-Light.woff
│   │   ├── Roboto-Regular.woff
│   │   └── Roboto-Thin.woff
│   └── app.min.css
├── templates
│   └── example.html
└── index.html
```

### Build, but don't minify JavaScript (for better debugging):
```sh
$ gulp debug
```

### Build on changes (... and don't minify JavaScript):
```sh
$ gulp watch
```

### Test:
```sh
$ karma start
```
