class BaseModel {
    constructor() {
        if (this.constructor === BaseModel) {
            throw new Error("Abstracted Class Cannot Be Instantiated!");
        }
    }

    toJSON() {
        return new Error("Abstracted Class Method Has No Implementation!");
    }
}

module.exports = BaseModel;