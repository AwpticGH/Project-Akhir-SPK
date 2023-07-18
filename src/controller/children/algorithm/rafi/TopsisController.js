const BaseController = require("../../../parent/BaseController");
const WebVariableDictionary = require("../../../../dictionary/web/variable/WebVariableDictionary");
const SessionVariableDictionary = require("../../../../dictionary/web/variable/SessionVariableDictionary");
const CriteriaTypeModel = require("../../../../model/children/database/CriteriaTypeModel");
const CriteriaTypeController = require("../../database/CriteriaTypeController");
const CriteriaModel = require("../../../../model/children/database/CriteriaModel");
const CriteriaController = require("../../database/CriteriaController");
const DivisionModel = require("../../../../model/children/database/DivisionModel");
const DivisionController = require("../../database/DivisionController");
const EmployeeModel = require("../../../../model/children/database/EmployeeModel");
const EmployeeController = require("../../database/EmployeeController");
const MatrixScoreModel = require("../../../../model/children/database/MatrixScoreModel");
const MatrixScoreController = require("../../database/MatrixScoreController");
const TopsisModel = require("../../../../model/children/algorithm/rafi/TopsisModel");

class TopsisController extends BaseController {

    async readAll(request) {
        let result = [];

        let criteriaTypeController = new CriteriaTypeController();
        let criteriaTypes = await criteriaTypeController.readAll();

        let criteriaController = new CriteriaController();
        let criterias = await criteriaController.readAll();

        let employeeModels = new EmployeeModel();
        employeeModels.division_uid = request.session[SessionVariableDictionary.SUPERVISOR_MODEL].division_uid;
        let employeeController = new EmployeeController();
        employeeModels = await employeeController.readMany(employeeModels);

        let divisionModel = new DivisionModel();
        divisionModel._id = request.session[SessionVariableDictionary.SUPERVISOR_MODEL].division_uid;
        let divisionController = new DivisionController();
        divisionModel = await divisionController.readOne(divisionModel);

        let length = employeeModels.length;
        let matrixScoreModels = [];
        let matrixScoreController = new MatrixScoreController();
        for (let i = 0; i < length; i++) {
            let employee = employeeModels[i];
            let matrixScoreModel = new MatrixScoreModel();
            matrixScoreModel.employee_uid = employee._id;
            matrixScoreModel = await matrixScoreController.readMany(matrixScoreModel);
            matrixScoreModels.push(matrixScoreModel);
        }

        length = matrixScoreModels.length;
        let employeeLength = employeeModels.length;
        let criteriaLength = criterias.length;

        // for (let i = 0; i < length; i++) {
        //     for (let j = 0; j < criteriaLength; j++) {
        //         let index = (i * criteriaLength) + j;
        //         if (matrixScoreModels[index] !== undefined && matrixScoreModels[index].length !== 0) {
        //             console.log(matrixScoreModels[index][0].employee_uid);
        //         }
        //     }
        // }

        for (let i = 0; i < length; i++) {
            console.log(`iterasi i ke-${i}`);
            let topsisModel = new TopsisModel();
            console.log("model = " + topsisModel.toJSON());

            for (let j = 0; j < criteriaLength; j++) {
                console.log(`iterasi j ke-${j}`);
                let index = (i * criteriaLength) + j;
                if (matrixScoreModels[index] !== undefined && matrixScoreModels[index].length !== 0) {
                    // set name
                    if (topsisModel.firstName !== undefined) {
                        for (let k = 0; k < employeeLength; k++) {
                            // console.log(matrixScoreModels[i]);
                            // console.log(`i = ${i}`);
                            // console.log(`j = ${j}`);
                            // console.log(`k = ${k}`);
                            // console.log(`index = ${index}`);
                            // console.log(`pre-topsisModel.first_name = ${topsisModel.first_name}`);
                            if (employeeModels[k]._id === matrixScoreModels[index][0].employee_uid) {
                                // set name
                                topsisModel.first_name = employeeModels[k].first_name;
                                topsisModel.last_name = employeeModels[k].last_name;
                                console.log(`post-topsisModel.first_name = ${topsisModel.first_name}`);
                                console.log(`post-topsisModel.last_name = ${topsisModel.last_name}\n`);
                                break;
                            }
                        }
                    }

                    // set scores
                    topsisModel.scores[j] = {};
                    topsisModel.scores[j].criteria = criterias[j].name;
                    topsisModel.scores[j].score = matrixScoreModels[index][j].score;
                }
            }

            result.push(topsisModel);
        }

        length = result.length;

        result.forEach((x) => {
            console.log(x.toJSON());
        });
        return result;
    }
}

module.exports = TopsisController;