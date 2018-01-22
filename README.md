[![Build Status](https://travis-ci.org/4so-fourseasons/react-redux-cookiecutter.svg?branch=master)](https://travis-ci.org/4so-fourseasons/react-redux-cookiecutter)

<img src="img/web.png" width="300px" />

# ToC

<!-- vim-markdown-toc GFM -->

* [react-redux-cookiecutter](#react-redux-cookiecutter)
    * [Installing / Getting started](#installing--getting-started)
    * [Developing](#developing)
        * [Built With](#built-with)
    * [Versioning](#versioning)

<!-- vim-markdown-toc -->

# react-redux-cookiecutter

This is our template to quickly scaffold new React projects.


## Installing / Getting started

To get started you first need to install Python and [Cookiecutter](https://cookiecutter.readthedocs.io/en/latest/installation.html), on your local maschine.

Now you can simply run the following command to install the template:

```shell
    cookiecutter gh:4so-fourseasons/react-redux-cookiecutter
```

This will create a new project in its own directory and update certain files
according to the settings you make. Furthermore you can choose between a simple
preconfigured `.travis.yml` and a `.gitlab-ci.yml`.
This will also let you initialize a new git
repository inside the new directory and immediately install npm dependencies.
You can then add some central remote repository
(i.e. from our local GitLab) as a remote and make an initial commit.


## Developing

### Built With

This project includes quite a few opinionated settings which where
made according to our own guidelines. Therefore this template includes:

* React as view-library
* Redux for state management
* Redux-loop for sideeffects
* Reselect for selector memoization
* Styled-components for component level CSS styling
* Axios for request handling
* Webpack as module bundler, dev server and build tool
* Babel for ES6 and Flow transpilation
* Flow as type-checker
* Standard as JS linter
* CSS-Autoprefixing via postcss
* Jest as testing framework
* normalize.css as CSS-reset
* Furhtermore the template is initialized with our README-template where basic setup/dev-server/build steps are already prefilled


## Versioning

We use [SemVer](http://semver.org/) for versioning.
