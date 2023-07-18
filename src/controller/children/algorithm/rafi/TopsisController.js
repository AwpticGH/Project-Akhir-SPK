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
const TopsisAlgorithm = require("../../../../helper/algorithm/rafi/TopsisAlgorithm");
const SortingAlgorithm = require("../../../../helper/algorithm/sorting/SortingAlgorithm");

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
        let index = 0;

        for (let i = 0; i < length; i++) {
            if (matrixScoreModels[i] !== undefined && matrixScoreModels[i].length !== 0) {
                let topsisModel = new TopsisModel();

                // set name
                for (let k = 0; k < employeeLength; k++) {
                    if (employeeModels[k]._id === matrixScoreModels[i][0].employee_uid) {
                        // set name
                        topsisModel.first_name = employeeModels[k].first_name;
                        topsisModel.last_name = employeeModels[k].last_name;
                        break;
                    }
                }

                for (let j = 0; j < criteriaLength; j++) {
                    let index = (i * criteriaLength) + j;

                    // set scores
                    // console.log(matrixScoreModels[i][j]);
                    topsisModel.scores[j] = {};
                    topsisModel.scores[j].criteria = criterias[j].name;
                    topsisModel.scores[j].score = Number.parseInt(matrixScoreModels[i][j].score);
                    if (matrixScoreModels[index] !== undefined && matrixScoreModels[index].length !== 0) {
                    }
                }

                result.push(topsisModel);
            }
        }

        length = result.length;
        // row by column
        let listPembagi = [];
        for (let i = 0; i < criteriaLength; i++) {
            let temp = [];
            for (let j = 0; j < length; j++) {
                if (temp[i] === undefined) {
                    temp[i] = [];
                }
                temp[i][j] = result[j].scores[i].score;
            }
            listPembagi[i] = TopsisAlgorithm.pembagi(temp[i]);
        }

        // ternormalisasi
        // row by column
        for (let i = 0; i < criteriaLength; i++) {
            for (let j = 0; j < length; j++) {
                result[j].ternormalisasi[i] = TopsisAlgorithm.normalisasi(result[j].scores[i].score, listPembagi[i]);
            }
        }

        // terbobot
        // row by column
        for (let i = 0; i < criteriaLength; i++) {
            for (let j = 0; j < length; j++) {
                result[j].terbobot[i] = TopsisAlgorithm.bobot(result[j].ternormalisasi[i], criterias[i].point);
            }
        }

        // row by column
        let listAPlus = [];
        let listAMinus = [];
        for (let i = 0; i < criteriaLength; i++) {
            let temp = [];
            for (let j = 0; j < length; j++) {
                if (temp[i] === undefined) {
                    temp[i] = [];
                }
                temp[i][j] = result[j].terbobot[i];
            }
            listAPlus[i] = TopsisAlgorithm.hitungAPlus(temp[i], criteriaTypes[0].type);
            listAMinus[i] = TopsisAlgorithm.hitungAMinus(temp[i], criteriaTypes[0].type);
        }

        // column by row
        for (let i = 0; i < length; i++) {
            result[i].nilaiDPlus = TopsisAlgorithm.hitungNilaiD(listAPlus, result[i].terbobot);
            result[i].nilaiDMinus = TopsisAlgorithm.hitungNilaiD(listAMinus, result[i].terbobot);
            result[i].hasil = TopsisAlgorithm.hitungHasil(result[i].nilaiDPlus, result[i].nilaiDMinus);
        }

        result = SortingAlgorithm.bubbleSort(result);

        result.forEach((x) => {
            console.log(x.toJSON());
            console.log("\n");
        });

        return result;
    }
}

module.exports = TopsisController;