const BaseModel = require("../../model/parent/BaseModel");
// Monogodb Config
const DatabaseConfig = require("../../config/DatabaseConfig");
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
        await DatabaseConfig.connect().catch((err) => {
            console.error(err);
        });
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
        DatabaseConfig.close();

        return result;
    }

    async _createMany() {
        let result = [];
        await DatabaseConfig.connect().catch((err) => {
            console.error(err);
        });
        if (this.#myModel !== undefined && this.#mongooseModel !== undefined) {
            let length = this.#myModel.length;
            if (length > 1 && this.#mongooseModel.prototype instanceof MongooseModel) {
                for (let i = 0; i < length; i++) {
                    if (this.#myModel[i] instanceof BaseModel) {
                        let document = new this.#mongooseModel(this.#myModel[i].toJSON());
                        try {
                            await document.save()
                                .then(() => {
                                    result.push(true);
                                });
                        } catch (error) {
                            console.log(error);
                            result.push(false);
                        }
                    } else {
                        result.push(false);
                        throw new Error(`myModel[${i}] is Supposed To Be of Type BaseModel`);
                    }
                }
            } else {
                result.push(false);
                if (length <= 1) {
                    throw new Error(`myModel is Supposed To Be More Than 1`);
                }
                if (!(this.#mongooseModel.prototype instanceof MongooseModel)) {
                    throw new Error(`mongooseModel Is Supposed To Be Of Type 'mongoose.model'`);
                }
            }
        } else {
            result.push(false);
            if (this.#myModel === undefined) {
                throw new Error(`myModel Variable Has Not Been Initialized`);
            }
            if (this.#mongooseModel === undefined) {
                throw new Error(`mongooseModel Variable Has Not Been Initialized`);
            }
        }
        DatabaseConfig.close();

        return result;
    }

    async _readOne() {
        let result;
        await DatabaseConfig.connect().catch((err) => {
            console.error(err);
        });
        if (this.#myModel !== undefined && this.#mongooseModel !== undefined) {
            if (this.#myModel instanceof BaseModel && this.#mongooseModel.prototype instanceof MongooseModel) {
                let query = this.#mongooseModel.findOne().where(this.#myModel.toJSON());
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
        DatabaseConfig.close();

        return result;
    }

    async _readMany() {
        let result;
        await DatabaseConfig.connect().catch((error) => {
            console.error(error);
        });
        if (this.#myModel !== undefined && this.#mongooseModel !== undefined) {
            if (this.#myModel instanceof BaseModel && this.#mongooseModel.prototype instanceof MongooseModel) {
                let query = this.#mongooseModel.find().where(this.#myModel.toJSON());
                try {
                    result = await query.exec();
                } catch (error) {
                    console.error(error);
                }
            } else {
                if (!(this.#myModel instanceof BaseModel)) {
                    throw new Error(`myModel is Supposed To Be of Type BaseModel`)
                }
                if (!(this.#mongooseModel.prototype instanceof BaseModel)) {
                    throw new Error(`mongooseModel is Supposed To Be of Type MongooseModel`)
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
        DatabaseConfig.close();

        return result;
    }

    async _readAll() {
        let result;
        await DatabaseConfig.connect().catch((error) => {
            console.error(error);
        });
        if (this.#mongooseModel !== undefined && this.#mongooseModel.prototype instanceof MongooseModel) {
            let query = this.#mongooseModel.find();
            try {
                result = await query.exec();
            } catch (error) {
                console.error(error);
            }
        } else {
            if (this.#mongooseModel === undefined) {
                throw new Error(`mongooseModel has not been initialized`);
            }
            if (!(this.#mongooseModel.prototype instanceof MongooseModel)) {
                throw new Error(`mongooseModel has not been initialized`);
            }
        }
        DatabaseConfig.close();

        return result;
    }

    async _updateOne() {
        let result = false;
        await DatabaseConfig.connect().catch((err) => {
            console.error(err);
        });
        if (this.#myModel !== undefined && this.#mongooseModel !== undefined) {
            if (this.#myModel instanceof BaseModel && this.#mongooseModel.prototype instanceof MongooseModel) {
                let query = this.#mongooseModel.findByIdAndUpdate(this.#myModel._id, this.#myModel.toJSON());
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
        DatabaseConfig.close();

        return result;
    }

    async _deleteOne() {
        let result = false;
        await DatabaseConfig.connect().catch((err) => {
            console.error(err);
        });
        if (this.#myModel !== undefined && this.#mongooseModel !== undefined) {
            if (this.#myModel instanceof BaseModel && this.#mongooseModel.prototype instanceof MongooseModel) {
                let query = this.#mongooseModel.findByIdAndDelete(this.#myModel.toJSON());
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
        DatabaseConfig.close();

        return result;
    }
}

module.exports = BaseController;