const {Schema} = require("mongoose");

class BaseSchema {

    static getNewSchema(json) {
        return new Schema(json);
    }
}

module.exports = BaseSchema;