class SupervisorSchemaDictionary {
    static #UID = "_id";
    static #USERNAME = "username";
    static #PASSWORD = "password";
    static #FIRST_NAME = "first_name";
    static #LAST_NAME = "last_name";
    static #DIVISION_UID = "division_uid";

    static get UID() {
        return this.#UID;
    }

    static get USERNAME() {
        return this.#USERNAME;
    }

    static get PASSWORD() {
        return this.#PASSWORD;
    }

    static get FIRST_NAME() {
        return this.#FIRST_NAME;
    }

    static get LAST_NAME() {
        return this.#LAST_NAME;
    }

    static get DIVISION_UID() {
        return this.#DIVISION_UID;
    }
}

module.exports = SupervisorSchemaDictionary;