const RouterDictionary = require("../../dictionary/web/router/RouterDictionary");
const AuthenticationFlag = require("../../flag/AuthenticationFlag");
const EmployeeModel = require("../../model/children/EmployeeModel");
const EmployeeController = require("../../controller/children/EmployeeController");

const express = require("express");
const router = express.Router();

router.get(RouterDictionary.EMPLOYEE_CREATE, (request, response) => {
    // TODO: Uncomment the lines below after everything is finished
    // if (!AuthenticationFlag.isAuthenticated(request)) {
    //     return response.redirect(RouterDictionary.LOGIN);
    // }

    return response.render("inputkaryawan", {
        layout: "static/main",
        page_title: "Create Employee"
    });
});

router.get(RouterDictionary.EMPLOYEE_SHOW, async (request, response) => {
    // TODO: Uncomment the lines below after everything is finished
    // if (!AuthenticationFlag.isAuthenticated(request)) {
    //     return response.redirect(RouterDictionary.LOGIN);
    // }

    return response.render("karyawan", {
        layout: "static/main",
        page_title: "Show Employees"
    });
});

router.get(RouterDictionary.CRITERIA_SHOW, async (request, response) => {
    // TODO: Uncomment the lines below after everything is finished
    // if (!AuthenticationFlag.isAuthenticated(request)) {
    //     return response.redirect(RouterDictionary.LOGIN);
    // }

    return response.render("criteria", {
        layout: "static/main",
        page_title: "Show Criteria"
    });
});

router.post(RouterDictionary.EMPLOYEE_CREATE, async (request, response) => {
    // let model = new EmployeeModel();
    // model.uid = StringGenerator.generateUid();
    // model.first_name = request.body[];
    // model.last_name = "Tiga";
    // model.datetime_of_employment = new Date();
    // model.division_uid = StringGenerator.generateSecretKey();
    // console.log(`model = ${JSON.stringify(model.toJSON())}`);
    //
    // employeeController = new EmployeeController();
    // let result = await employeeController.create(model);
    // console.log(result);
});

module.exports = router;