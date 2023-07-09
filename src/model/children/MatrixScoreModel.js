const BaseModel = require("../parent/BaseModel");
const MatrixScoreSchemaDictionary = require("../../dictionary/database/schema/MatrixScoreSchemaDictionary");

class MatrixScoreModel {
    #_id;
    #year;
    #score;
    #criteria_uid;
    #employee_uid;

    get _id() {
        return this.#_id;
    }

    set _id(value) {
        this.#_id = value;
    }

    get year() {
        return this.#year;
    }

    set year(value) {
        this.#year = value;
    }

    get score() {
        return this.#score;
    }

    set score(value) {
        this.#score = value;
    }

    get criteria_uid() {
        return this.#criteria_uid;
    }

    set criteria_uid(value) {
        this.#criteria_uid = value;
    }

    get employee_uid() {
        return this.#employee_uid;
    }

    set employee_uid(value) {
        this.#employee_uid = value;
    }

    toJSON() {
        const json = {};

        if (this._id !== undefined) {
            json[MatrixScoreSchemaDictionary.UID] = this._id;
        }

        if (this.year !== undefined) {
            json[MatrixScoreSchemaDictionary.YEAR] = this.year;
        }

        if (this.score !== undefined) {
            json[MatrixScoreSchemaDictionary.SCORE] = this.score;
        }

        if (this.criteria_uid !== undefined) {
            json[MatrixScoreSchemaDictionary.CRITERIA_UID] = this.criteria_uid;
        }

        if (this.employee_uid !== undefined) {
            json[MatrixScoreSchemaDictionary.EMPLOYEE_UID] = this.employee_uid;
        }

        return json;
    }
}

module.exports = MatrixScoreModel;