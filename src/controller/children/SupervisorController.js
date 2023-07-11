const BaseController = require("../parent/BaseController");
const SupervisorModel = require("../../model/children/database/SupervisorModel");
const SupervisorSchema = require("../../schema/children/SupervisorSchema");
const DatabaseSCollectionDictionary = require("../../dictionary/database/collection/singular/DatabaseSCollectionDictionary");

const mongoose = require("mongoose");

class SupervisorController extends BaseController {

    async readOne(model) {
        let result;
        if (model instanceof SupervisorModel) {
            let schema = SupervisorSchema.getNewSchema();
            let mongooseModel = mongoose.model(DatabaseSCollectionDictionary.SUPERVISOR, schema);

            super.myModel = model;
            super.mongooseModel = mongooseModel;
            result = await super._readOne();
            mongoose.deleteModel(DatabaseSCollectionDictionary.SUPERVISOR);
        } else {
            throw new Error(`${__filename}: model must be of type SupervisorModel`);
        }
        return result;
    }

    // ONLY FOR DB INIT PURPOSE
    async createOne(model) {
        let result;
        if (model instanceof SupervisorModel) {
            let schema = SupervisorSchema.getNewSchema();
            let mongooseModel = mongoose.model(DatabaseSCollectionDictionary.SUPERVISOR, schema);

            super.myModel = model;
            super.mongooseModel = mongooseModel;
            result = await super._createOne();
            mongoose.deleteModel(DatabaseSCollectionDictionary.SUPERVISOR);
        } else {
            throw new Error(`${__filename}: model must be of type SupervisorModel`);
        }

        return result;
    }
}

module.exports = SupervisorController;