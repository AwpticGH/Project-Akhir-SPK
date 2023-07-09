const {Schema} = require("mongoose");

class BaseSchema {

    static getNewSchema(json) {
        return new Schema(json);
    }

    static getSchema(json) {
        return Schema(json);
    }
}

module.exports = BaseSchema;