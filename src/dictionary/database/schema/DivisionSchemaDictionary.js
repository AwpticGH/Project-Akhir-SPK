class DivisionSchemaDictionary {
    static #UID = "_id";
    static #NAME = "name";

    static get UID() {
        return this.#UID;
    }

    static get NAME() {
        return this.#NAME;
    }
}

module.exports = DivisionSchemaDictionary;