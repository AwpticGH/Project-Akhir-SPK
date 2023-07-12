const BaseController = require("../../parent/BaseController");
const DatabaseSCollectionDictionary = require("../../../dictionary/database/collection/singular/DatabaseSCollectionDictionary");
const EmployeeModel = require("../../../model/children/database/EmployeeModel");
const EmployeeSchema = require("../../../schema/children/EmployeeSchema");

const mongoose = require("mongoose");

class EmployeeController extends BaseController {

    async createOne(model) {
        let result = false;
        if (model instanceof EmployeeModel) {
            let schema = EmployeeSchema.getNewSchema();
            let mongooseModel = mongoose.model(DatabaseSCollectionDictionary.EMPLOYEE, schema);

            super.myModel = model;
            super.mongooseModel = mongooseModel;
            result = await super._createOne()
            mongoose.deleteModel(DatabaseSCollectionDictionary.EMPLOYEE);
        } else {
            throw new Error(`${__filename}: model must be of type EmployeeModel`);
        }

        return result;
    }

    async readOne(model) {
        let result;
        if (model instanceof EmployeeModel) {
            let schema = EmployeeSchema.getNewSchema();
            let mongooseModel = mongoose.model(DatabaseSCollectionDictionary.EMPLOYEE, schema);

            super.myModel = model;
            super.mongooseModel = mongooseModel;
            result = await super._readOne();
            mongoose.deleteModel(DatabaseSCollectionDictionary.EMPLOYEE);
        } else {
            throw new Error(`${__filename}: model must be of type EmployeeModel`);
        }

        return result;
    }

    async readMany(model) {
        let result;
        if (model instanceof EmployeeModel) {
            let schema = EmployeeSchema.getNewSchema();
            let mongooseModel = mongoose.model(DatabaseSCollectionDictionary.EMPLOYEE, schema);

            super.myModel = model;
            super.mongooseModel = mongooseModel;
            result = await super._readMany();
            mongoose.deleteModel(DatabaseSCollectionDictionary.EMPLOYEE);
        } else {
            throw new Error(`${__filename}: model must be of type EmployeeModel`);
        }

        return result;
    }
}

module.exports = EmployeeController;