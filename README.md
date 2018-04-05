# Simplify debts

ClojureScript port of [simplify-debts](https://github.com/ykarikos/simplify-debts/): a program to balance debts with minimal transactions.

## Development mode

To start the Figwheel compiler, navigate to the project folder and run the following command in the terminal:

```
lein figwheel
```

Figwheel will automatically push cljs changes to the browser.
Once Figwheel starts up, you should be able to open the `public/index.html` page in the browser.


## Building for production

```
lein clean
lein package
```

## Run tests

Tests are run with [PhantomJS](http://phantomjs.org/) which needs to be installed.

```
lein cljsbuild test
```

## License

Licensed with [MIT License](LICENSE).

## Thanks

This project is a grateful recipient of the [Futurice Open Source sponsorship program](http://futurice.com/blog/sponsoring-free-time-open-source-activities?utm_source=github&utm_medium=spice) 🌶🦄.
