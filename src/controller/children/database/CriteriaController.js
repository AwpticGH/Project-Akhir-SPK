const BaseController = require("../../parent/BaseController");
const CriteriaModel = require("../../../model/children/database/CriteriaModel");
const CriteriaSchema = require("../../../schema/children/CriteriaSchema");
const DatabaseSCollectionDictionary = require("../../../dictionary/database/collection/singular/DatabaseSCollectionDictionary");

const mongoose = require("mongoose");

class CriteriaController extends BaseController {

    async readAll() {
        let schema = CriteriaSchema.getNewSchema();
        super.mongooseModel = mongoose.model(DatabaseSCollectionDictionary.CRITERIA, schema);
        let result = await super._readAll();
        mongoose.deleteModel(DatabaseSCollectionDictionary.CRITERIA);
        return result;
    }
}

module.exports = CriteriaController;