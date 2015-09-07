## What is this?

My personal "Angular seed" (a template for angular projects).

## What is included?

* Angular (with routing)
* Testing with Karma, Jasmine, PhantomJS and Istanbul (code coverage report)
* Brackets configuration files for JSHint und JSCS linting
* Gulpfile which runs test and outputs minified css and javascript (see below)
* Roboto font and the CSS to use it
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
