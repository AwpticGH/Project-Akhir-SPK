const BaseController = require("../parent/BaseController");
const DatabaseSCollectionDictionary = require("../../dictionary/database/collection/singular/DatabaseSCollectionDictionary");
const DivisionModel = require("../../model/children/DivisionModel");
const DivisionSchema = require("../../schema/children/DivisionSchema");

const mongoose = require("mongoose");

class DivisionController extends BaseController {

    async createOne(model) {
        let result = false;
        if (model instanceof DivisionModel) {
            let schema = DivisionSchema.getNewSchema();
            let mongooseModel = mongoose.model(DatabaseSCollectionDictionary.DIVISION, schema);

            super.myModel = model;
            super.mongooseModel = mongooseModel;
            result = await super._createOne();
            mongoose.deleteModel(DatabaseSCollectionDictionary.DIVISION);
        } else {
            throw new Error(`${__filename}: model must be of type DivisionModel`);
        }

        return result;
    }

    async findOne(model) {
        let result;
        if (model instanceof DivisionModel) {
            let schema = DivisionSchema.getNewSchema();
            let mongooseModel = mongoose.model(DatabaseSCollectionDictionary.DIVISION, schema);

            super.myModel = model;
            super.mongooseModel = mongooseModel;
            result = await super._findOne()
            mongoose.deleteModel(DatabaseSCollectionDictionary.DIVISION);
        } else {
            throw new Error(`${__filename}: model must be of type DivisionModel`);
        }

        return result;
    }
}

module.exports = DivisionController;