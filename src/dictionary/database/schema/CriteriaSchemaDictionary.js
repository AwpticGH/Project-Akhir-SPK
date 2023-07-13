class CriteriaSchemaDictionary {
    static #_ID = "_id";
    static #NAME = "name";
    static #POINT = "point";
    static #CRITERIA_TYPE_UID = "criteria_type_uid";

    static get _ID() {
        return this.#_ID;
    }

    static get NAME() {
        return this.#NAME;
    }

    static get POINT() {
        return this.#POINT;
    }

    static get CRITERIA_TYPE_UID() {
        return this.#CRITERIA_TYPE_UID;
    }
}

module.exports = CriteriaSchemaDictionary;