class CriteriaKSchema {
    static #UID = "_id";
    static #NAME = "name";
    static #CRITERIA_TYPE_UID = "criteria_type_uid";

    static get UID() {
        return this.#UID;
    }

    static get NAME() {
        return this.#NAME;
    }

    static get CRITERIA_TYPE_UID() {
        return this.#CRITERIA_TYPE_UID;
    }
}

module.exports = CriteriaKSchema;