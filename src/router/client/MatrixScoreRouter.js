const RouterDictionary = require("../../dictionary/web/router/RouterDictionary");
const WebVariableDictionary = require("../../dictionary/web/variable/WebVariableDictionary");
const SessionVariableDictionary = require("../../dictionary/web/variable/SessionVariableDictionary");
const AlertDictionary = require("../../dictionary/web/alert/AlertDictionary");
const StringGenerator = require("../../helper/generator/StringGenerator");
const MatrixScoreModel = require("../../model/children/database/MatrixScoreModel");
const MatrixScoreController = require("../../controller/children/database/MatrixScoreController");
const TopsisController = require("../../controller/children/algorithm/rafi/TopsisController");

const express = require("express");
const CriteriaTypeController = require("../../controller/children/database/CriteriaTypeController");
const CriteriaController = require("../../controller/children/database/CriteriaController");
const EmployeeModel = require("../../model/children/database/EmployeeModel");
const EmployeeController = require("../../controller/children/database/EmployeeController");
const DivisionModel = require("../../model/children/database/DivisionModel");
const DivisionController = require("../../controller/children/database/DivisionController");
const router = express.Router();

router.get(RouterDictionary.MATRIX_SCORE_SHOW, async (request, response) => {
    let criteriaTypeController = new CriteriaTypeController();
    let criteriaTypeModels = await criteriaTypeController.readAll();

    let criteriaController = new CriteriaController();
    let criteriaModels = await criteriaController.readAll();

    let divisionModel = new DivisionModel();
    divisionModel._id = request.session[SessionVariableDictionary.SUPERVISOR_MODEL].division_uid;
    let divisionController = new DivisionController();
    divisionModel = await divisionController.readOne(divisionModel);

    let employeeModels = new EmployeeModel();
    employeeModels.division_uid = request.session[SessionVariableDictionary.SUPERVISOR_MODEL].division_uid;
    let employeeController = new EmployeeController();
    employeeModels = await employeeController.readMany(employeeModels);

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

    let controller = new TopsisController();
    let result = await controller.readAll(criteriaTypeModels, criteriaModels, divisionModel, employeeModels, matrixScoreModels);

    return response.render("perhitungan", {
        layout: "static/main",
        page_title: "Perhitungan",
        topsis_models: result.topsis_models,
        list_a_plus: result.list_a_plus,
        list_a_minus: result.list_a_minus,
        criteria_type_models: criteriaTypeModels,
        criteria_models: criteriaModels,
        employee_models: employeeModels,
        division_model: divisionModel
    });
});

router.post(RouterDictionary.MATRIX_SCORE_CREATE, async (request, response) => {
    let criterias = JSON.parse(request.body[WebVariableDictionary.CRITERIAS]);
    let length = criterias.length;

    let matricesScore = [];
    for (let i = 0; i < length; i++) {
        let criteria = criterias[i];
        let matrixScore = new MatrixScoreModel();
        matrixScore._id = StringGenerator.generateUid();
        matrixScore.score = Number.parseInt(request.body[criteria.name]);
        matrixScore.timestamp = new Date();
        matrixScore.criteria_uid = criteria._id;
        matrixScore.employee_uid = request.body[WebVariableDictionary.EMPLOYEE_UID];

        matricesScore.push(matrixScore);
    }

    matricesScore.forEach((score) => console.log(score.toJSON()))

    let controller = new MatrixScoreController();
    let result = await controller.createMany(matricesScore);

    let isValid = true;
    for (let status of result) {
        if (!status) {
            isValid = false;
        }
    }

    request.session[SessionVariableDictionary.ALERT] = isValid ? AlertDictionary.CREATE_SUCCESS : AlertDictionary.CREATE_FAILED;
    return response.redirect(RouterDictionary.EMPLOYEE_SHOW);
});

module.exports = router;