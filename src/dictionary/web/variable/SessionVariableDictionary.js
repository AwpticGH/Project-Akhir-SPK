class SessionVariableDictionary {
    static #ALERT = "my-alert";
    static #SUPERVISOR_MODEL = "client-model";

    static get ALERT() {
        return this.#ALERT;
    }

    static get SUPERVISOR_MODEL() {
        return this.#SUPERVISOR_MODEL;
    }
}

module.exports = SessionVariableDictionary;