class MatrixScoreSchemaDictionary {
    static #UID = "_id";
    static #YEAR = "year";
    static #SCORE = "score";
    static #CRITERIA_UID = "criteria_uid";
    static #EMPLOYEE_UID = "employee_uid";

    static get UID() {
        return this.#UID;
    }

    static get YEAR() {
        return this.#YEAR;
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