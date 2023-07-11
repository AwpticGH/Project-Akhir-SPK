class DatabaseSCollectionDictionary {
    static #EMPLOYEE = "employee";
    static #MATRIX_SCORE = "matrix_score";
    static #CRITERIA = "criteria";
    static #CRITERIA_TYPE = "criteria_type";
    static #SUPERVISOR = "supervisor";
    static #DIVISION = "division";

    static get EMPLOYEE() {
        return this.#EMPLOYEE;
    }

    static get MATRIX_SCORE() {
        return this.#MATRIX_SCORE;
    }

    static get CRITERIA() {
        return this.#CRITERIA;
    }

    static get CRITERIA_TYPE() {
        return this.#CRITERIA_TYPE;
    }

    static get SUPERVISOR() {
        return this.#SUPERVISOR;
    }

    static get DIVISION() {
        return this.#DIVISION;
    }
}

module.exports = DatabaseSCollectionDictionary;