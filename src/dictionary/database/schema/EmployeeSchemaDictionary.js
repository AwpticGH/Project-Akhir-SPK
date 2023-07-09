class EmployeeSchemaDictionary {
    static #UID = "_id";
    static #FIRST_NAME = "first_name";
    static #LAST_NAME = "last_name";
    static #DATETIME_OF_EMPLOYMENT = "datetime_of_employment";
    static #DIVISION_UID = "division_uid";

    static get UID() {
        return this.#UID;
    }

    static get FIRST_NAME() {
        return this.#FIRST_NAME;
    }

    static get LAST_NAME() {
        return this.#LAST_NAME;
    }

    static get DATETIME_OF_EMPLOYMENT() {
        return this.#DATETIME_OF_EMPLOYMENT;
    }

    static get DIVISION_UID() {
        return this.#DIVISION_UID;
    }
}

module.exports = EmployeeSchemaDictionary;