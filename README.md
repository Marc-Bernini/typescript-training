# typescript-training

[![Build Status](https://travis-ci.com/WildCodeSchool/typescript-training.svg?branch=exercises-step)](https://travis-ci.com/WildCodeSchool/typescript-training)

## install

Run:

    npm install

## run

single run (compile & test once, useful for CI):

    npm test

development run (compile & test initially + for each file change, useful for development):

    npm test -- --watchAll

## running single tests

You can temporarily adapt jasmine tests to run *only few specific tests* (one
or more) to save time, not to execute all the tests you have. In order to do
that, use [focus](http://jasmine.github.io/2.6/focused_specs.html)
and [exclude](https://jasmine.github.io/2.6/introduction.html#section-Disabling_Suites):

 * replace `it()` with `fit()`/`xit()` **and/or**
 * replace `describe()` tiwh `fdescribe()`/`xdescribe()`

Important thing, however, is **not to push** these temporary changes (`fit`,
`xit`, `fdescribe`, `xdescribe`) to the repository.

## custom matchers

 * see [Jasmine-Matchers](https://github.com/JamieMason/Jasmine-Matchers)

## Run only group of tests

* Remove `'/src/main/'` from `testPathIgnorePatterns:` section in `jest.config.js` for running only tests inside `'/src/main/'`
* Remove `'/src/datatypes/'` from `testPathIgnorePatterns:` section in `jest.config.js` for running only tests inside `'/src/datatypes/'`
* Remove `'/src/params/'` from `testPathIgnorePatterns:` section in `jest.config.js` for running only tests inside `'/src/params/'`
* Remove `'/src/functions/'` from `testPathIgnorePatterns:` section in `jest.config.js` for running only tests inside `'/src/functions/'`
* Remove `'/src/promises/'` from `testPathIgnorePatterns:` section in `jest.config.js` for running only tests inside `'/src/promises/'`
## Update
We may update tests, to apply them fetch and merge the master branch back to
your branch.

```sh
git merge pull push branch checkout origin master stash pop
```

## progress

In the beginning, most of the tests are failing:

      Something
        important
          ×can be used
          ×is useful
          ×works like a charm

Your task is to learn TypeScript and make tests pass. Eventually, tests should look more or less like the following:

      Something
        important
          √can be used
          √is useful
          √works like a charm
         
[![Build Status](https://travis-ci.com/Marc-Bernini/typescript-training.svg?branch=exercises-step)](https://travis-ci.com/Marc-Bernini/typescript-training)
