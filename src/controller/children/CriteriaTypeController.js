const BaseController = require("../parent/BaseController");
const CriteriaTypeModel = require("../../model/children/CriteriaTypeModel");
const CriteriaTypeSchema = require("../../schema/children/CriteriaTypeSchema");
const DatabaseSCollectionDictionary = require("../../dictionary/database/collection/singular/DatabaseSCollectionDictionary");

const mongoose = require("mongoose");

class CriteriaTypeController extends BaseController {

    async findOne(model) {
        let result;
        if (model instanceof CriteriaTypeModel) {
            let schema = CriteriaTypeSchema.getNewSchema();
            let mongooseModel = mongoose.model(DatabaseSCollectionDictionary.CRITERIA_TYPE, schema);

            super.myModel = model;
            super.mongooseModel = mongooseModel;
            result = await super._readOne();
            mongoose.deleteModel(DatabaseSCollectionDictionary.CRITERIA_TYPE);
        } else {
            throw new Error(`${__filename}: model must be of type CriteriaTypeModel`);
        }

        return result;
    }

    async createOne(model) {
        let result = false;
        if (model instanceof CriteriaTypeModel) {
            let schema = CriteriaTypeSchema.getNewSchema();
            let mongooseModel = mongoose.model(DatabaseSCollectionDictionary.CRITERIA_TYPE, schema);

            super.myModel = model;
            super.mongooseModel = mongooseModel;
            result = await super._createOne();
            mongoose.deleteModel(DatabaseSCollectionDictionary.CRITERIA_TYPE);
        } else {
            throw new Error(`${__filename}: model must be of type CriteriaTypeModel`);
        }

        return result;
    }
}

module.exports = CriteriaTypeController;