# bcdice-js
[![npm package](https://img.shields.io/npm/v/bcdice-js.svg?style=flat-square)](https://www.npmjs.org/package/bcdice-js)
[![Build Status](https://img.shields.io/travis/ukatama/bcdice-js/master.svg?style=flat-square)](https://travis-ci.org/ukatama/bcdice-js)
[![Coverage Status](https://img.shields.io/coveralls/ukatama/bcdice-js.svg?style=flat-square)](https://coveralls.io/github/ukatama/bcdice-js)
[![DevDependencies](https://img.shields.io/david/dev/ukatama/bcdice-js.svg?style=flat-square)](https://david-dm.org/ukatama/bcdice-js#info=devDependencies&view=list)

[BCDice](https://github.com/torgtaitai/BCDice) for JavaScript (Browser/Node.js).
Transpiled by [Opal](http://opalrb.org/).

## Examples
- Node.js (CommonJS):
  [examples/node](examples/node)
- Browser with Webpack (slower, simple):
  [examples/browser](examples/browser)
- Webpack Dynamic Import (faster, recommended):
  [examples/webpak-import](examples/webpack-imoprt)

## Usage
1. Install
    ```bash
    $ npm install --save bcdice-js
    ```

2. Import
    ```js
    import BCDice from 'bcdice-js'; // ES Modules
    // or
    const BCDice = require('bcdice-js').BCDice; // CommonJS
    ```

3. Preload dicebots (**Only on the browser!!**)
    ```
    import 'bcdice-js/lib/preload-dicebots';
    // or
    require('bcdice-js/lib/preload-dicebots');
    ```

4. Create BCDice instance
    ```js
    const bcdice = new BCDice();
    ```

5. Set dicebot
    ```js
    bcdice.setGameByTitle('SwordWorld2_0'); // Default: 'DiceBot'
    ```

6. Set message and execute
    ```js
    bcdice.setMessage('2d');
    console.log(bcdice.dice_command());
    ```

## Contribution
- Open [Issue](https://github.com/ukatama/bcdice-js/issues) or [Pull Request](https://github.com/ukatama/bcdice-js/pulls)
- Supported Language
  - English
  - Japanese(日本語)

## License
MIT License

- BCDice: [Modified BSD license](https://github.com/torgtaitai/BCDice)

## Changelog
[CHANGELOG.md](https://github.com/ukatama/bcdice-js/blob/master/CHANGELOG.md)
