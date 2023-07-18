const BaseController = require("../../parent/BaseController");
const CriteriaTypeModel = require("../../../model/children/database/CriteriaTypeModel");
const CriteriaTypeSchema = require("../../../schema/children/CriteriaTypeSchema");
const DatabaseSCollectionDictionary = require("../../../dictionary/database/collection/singular/DatabaseSCollectionDictionary");

const mongoose = require("mongoose");

class CriteriaTypeController extends BaseController {

    async readOne(model) {
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

    async readAll() {
        let schema = CriteriaTypeSchema.getNewSchema();
        super.mongooseModel = mongoose.model(DatabaseSCollectionDictionary.CRITERIA_TYPE, schema);

        let result = await super._readAll();
        mongoose.deleteModel(DatabaseSCollectionDictionary.CRITERIA_TYPE);

        return result;
    }
}

module.exports = CriteriaTypeController;