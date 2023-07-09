const BaseModel = require("../parent/BaseModel");
const DivisionSchemaDictionary = require("../../dictionary/database/schema/DivisionSchemaDictionary");

class DivisionModel extends BaseModel {
    #_id;
    #name;

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

    toJSON() {
        const json = {};

        if (this._id !== undefined) {
            json[DivisionSchemaDictionary.UID] = this._id;
        }

        if (this.name !== undefined) {
            json[DivisionSchemaDictionary.NAME] = this.name;
        }

        return json;
    }
}

module.exports = DivisionModel;