const BaseModel = require("../../parent/BaseModel");
const CriteriaSchemaDictionary = require("../../../dictionary/database/schema/CriteriaSchemaDictionary");

class CriteriaModel extends BaseModel {
    #_id;
    #name;
    #point;
    #criteria_type_uid;

    get _id() {
        return this.#_id;
    }

    set _id(value) {
        this.#_id = value;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get point() {
        return this.#point;
    }

    set point(value) {
        this.#point = value;
    }

    get criteria_type_uid() {
        return this.#criteria_type_uid;
    }

    set criteria_type_uid(value) {
        this.#criteria_type_uid = value;
    }

    toJSON() {
        const json = {};

        if (this._id !== undefined) {
            json[CriteriaSchemaDictionary._ID] = this._id;
        }

        if (this.name !== undefined) {
            json[CriteriaSchemaDictionary.NAME] = this.name;
        }

        if (this.point !== undefined) {
            json[CriteriaSchemaDictionary.POINT] = this.point;
        }

        if (this.criteria_type_uid !== undefined) {
            json[CriteriaSchemaDictionary.CRITERIA_TYPE_UID] = this.criteria_type_uid;
        }

        return json;
    }
}