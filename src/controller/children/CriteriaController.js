const BaseController = require("../parent/BaseController");
const CriteriaModel = require("../../model/children/CriteriaModel");
const CriteriaSchema = require("../../schema/children/CriteriaSchema");
const DatabaseSCollectionDictionary = require("../../dictionary/database/collection/singular/DatabaseSCollectionDictionary");

const mongoose = require("mongoose");

class CriteriaController extends BaseController {

    async readAll() {
        let schema = CriteriaSchema.getNewSchema();
        super.mongooseModel = mongoose.model(DatabaseSCollectionDictionary.CRITERIA, schema);
        return await super._readAll();
    }
}

module.exports = CriteriaController;