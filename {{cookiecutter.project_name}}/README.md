# ToC

<!-- vim-markdown-toc GFM -->

* [{{cookiecutter.project_name}}](#cookiecutterproject_name)
    * [Installing / Getting started](#installing--getting-started)
    * [Developing](#developing)
        * [Built With](#built-with)
        * [Development commands](#development-commands)
            * [Dev-Server](#dev-server)
            * [Type-Checker](#type-checker)
            * [Linters](#linters)
            * [Testing](#testing)
        * [Building](#building)
        * [CI](#ci)
        * [Deploying / Publishing](#deploying--publishing)
    * [Versioning](#versioning)
    * [Configuration](#configuration)
    * [Tests](#tests)
    * [Style guide](#style-guide)
    * [Api Reference](#api-reference)
    * [Database](#database)

<!-- vim-markdown-toc -->


# {{cookiecutter.project_name}}
> {{cookiecutter.short_description}}

A brief description of your project, what it is used for.
Also add a version badge if possible

## Installing / Getting started

To install all project dependencies simply run

```shell
npm i
```


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


### Development commands

#### Dev-Server

To start the development server run:

```shell
npm start
```

This will built the svg-sprite files and start an instance
of webpack-dev-server. From then on the whole project will
rebuild, run your JS files through the Flow type-checker and
lint you JS with standard and you scss/CSS with stylelint.


#### Type-Checker

To separately type-check your JS-files, run:

```shell
npm run flow
```

#### Linters

To separately lint your JS-files, run:

```shell
npm run lint
```

or to autmatically fix issues if possible, run:

```shell
npm run lint:fix
```

To separately lint your stylesheets, run:

```shell
npm run stylelint
```

or to automatically fix issues if possible, run:

```shell
npm run stylelint:fix
```


#### Testing

Tests should usually live next to their base files and should
be named like: `<myBaseFile>.test.js`.

To run Jest an check if your tests pass invoke:

```shell
npm run test
```

This will also generate a coverage folder, containing information
about the projects test coverage.

To continuously run Jest and have Jest watch for changes, run:

```shell
npm run test:watch
```


### Building

To build the project, run:

```shell
npm run build
```

This will build your svg-sprite files, compile, minify and bundle
everything and put all packaged files into the _dist/_ directory (if there is no such directory it will just be newly created, an existing directory will be removed first).
To allow our clients browsers to cache vendor files and only update the cache when it is really necessary, all important filenames include hashes for reference inside the built manifest file.


### CI

This project already includes a default _.gitlab-ci.yml_.
Just confiure the file to your needs.


### Deploying / Publishing

give instructions on how to build and release a new version
In case there's some step you have to take that publishes this project to a
server, this is the right time to state it.

```shell
packagemanager deploy your-project -s server.com -u username -p password
```

And again you'd need to tell what the previous code actually does.

## Versioning

We can maybe use [SemVer](http://semver.org/) for versioning. For the versions available, see the [link to tags on this repository](/tags).


## Configuration

Here you should write what are all of the configurations a user can enter when
using the project.

## Tests

Describe and show how to run the tests with code examples.
Explain what these tests test and why.

```shell
Give an example
```

## Style guide

Explain your code style and show how to check it.

## Api Reference

If the api is external, link to api documentation. If not describe your api including authentication methods as well as explaining all the endpoints with their required parameters.


## Database

Explaining what database (and version) has been used. Provide download links.
Documents your database design and schemas, relations etc... 

