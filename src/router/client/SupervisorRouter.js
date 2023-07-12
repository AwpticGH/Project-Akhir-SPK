const RouterDictionary = require("../../dictionary/web/router/RouterDictionary");
const WebVariableDictionary = require("../../dictionary/web/variable/WebVariableDictionary");
const SessionVariableDictionary = require("../../dictionary/web/variable/SessionVariableDictionary");
const AlertDictionary = require("../../dictionary/web/alert/AlertDictionary")
const StringGenerator = require("../../helper/generator/StringGenerator");
const SupervisorModel = require("../../model/children/database/SupervisorModel");
const SupervisorController = require("../../controller/children/database/SupervisorController");

const express = require("express");
const AuthenticationFlag = require("../../flag/AuthenticationFlag");
const router = express.Router();

router.get(RouterDictionary.LOGIN, (request, response) => {
    return response.render("supervisor/index", {
        layout: "static/login",
        page_title: "Login",
        css_file: ["supervisor/index"]
    });
});

router.post(RouterDictionary.LOGIN, async (request, response) => {
    let model = new SupervisorModel();
    model.username = request.body[WebVariableDictionary.USERNAME];

    let controller = new SupervisorController();
    model = await controller.readOne(model);
    if (model === null || model === undefined) {
        request.session[SessionVariableDictionary.ALERT] = AlertDictionary.LOGIN_FAILED
        return response.redirect(RouterDictionary.LOGIN);
    } else {
        if (model.password === await StringGenerator.generateHashedPassword(request.body[WebVariableDictionary.PASSWORD])) {
            request.session[SessionVariableDictionary.SUPERVISOR_MODEL] = model;
            return response.redirect(RouterDictionary.HOME);
        } else {
            request.session[SessionVariableDictionary.ALERT] = AlertDictionary.LOGIN_FAILED;
            return response.redirect(RouterDictionary.LOGIN);
        }
    }
});

router.get(RouterDictionary.LOGOUT, (request, response, next) => {
    request.session[SessionVariableDictionary.SUPERVISOR_MODEL] = null;
    response.redirect(RouterDictionary.LOGIN);
});

router.get(RouterDictionary.CREATE_SUPERVISOR_1, async (request, response) => {
    let model = new SupervisorModel();
    model.division_uid = "cdb7cf45de925907ce61a87d323464ab";

    let controller = new SupervisorController();
    model = await controller.readOne(model);
    let responseModel = {};
    if (model === null || model === undefined) {
        model = new SupervisorModel();
        model._id = StringGenerator.generateUid();
        model.username = "rafifajarrr";
        let password = "refresh";
        model.password = await StringGenerator.generateHashedPassword(password);
        model.first_name = "Rafi Fajar";
        model.last_name = "Sulaiman"
        model.division_uid = "cdb7cf45de925907ce61a87d323464ab";

        let created = await controller.createOne(model);
        responseModel.message = {
            status: created,
            operation: "create"
        };
    } else {
        responseModel.message = {
            status: true,
            operation: "read"
        };
    }
    responseModel.data = model.toJSON();

    return response.json(responseModel);
});

router.get(RouterDictionary.CREATE_SUPERVISOR_2, async (request, response) => {
    let model = new SupervisorModel();
    model.division_uid = "79f607dd90ae636d32944bffba3a51a9";

    let controller = new SupervisorController();
    model = await controller.readOne(model);
    let responseModel = {};
    if (model === null || model === undefined) {
        model = new SupervisorModel();
        model._id = StringGenerator.generateUid();
        model.username = "admin_finance";
        let password = "finance123";
        model.password = await StringGenerator.generateHashedPassword(password);
        model.first_name = "Finance";
        model.last_name = "Supervisor"
        model.division_uid = "79f607dd90ae636d32944bffba3a51a9";

        let created = await controller.createOne(model);
        responseModel.message = {
            status: created,
            operation: "create"
        };
    } else {
        responseModel.message = {
            status: true,
            operation: "read"
        };
    }
    responseModel.data = model.toJSON();

    return response.json(responseModel);
})

router.get(RouterDictionary.CREATE_SUPERVISOR_3, async (request, response) => {
    let model = new SupervisorModel();
    model.division_uid = "097e698fd3960c1e6fabfa572a3dd129";

    let controller = new SupervisorController();
    model = await controller.readOne(model);
    let responseModel = {};
    if (model === null || model === undefined) {
        model = new SupervisorModel();
        model._id = StringGenerator.generateUid();
        model.username = "admin_human_resource";
        let password = "hr123";
        model.password = await StringGenerator.generateHashedPassword(password);
        model.first_name = "Human Resource";
        model.last_name = "Supervisor"
        model.division_uid = "097e698fd3960c1e6fabfa572a3dd129";

        let created = await controller.createOne(model);
        responseModel.message = {
            status: created,
            operation: "create"
        };
    } else {
        responseModel.message = {
            status: true,
            operation: "read"
        };
    }
    responseModel.data = model.toJSON();

    return response.json(responseModel);
});

module.exports = router;