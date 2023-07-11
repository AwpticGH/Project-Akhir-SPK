const RouterDictionary = require("../../dictionary/web/router/RouterDictionary");
const WebVariableDictionary = require("../../dictionary/web/variable/WebVariableDictionary");
const SessionVariableDictionary = require("../../dictionary/web/variable/SessionVariableDictionary");
const SupervisorSchemaDictionary = require("../../dictionary/database/schema/SupervisorSchemaDictionary");
const StringGenerator = require("../../helper/generator/StringGenerator");
const AuthenticationFlag = require("../../flag/AuthenticationFlag");
const EmployeeModel = require("../../model/children/EmployeeModel");
const EmployeeController = require("../../controller/children/EmployeeController");
const DivisionModel = require("../../model/children/DivisionModel");
const DivisionController = require("../../controller/children/DivisionController");

const express = require("express");
const router = express.Router();

router.get(RouterDictionary.EMPLOYEE_CREATE, (request, response) => {
    return response.render("inputkaryawan", {
        layout: "static/main",
        page_title: "Create Employee"
    });
});

router.get(RouterDictionary.EMPLOYEE_SHOW, async (request, response) => {
    return response.render("karyawan", {
        layout: "static/main",
        page_title: "Show Employees"
    });
});

router.get(RouterDictionary.CRITERIA_SHOW, async (request, response) => {
    return response.render("criteria", {
        layout: "static/main",
        page_title: "Show Criteria"
    });
});

router.post(RouterDictionary.EMPLOYEE_CREATE, async (request, response) => {
    let model = new EmployeeModel();
    model._id = StringGenerator.generateUid();
    model.first_name = request.body[WebVariableDictionary.EMPLOYEE_FIRST_NAME];
    model.last_name = request.body[WebVariableDictionary.EMPLOYEE_LAST_NAME];
    model.datetime_of_employment = new Date();
    model.division_uid = request.session[SessionVariableDictionary][SupervisorSchemaDictionary.DIVISION_UID];
    console.log(`${__filename}: model = ${JSON.stringify(model.toJSON())}`);

    let controller = new EmployeeController();
    let result = await controller.createOne(model);
    console.log(`${__filename}: result = ${result}`);
});

module.exports = router;