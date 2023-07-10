const BaseController = require("../parent/BaseController");
const MatrixScoreModel = require("../../model/children/MatrixScoreModel");
const MatrixScoreSchema = require("../../schema/children/MatrixScoreSchema");
const DatabaseSCollectionDictionary = require("../../dictionary/database/collection/singular/DatabaseSCollectionDictionary");

const mongoose = require("mongoose");
const {mongo} = require("mongoose");

class MatrixScoreController extends BaseController {

    async createMany(models) {
        let result;
        let isValid = true;
        let length = models.length;
        for (let i = 0; i < length; i++) {
            if (!(models[i] instanceof MatrixScoreModel)) {
                isValid = false;
            }
        }
        if (isValid) {
            let schema = MatrixScoreSchema.getNewSchema();
            let mongooseModel = mongoose.model(DatabaseSCollectionDictionary.MATRIX_SCORE, schema);

            super.myModel = models;
            super.mongooseModel = mongooseModel;
            result = await super._createMany();
            mongoose.deleteModel(DatabaseSCollectionDictionary.MATRIX_SCORE);
        } else {
            throw new Error(`${__filename}: one or more of the models isn't of type MatrixScoreModel`);
        }

        return result;
    }

    async readMany(model) {
        let result;
        if (model instanceof MatrixScoreModel) {
            let schema = MatrixScoreSchema.getNewSchema();
            let mongooseModel = mongoose.model(DatabaseSCollectionDictionary.MATRIX_SCORE, schema);

            super.myModel = model;
            super.mongooseModel = mongooseModel;
            result = await super._readMany();
            mongoose.deleteModel(DatabaseSCollectionDictionary.MATRIX_SCORE);
        } else {
            throw new Error(`${__filename}: model must be of type MatrixScoreModel`);
        }

        return result;
    }
}

module.exports = MatrixScoreController;