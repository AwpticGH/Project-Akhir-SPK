class DatabasePCollectionDictionary {
    static #EMPLOYEES = "employees";
    static #MATRIX_SCORES = "matrix_scores";
    static #CRITERIA = "criteria";
    static #CRITERIA_TYPES = "criteria_types";
    static #SUPERVISORS = "supervisors";
    static #DIVISIONS = "divisions";

    static get EMPLOYEES() {
        return this.#EMPLOYEES;
    }

    static get MATRIX_SCORES() {
        return this.#MATRIX_SCORES;
    }

    static get CRITERIA() {
        return this.#CRITERIA;
    }

    static get CRITERIA_TYPES() {
        return this.#CRITERIA_TYPES;
    }

    static get SUPERVISORS() {
        return this.#SUPERVISORS;
    }

    static get DIVISIONS() {
        return this.#DIVISIONS;
    }
}

module.exports = DatabasePCollectionDictionary;