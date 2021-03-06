# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [0.7.5] - 2018-03-29
### Fixed
- Support regexp with elsif #6

## [0.7.4] - 2018-01-23
### Fixed
- DoubleCloss critical/correction

## [0.7.2] - 2017-12-13
### Fixed
- Errors from regexp with `$n`

## [0.7.1] - 2017-12-13
### Fixed
- Errors from mutable metohds of string (e.g. `K20 + 10` (SW2.0))

## [0.7.0] - 2017-12-13
### Changed
- Update BCDice to Ver2.02.73

## [0.6.0] - 2017-09-12
### Fixed
- Performance issue
    - It was very slow on V8 (Chrome/Node)

## [0.5.0] - 2017-09-08
### Added
- Add DiceBot.getHelpMessage() and DiceBot.info()

## [0.4.0] - 2017-09-05
### Changed
- Implement dynamic dicebot loader

## [0.3.2] - 2017-08-23
### Fixed
- Protect another built-in objects
    - Array
    - Number
    - RegExp
    - String

## [0.3.1] - 2017-08-23
### Fixed
- Fix destruction of Boolean.prototype

## [0.3.0] - 2017-08-23
### Added
- Rand result collection
    ```js
    bcdice.setCollectRandResult(b);
    console.log(bcdice.getRandResults());
    ```

## [0.2.1] - 2017-08-22
### Fixed
- Fix destruction of Function.prototype
### Changed
- Rename `dist` to `lib`

## [0.2.0] - 2017-08-22
### Added
- Added wrapper classes around Loaders
    - DiceBot
    - DiceBotLoader
    - DiceBotLoaderList
### Changed
- Changed wrapper modules to ES Modules
    ```js
    // To require as CommonJS

    // Before
    const BCDice = require('bcdice-js');

    // After
    const BCDice = require('bcdice-js').default;
    // or
    const BCDice = require('bcdice-js').BCDice;
    ```

## [0.1.1] - 2017-08-20
### Added
- Setup Travis CI

## [0.1.0] - 2017-08-20
- First release (BCDice v2.02.73)
