class CriteriaTypeSchemaDictionary {
    static #_ID = "_id";
    static #TYPE = "type";

    static get _ID() {
        return this.#_ID;
    }

    static get TYPE() {
        return this.#TYPE;
    }
}

module.exports = CriteriaTypeSchemaDictionary;