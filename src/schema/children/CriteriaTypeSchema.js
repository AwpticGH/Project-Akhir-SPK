const BaseSchema = require("../parent/BaseSchema");
const CriteriaTypeSchemaDictionary = require("../../dictionary/database/schema/CriteriaTypeSchemaDictionary");

class CriteriaTypeSchema extends BaseSchema {

    static getNewSchema() {
        return super.getNewSchema(this.#getJSON());
    }

    static #getJSON() {
        return {
            [CriteriaTypeSchemaDictionary._ID]: String,
            [CriteriaTypeSchemaDictionary.TYPE]: String
        }
    }
}

module.exports = CriteriaTypeSchema;