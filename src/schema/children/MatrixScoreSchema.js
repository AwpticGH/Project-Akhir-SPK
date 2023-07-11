const BaseSchema = require("../parent/BaseSchema");
const MatrixScoreSchemaDictionary = require("../../dictionary/database/schema/MatrixScoreSchemaDictionary");

class MatrixScoreSchema extends BaseSchema {

    static getNewSchema() {
        return super.getNewSchema(this.#getJSON());
    }

    static #getJSON() {
        return {
            [MatrixScoreSchemaDictionary._ID]: String,
            [MatrixScoreSchemaDictionary.TIMESTAMP]: Date,
            [MatrixScoreSchemaDictionary.SCORE]: Number,
            [MatrixScoreSchemaDictionary.CRITERIA_UID]: String,
            [MatrixScoreSchemaDictionary.EMPLOYEE_UID]: String,
        }
    }
}

module.exports = MatrixScoreSchema;