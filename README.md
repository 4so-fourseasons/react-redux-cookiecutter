![Web](img/web.png)

# ToC

<!-- vim-markdown-toc GFM -->

* [4so-Web-Cookiecutter](#4so-web-cookiecutter)
    * [Installing / Getting started](#installing--getting-started)
    * [Developing](#developing)
        * [Built With](#built-with)
    * [Versioning](#versioning)

<!-- vim-markdown-toc -->

# 4so-Web-Cookiecutter

This is our 4so web template to quickly scaffold web projects.


## Installing / Getting started

To get started you first need to install Python and [Cookiecutter](https://cookiecutter.readthedocs.io/en/latest/installation.html), on your local maschine. Then you need to clone this repository.

Now just run the following command from the directory you ran
the `git clone` command in and cookiecutter will guide you trough a
minimal setup:

```shell
cookiecutter 4so-web-template
```

This will create a new project in its own directory and update certain files
according to the settings you made. This will also initialize a new git
repository inside the new directory. You can then add some central repository
(i.e. from our local GitLab) as a remote, make an initial commit and push the changes.


## Developing

### Built With

This project includes quite a few opinionated settings which where
made according to our own guidelines. Therefore this template includes:

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

We can maybe use [SemVer](http://semver.org/) for versioning. For the versions available, see the [link to tags on this repository](/tags).
