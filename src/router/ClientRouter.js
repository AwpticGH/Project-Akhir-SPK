// personal
const DatabaseModel = require("../../dictionary/database/collection/plural/DatabasePCollectionDictionary");
const EmployeeModel = require("../../model/children/EmployeeModel");
const EmployeeController = require("../../controller/children/EmployeeController");
const StringGenerator = require("../../helper/generator/StringGenerator");
const RouterDictionary = require("../../dictionary/web/router/ClientRouterDictionary");

// third-party
const express = require("express");
const router = express.Router();

let employeeController;

router.get(RouterDictionary.HOME, (request, response)  => {
    // arahin ke file dashboard
    console.log("ClientRouter.get(HOME) = " + request.originalUrl);
    return response.render("index", {
        layout: "static/main",
        page_title: "Home"
    });
});

router.get(RouterDictionary.LOGIN, async (request, response) => {
   // arahin ke file login
});

router.post(RouterDictionary.EMPLOYEE_CREATE, async (request, response) => {
    let model = new EmployeeModel();
    model.uid = StringGenerator.generateUid();
    model.first_name = request.body[];
    model.last_name = "Tiga";
    model.datetime_of_employment = new Date();
    model.division_uid = StringGenerator.generateSecretKey();
    console.log(`model = ${JSON.stringify(model.toJSON())}`);

    employeeController = new EmployeeController();
    let result = await employeeController.create(model);
    console.log(result);
});

module.exports = router;