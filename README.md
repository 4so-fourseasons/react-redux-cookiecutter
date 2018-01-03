<img src="img/web.png" width="300px" />

# ToC

<!-- vim-markdown-toc GFM -->

* [React-Template](#react-template)
    * [Installing / Getting started](#installing--getting-started)
    * [Developing](#developing)
        * [Built With](#built-with)
    * [Versioning](#versioning)

<!-- vim-markdown-toc -->

# React-Template

This is our template to quickly scaffold new React projects.


## Installing / Getting started

To get started you first need to install Python and [Cookiecutter](https://cookiecutter.readthedocs.io/en/latest/installation.html), on your local maschine. Then you need to clone this repository.

Now just run the following command from the directory you ran
the `git clone` command in and cookiecutter will guide you trough a
minimal setup:

```shell
cookiecutter react-template
```

This will create a new project in its own directory and update certain files
according to the settings you made. This will also let you initialize a new git
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
* StyleLint as scss/css linter
* CSS-Autoprefixing via postcss
* Jest as testing framework
* SVG-Sprite for automatic sprite/scss generation
* normalize.css as CSS-reset
* Furhtermore the template is initialized with our README-template where basic setup/dev-server/build steps are already prefilled


## Versioning

We use [SemVer](http://semver.org/) for versioning.
