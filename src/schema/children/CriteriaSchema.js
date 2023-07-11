const BaseSchema = require("../parent/BaseSchema");
const CriteriaSchemaDictionary = require("../../dictionary/database/schema/CriteriaSchemaDictionary");

class CriteriaSchema extends BaseSchema {

    static getNewSchema() {
        return super.getNewSchema(this.#getJSON());
    }

    static #getJSON() {
        return {
            [CriteriaSchemaDictionary._ID]: String,
            [CriteriaSchemaDictionary.NAME]: String,
            [CriteriaSchemaDictionary.CRITERIA_TYPE_UID]: String
        }
    }
}

module.exports = CriteriaSchema;