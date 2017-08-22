/* eslint no-underscore-dangle: off */

import '../dist/bcdice.ruby.js';
import opal from './opal';
import DiceBot from './DiceBot';

export default class BCDice {
    constructor() {
        const maker = opal(Opal => Opal.BCDiceMaker.$new());
        this._bcdice = opal(() => maker.$newBcDice());
    }

    // eslint-disable-next-line no-unused-vars
    setDir(dir, prefix) {
        throw new Error('Unsupported');
    }

    isKeepSecretDice(b) {
        opal(() => this._bcdice.$isKeepSecretDice(b));
    }

    getGameType() {
        return opal(() => this._bcdice.$getGameType());
    }

    setDiceBot(diceBot) {
        if (!diceBot) return;

        if (!(diceBot instanceof DiceBot)) throw new Error('Invalit argument type');
        opal(() => this._bcdice.$setDiceBot(diceBot._diceBot));
    }

    // eslint-disable-next-line no-unused-vars
    setIrcClient(client) {
        throw new Error('Unimplemented');
    }

    setMessage(message) {
        opal(() => this._bcdice.$setMessage(message));
    }

    // eslint-disable-next-line camelcase
    dice_command() {
        return this.diceCommand();
    }
    diceCommand() {
        return opal(() => this._bcdice.$dice_command());
    }

    setGameByTitle(gameTitle) {
        return opal(() => this._bcdice.$setGameByTitle(gameTitle));
    }
}
