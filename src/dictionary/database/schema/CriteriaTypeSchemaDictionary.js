class CriteriaTypeSchemaDictionary {
    static #UID = "_id";
    static #TYPE = "type";

    static get UID() {
        return this.#UID;
    }

    static get TYPE() {
        return this.#TYPE;
    }
}

module.exports = CriteriaTypeSchemaDictionary;