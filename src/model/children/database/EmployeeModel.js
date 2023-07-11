const BaseModel = require("../../parent/BaseModel");
const EmployeeSchemaDictionary = require("../../../dictionary/database/schema/EmployeeSchemaDictionary");
const DatabaseSCollection = require("../../../dictionary/database/collection/singular/DatabaseSCollectionDictionary");
const {
    Schema,
    model
} = require("mongoose");

class EmployeeModel extends BaseModel {
    #_id;
    #first_name;
    #last_name;
    #datetime_of_employment;
    #division_uid;

    get _id() {
        return this.#_id;
    }

    set _id(value) {
        this.#_id = value;
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

    get datetime_of_employment() {
        return this.#datetime_of_employment;
    }

    set datetime_of_employment(value) {
        this.#datetime_of_employment = value;
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
            json[EmployeeSchemaDictionary._ID] = this._id;
        }

        if (this.first_name !== undefined) {
            json[EmployeeSchemaDictionary.FIRST_NAME] = this.first_name;
        }

        if (this.last_name !== undefined) {
            json[EmployeeSchemaDictionary.LAST_NAME] = this.last_name;
        }

        if (this.datetime_of_employment !== undefined) {
            json[EmployeeSchemaDictionary.DATETIME_OF_EMPLOYMENT] = this.datetime_of_employment;
        }

        if (this.division_uid !== undefined) {
            json[EmployeeSchemaDictionary.DIVISION_UID] = this.division_uid;
        }

        return json;
    }
}

module.exports = EmployeeModel;