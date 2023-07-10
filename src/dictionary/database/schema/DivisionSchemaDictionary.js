class DivisionSchemaDictionary {
    static #_ID = "_id";
    static #NAME = "name";

    static get _ID() {
        return this.#_ID;
    }

    static get NAME() {
        return this.#NAME;
    }
}

module.exports = DivisionSchemaDictionary;