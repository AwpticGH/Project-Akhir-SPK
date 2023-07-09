const BaseModel = require("../parent/BaseModel");
const DivisionSchemaDictionary = require("../../dictionary/database/schema/DivisionSchemaDictionary");

class DivisionModel extends BaseModel {
    #uid;
    #name;

    get uid() {
        return this.#uid;
    }

    set uid(value) {
        this.#uid = value;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    toJSON() {
        const json = {};

        if (this.uid !== undefined) {
            json[DivisionSchemaDictionary.UID] = this.uid;
        }

        if (this.name !== undefined) {
            json[DivisionSchemaDictionary.NAME] = this.name;
        }

        return json;
    }
}

module.exports = DivisionModel;