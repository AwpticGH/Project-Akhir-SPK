const BaseModel = require("../../parent/BaseModel");
const CriteriaTypeSchemaDictionary = require("../../../dictionary/database/schema/CriteriaTypeSchemaDictionary");

class CriteriaTypeModel extends BaseModel {
    #_id;
    #type;

    get _id() {
        return this.#_id;
    }

    set _id(value) {
        this.#_id = value;
    }

    get type() {
        return this.#type;
    }

    set type(value) {
        this.#type = value;
    }

    toJSON () {
        const json = {};

        if (this._id !== undefined) {
            json[CriteriaTypeSchemaDictionary._ID] = this._id;
        }

        if (this.type !== undefined) {
            json[CriteriaTypeSchemaDictionary.TYPE] = this.type;
        }

        return json;
    }
}

module.exports = CriteriaTypeModel;