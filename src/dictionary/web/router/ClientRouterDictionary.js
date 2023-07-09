class ClientRouterDictionary {
    static #HOME = "/";
    static #LOGIN = "/login";
    static #EMPLOYEE_CREATE = "/employee/create";

    static get HOME() {
        return this.#HOME;
    }

    static get LOGIN() {
        return this.#LOGIN;
    }

    static get EMPLOYEE_CREATE() {
        return this.#EMPLOYEE_CREATE;
    }
}

module.exports = ClientRouterDictionary;