const BaseSchema = require("../parent/BaseSchema");
const DivisionSchemaDictionary = require("../../dictionary/database/schema/DivisionSchemaDictionary");
const {
    Schema
} = require("mongoose");

class DivisionSchema extends BaseSchema {
    static getNewSchema() {
        return super.getNewSchema(this.#getJSON());
    }

    static getSchema() {
        return super.getSchema(this.#getJSON());
    }

    static #getJSON() {
        return {
            [DivisionSchemaDictionary.UID]: String,
            [DivisionSchemaDictionary.NAME]: String
        }
    }
}

module.exports = DivisionSchema;