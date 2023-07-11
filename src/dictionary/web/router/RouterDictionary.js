class RouterDictionary {
    static #HOME = "/";
    static #LOGIN = "/login"; // supervisors readOne
    static #EMPLOYEE_CREATE = "/employee/create"; // employees createOne
    static #EMPLOYEE_SHOW = "/employee/show"; // employees readMany
    static #EMPLOYEE_UPDATE = "/employee/update"; // employees updateOne
    static #EMPLOYEE_DELETE = "/employee/delete"; // employees deleteOne
    static #CRITERIA_SHOW = "/criteria/show"; // criteria readAll / readMany
    static #MATRIX_SCORE_CREATE = "/matrix/create"; // matrix_score createMany
    static #MATRIX_SCORE_SHOW = "/matrix/show"; // matrix_score readMany

    // for initializing database
    static #CREATE_SUPERVISOR_1 = "/supervisor/create/1";
    static #CREATE_SUPERVISOR_2 = "/supervisor/create/2";
    static #CREATE_SUPERVISOR_3 = "/supervisor/create/3";

    static get HOME() {
        return this.#HOME;
    }

    static get LOGIN() {
        return this.#LOGIN;
    }

    static get EMPLOYEE_CREATE() {
        return this.#EMPLOYEE_CREATE;
    }

    static get EMPLOYEE_SHOW() {
        return this.#EMPLOYEE_SHOW;
    }

    static get EMPLOYEE_UPDATE() {
        return this.#EMPLOYEE_UPDATE;
    }

    static get EMPLOYEE_DELETE() {
        return this.#EMPLOYEE_DELETE;
    }

    static get CRITERIA_SHOW() {
        return this.#CRITERIA_SHOW;
    }

    static get MATRIX_SCORE_CREATE() {
        return this.#MATRIX_SCORE_CREATE;
    }

    static get MATRIX_SCORE_SHOW() {
        return this.#MATRIX_SCORE_SHOW;
    }

    // for initializing database
    static get CREATE_SUPERVISOR_1() {
        return this.#CREATE_SUPERVISOR_1;
    }

    static get CREATE_SUPERVISOR_2() {
        return this.#CREATE_SUPERVISOR_2;
    }

    static get CREATE_SUPERVISOR_3() {
        return this.#CREATE_SUPERVISOR_3;
    }
}

module.exports = RouterDictionary;