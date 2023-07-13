const BaseModel = require("../../parent/BaseModel");

class TopsisModel extends BaseModel {
    #name;
    #scores;

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get scores() {
        return this.#scores;
    }

    set scores(value) {
        this.#scores = value;
    }
}

module.exports = TopsisModel;