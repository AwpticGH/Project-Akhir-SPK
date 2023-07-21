const RouterDictionary = require("../../dictionary/web/router/RouterDictionary");
const WebVariableDictionary = require("../../dictionary/web/variable/WebVariableDictionary");
const SessionVariableDictionary = require("../../dictionary/web/variable/SessionVariableDictionary");
const AlertDictionary = require("../../dictionary/web/alert/AlertDictionary");
const SupervisorSchemaDictionary = require("../../dictionary/database/schema/SupervisorSchemaDictionary");
const StringGenerator = require("../../helper/generator/StringGenerator");
const EmployeeModel = require("../../model/children/database/EmployeeModel");
const EmployeeController = require("../../controller/children/database/EmployeeController");
const DivisionModel = require("../../model/children/database/DivisionModel");
const DivisionController = require("../../controller/children/database/DivisionController");
const MatrixScoreModel = require("../../model/children/database/MatrixScoreModel");
const MatrixScoreController = require("../../controller/children/database/MatrixScoreController");
const CriteriaController = require("../../controller/children/database/CriteriaController");

const express = require("express");
const router = express.Router();

router.get(RouterDictionary.EMPLOYEE_CREATE, (request, response) => {
    return response.render("inputkaryawan", {
        layout: "static/main",
        page_title: "Create Employee"
    });
});

router.get(RouterDictionary.EMPLOYEE_SHOW, async (request, response) => {
    let divisionController = new DivisionController();
    let divisionModel = new DivisionModel();
    divisionModel._id = request.session[SessionVariableDictionary.SUPERVISOR_MODEL].division_uid;
    divisionModel = await divisionController.readOne(divisionModel);

    let employeeController = new EmployeeController();
    let employeeModel = new EmployeeModel();
    employeeModel.division_uid = divisionModel._id;
    let employees = await employeeController.readMany(employeeModel);

    let criteriaController = new CriteriaController();
    let criterias = await criteriaController.readAll();

    let matrices = [];
    let matrixScoreController = new MatrixScoreController();
    for (let i = 0; i < employees.length; i++) {
        let employee = employees[i];
        let matrixScoreModel = new MatrixScoreModel();
        matrixScoreModel.employee_uid = employee._id;
        matrixScoreModel = await matrixScoreController.readMany(matrixScoreModel);
        matrices.push(matrixScoreModel);
    }

    return response.render("karyawan", {
        layout: "static/main",
        page_title: "Show Employees",
        js_file: ["karyawan/modal-delete", "karyawan/modal-edit", "karyawan/modal-matrix"],
        employees: employees,
        division: divisionModel,
        criterias: criterias,
        matrices: matrices
    });
});

router.post(RouterDictionary.EMPLOYEE_CREATE, async (request, response) => {
    let model = new EmployeeModel();
    model._id = StringGenerator.generateUid();
    model.first_name = request.body[WebVariableDictionary.EMPLOYEE_FIRST_NAME];
    model.last_name = request.body[WebVariableDictionary.EMPLOYEE_LAST_NAME];
    model.datetime_of_employment = new Date();
    model.division_uid = request.session[SessionVariableDictionary.SUPERVISOR_MODEL][SupervisorSchemaDictionary.DIVISION_UID];

    let controller = new EmployeeController();
    let result = await controller.createOne(model);

    request.session[SessionVariableDictionary.ALERT] = result ? AlertDictionary.CREATE_SUCCESS : AlertDictionary.CREATE_FAILED;
    response.redirect(RouterDictionary.EMPLOYEE_SHOW);
});

router.post(RouterDictionary.EMPLOYEE_UPDATE, async (request, response) => {
    let model = new EmployeeModel();
    model._id = request.body[WebVariableDictionary.EMPLOYEE_UID];

    let controller = new EmployeeController();
    let temp = await controller.readOne(model);
    if (temp.first_name !== request.body[WebVariableDictionary.EMPLOYEE_FIRST_NAME]) {
        model.first_name = request.body[WebVariableDictionary.EMPLOYEE_FIRST_NAME];
    } else {
        model.first_name = temp.first_name;
    }
    if (temp.last_name !== request.body[WebVariableDictionary.EMPLOYEE_LAST_NAME]) {
        model.last_name = request.body[WebVariableDictionary.EMPLOYEE_LAST_NAME];
    } else {
        model.last_name = temp.last_name;
    }
    temp = null;

    let result = await controller.updateOne(model);

    request.session[SessionVariableDictionary.ALERT] = result ? AlertDictionary.UPDATE_SUCCESS : AlertDictionary.UPDATE_FAILED;
    response.redirect(RouterDictionary.EMPLOYEE_SHOW);
});

router.post(RouterDictionary.EMPLOYEE_DELETE, async (request, response) => {
    let model = new EmployeeModel();
    model._id = request.body[WebVariableDictionary.EMPLOYEE_UID];

    let controller = new EmployeeController();
    let result = await controller.deleteOne(model);

    request.session[SessionVariableDictionary.ALERT] = result ? AlertDictionary.DELETE_SUCCESS : AlertDictionary.DELETE_FAILED;
    response.redirect(RouterDictionary.EMPLOYEE_SHOW);
});

module.exports = router;