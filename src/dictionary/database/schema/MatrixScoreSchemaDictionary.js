class MatrixScoreSchemaDictionary {
    static #_ID = "_id";
    static #TIMESTAMP = "timestamp";
    static #SCORE = "score";
    static #CRITERIA_UID = "criteria_uid";
    static #EMPLOYEE_UID = "employee_uid";

    static get _ID() {
        return this.#_ID;
    }

    static get TIMESTAMP() {
        return this.#TIMESTAMP;
    }

    static get SCORE() {
        return this.#SCORE;
    }

    static get CRITERIA_UID() {
        return this.#CRITERIA_UID;
    }

    static get EMPLOYEE_UID() {
        return this.#EMPLOYEE_UID;
    }
}

module.exports = MatrixScoreSchemaDictionary;