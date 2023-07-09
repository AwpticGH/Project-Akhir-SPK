const BaseModel = require("../../model/parent/BaseModel");
const mongoose = require("mongoose");
const MongooseModel = mongoose.Model;

class BaseController {
    #myModel;
    #mongooseModel;

    constructor() {
        if (this.constructor === BaseController) {
            throw new Error(`Abstracted Class '${__filename}' Cannot Be Instantiated`);
        }
    }

    set myModel(myModel) {
        this.#myModel = myModel;
    }

    set mongooseModel(value) {
        this.#mongooseModel = value;
    }

    async _createOne() {
        let result = false;
        if (this.#myModel !== undefined && this.#mongooseModel !== undefined) {
            if (this.#myModel instanceof BaseModel && this.#mongooseModel.prototype instanceof MongooseModel) {
                let document = new this.#mongooseModel(this.#myModel.toJSON());
                try {
                    await document.save()
                        .then(() => {
                           result = true;
                        });
                } catch (error) {
                    console.log(error);
                }
            } else {
                if (!(this.#myModel instanceof BaseModel)) {
                    throw new Error(`myModel Is Supposed To Be Of Type 'BaseModel'`);
                }
                if (!(this.#mongooseModel.prototype instanceof MongooseModel)) {
                    throw new Error(`mongooseModel Is Supposed To Be Of Type 'mongoose.model'`);
                }
            }
        } else {
            if (this.#myModel === undefined) {
                throw new Error(`myModel Variable Has Not Been Initialized`);
            }
            if (this.#mongooseModel === undefined) {
                throw new Error(`mongooseModel Variable Has Not Been Initialized`);
            }
        }

        return result;
    }

    async _findOne() {
        let result;
        if (this.#myModel !== undefined && this.#mongooseModel !== undefined) {
            if (this.#myModel instanceof BaseModel && this.#mongooseModel.prototype instanceof MongooseModel) {
                let query = this.#mongooseModel.findOne(this.#myModel.toJSON());
                try {
                    result = await query.exec();
                } catch (error) {
                    console.log(error);
                }
            } else {
                if (!(this.#myModel instanceof BaseModel)) {
                    throw new Error(`myModel Is Supposed To Be Of Type 'BaseModel'`);
                }
                if (!(this.#mongooseModel.prototype instanceof MongooseModel)) {
                    throw new Error(`mongooseModel Is Supposed To Be Of Type 'mongoose.model'`);
                }
            }
        } else {
            if (this.#myModel === undefined) {
                throw new Error(`myModel Variable Has Not Been Initialized`);
            }
            if (this.#mongooseModel === undefined) {
                throw new Error(`mongooseModel Variable Has Not Been Initialized`);
            }
        }

        return result;
    }
}

module.exports = BaseController;