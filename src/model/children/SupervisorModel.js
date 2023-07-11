const BaseModel = require("../parent/BaseModel");
const SupervisorSchemaDictionary = require("../../dictionary/database/schema/SupervisorSchemaDictionary");

class SupervisorModel extends BaseModel {
    #_id;
    #username;
    #password;
    #first_name;
    #last_name;
    #division_uid;

    get _id() {
        return this.#_id;
    }

    set _id(value) {
        this.#_id = value;
    }

    get username() {
        return this.#username;
    }

    set username(value) {
        this.#username = value;
    }

    get password() {
        return this.#password;
    }

    set password(value) {
        this.#password = value;
    }

    get first_name() {
        return this.#first_name;
    }

    set first_name(value) {
        this.#first_name = value;
    }

    get last_name() {
        return this.#last_name;
    }

    set last_name(value) {
        this.#last_name = value;
    }

    get division_uid() {
        return this.#division_uid;
    }

    set division_uid(value) {
        this.#division_uid = value;
    }

    toJSON() {
        const json = {};

        if (this._id !== undefined) {
            json[SupervisorSchemaDictionary._ID] = this._id;
        }

        if (this.username !== undefined) {
            json[SupervisorSchemaDictionary.USERNAME] = this.username;
        }

        if (this.password !== undefined) {
            json[SupervisorSchemaDictionary.PASSWORD] = this.password;
        }

        if (this.first_name !== undefined) {
            json[SupervisorSchemaDictionary.FIRST_NAME] = this.first_name;
        }

        if (this.last_name !== undefined) {
            json[SupervisorSchemaDictionary.LAST_NAME] = this.last_name;
        }

        if (this.division_uid !== undefined) {
            json[SupervisorSchemaDictionary.DIVISION_UID] = this.division_uid;
        }

        return json;
    }
}

module.exports = SupervisorModel;