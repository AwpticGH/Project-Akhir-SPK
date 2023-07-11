const BaseSchema = require("../parent/BaseSchema");
const EmployeeSchemaDictionary = require("../../dictionary/database/schema/EmployeeSchemaDictionary");
const {
    Schema
} = require("mongoose");

class EmployeeSchema extends BaseSchema {

    static getNewSchema() {
        return super.getNewSchema(this.#getJSON());
    }

    static #getJSON() {
        return {
            [EmployeeSchemaDictionary.UID]: String,
            [EmployeeSchemaDictionary.FIRST_NAME]: String,
            [EmployeeSchemaDictionary.LAST_NAME]: String,
            [EmployeeSchemaDictionary.DATETIME_OF_EMPLOYMENT]: Date,
            [EmployeeSchemaDictionary.DIVISION_UID]: String,
        }
    }
}

module.exports = EmployeeSchema;