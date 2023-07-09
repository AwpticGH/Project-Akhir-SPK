class SessionVariableDictionary {
    static #ALERT = "my-alert";
    static #SUPERVISOR_MODEL = "supervisor-model";

    static get ALERT() {
        return this.#ALERT;
    }

    static get SUPERVISOR_MODEL() {
        return this.#SUPERVISOR_MODEL;
    }
}

module.exports = SessionVariableDictionary;