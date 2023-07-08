class RouterDictionary {
    static #_HOME = "/";
    static #_LOGIN = "/login";

    static get HOME() {
        return this.#_HOME;
    }

    static get LOGIN() {
        return this.#_LOGIN;
    }
}

module.exports = RouterDictionary;