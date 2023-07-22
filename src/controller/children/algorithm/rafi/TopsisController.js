const BaseController = require("../../../parent/BaseController");
const TopsisModel = require("../../../../model/children/algorithm/rafi/TopsisModel");
const TopsisAlgorithm = require("../../../../helper/algorithm/rafi/TopsisAlgorithm");
const SortingAlgorithm = require("../../../../helper/algorithm/sorting/SortingAlgorithm");

class TopsisController extends BaseController {

    async readAll(criteriaTypeModels, criteriaModels, divisionModel, employeeModels, matrixScoreModels) {
        let result = [];

        let length = matrixScoreModels.length;
        let employeeLength = employeeModels.length;
        let criteriaLength = criteriaModels.length;
        let index = 0;

        for (let i = 0; i < length; i++) {
            if (matrixScoreModels[i] !== undefined && matrixScoreModels[i].length !== 0) {
                let topsisModel = new TopsisModel();

                // set name
                for (let k = 0; k < employeeLength; k++) {
                    if (employeeModels[k]._id === matrixScoreModels[i][0].employee_uid) {
                        // set name
                        topsisModel.uid = employeeModels[k]._id;
                        topsisModel.first_name = employeeModels[k].first_name;
                        topsisModel.last_name = employeeModels[k].last_name;
                        break;
                    }
                }

                for (let j = 0; j < criteriaLength; j++) {
                    index = (i * criteriaLength) + j;

                    // set scores
                    // console.log(matrixScoreModels[i][j]);
                    topsisModel.scores[j] = {};
                    topsisModel.scores[j].criteria = criteriaModels[j].name;
                    topsisModel.scores[j].score = Number.parseInt(matrixScoreModels[i][j].score);
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
                result[j].terbobot[i] = TopsisAlgorithm.bobot(result[j].ternormalisasi[i], criteriaModels[i].point);
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
            listAPlus[i] = TopsisAlgorithm.hitungAPlus(temp[i], criteriaTypeModels[0].type);
            listAMinus[i] = TopsisAlgorithm.hitungAMinus(temp[i], criteriaTypeModels[0].type);
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

        return {
            topsis_models: result,
            list_a_plus: listAPlus,
            list_a_minus: listAMinus
        };
    }
}

module.exports = TopsisController;