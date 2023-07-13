const BaseSchema = require("../parent/BaseSchema");
const SupervisorSchemaDictionary = require("../../dictionary/database/schema/SupervisorSchemaDictionary");

class SupervisorSchema extends BaseSchema {

    static getNewSchema() {
        return super.getNewSchema(this.#getJSON());
    }

    static #getJSON() {
        return {
            [SupervisorSchemaDictionary._ID]: String,
            [SupervisorSchemaDictionary.USERNAME]: String,
            [SupervisorSchemaDictionary.PASSWORD]: String,
            [SupervisorSchemaDictionary.FIRST_NAME]: String,
            [SupervisorSchemaDictionary.LAST_NAME]: String,
            [SupervisorSchemaDictionary.DIVISION_UID]: String,
        }
    }

}

module.exports = SupervisorSchema;