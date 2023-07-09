const BaseModel = require("../parent/BaseModel");
const CriteriaTypeSchemaDictionary = require("../../dictionary/database/schema/CriteriaTypeSchemaDictionary");

class CriteriaTypeModel extends BaseModel {
    #uid;
    #type;

    get uid() {
        return this.#uid;
    }

    set uid(value) {
        this.#uid = value;
    }

    get type() {
        return this.#type;
    }

    set type(value) {
        this.#type = value;
    }

    toJSON () {
        const json = {};

        if (this.uid !== undefined) {
            json[CriteriaTypeSchemaDictionary.UID] = this.uid;
        }

        if (this.type !== undefined) {
            json[CriteriaTypeSchemaDictionary.TYPE] = this.type;
        }

        return json;
    }
}

module.exports = CriteriaTypeModel;