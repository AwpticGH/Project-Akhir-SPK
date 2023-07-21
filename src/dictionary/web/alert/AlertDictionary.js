class AlertDictionary {
    static #LOGIN_FAILED = "An Error Occurred! Please Try Again!!";
    static #INVALID_CREDENTIAL = "Failed To Login Due To Incorrect Credentials!";
    static #AUTHENTICATE = "Please Login First!";
    static #SUPERVISOR_UPDATE_SUCCESS = "Successfully Updated Password!";
    static #SUPERVISOR_UPDATE_FAILED = "Failed To Update Password, Please Try Again!";
    static #PASSWORD_CONFIRMATION_FAILED = "The Passwords Entered Does Not Match!";
    static #PASSWORD_EQUAL = "New Password Can Not Be The Same As The Old One!";
    static #CREATE_SUCCESS = "Successfully Inserted New Data To Database!";
    static #CREATE_FAILED = "Failed To Insert Data!";
    static #UPDATE_SUCCESS = "Successfully Updated Data";
    static #UPDATE_FAILED = "Failed To Update Data";
    static #DELETE_SUCCESS = "Successfully Deleted Data";
    static #DELETE_FAILED = "Failed To Delete Data";

    static get LOGIN_FAILED() {
        return this.#LOGIN_FAILED;
    }

    static get INVALID_CREDENTIAL() {
        return this.#INVALID_CREDENTIAL;
    }

    static get AUTHENTICATE() {
        return this.#AUTHENTICATE;
    }

    static get SUPERVISOR_UPDATE_SUCCESS() {
        return this.#SUPERVISOR_UPDATE_SUCCESS;
    }

    static get SUPERVISOR_UPDATE_FAILED() {
        return this.#SUPERVISOR_UPDATE_FAILED;
    }

    static get PASSWORD_CONFIRMATION_FAILED() {
        return this.#PASSWORD_CONFIRMATION_FAILED;
    }

    static get PASSWORD_EQUAL() {
        return this.#PASSWORD_EQUAL;
    }

    static get CREATE_SUCCESS() {
        return this.#CREATE_SUCCESS;
    }

    static get CREATE_FAILED() {
        return this.#CREATE_FAILED;
    }

    static get UPDATE_SUCCESS() {
        return this.#UPDATE_SUCCESS;
    }

    static get UPDATE_FAILED() {
        return this.#UPDATE_FAILED;
    }

    static get DELETE_SUCCESS() {
        return this.#DELETE_SUCCESS;
    }

    static get DELETE_FAILED() {
        return this.#DELETE_FAILED;
    }
}

module.exports = AlertDictionary;