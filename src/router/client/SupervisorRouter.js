const ClientRouterDictionary = require("../../dictionary/web/router/ClientRouterDictionary");
const WebVariableDictionary = require("../../dictionary/web/variable/WebVariableDictionary");
const SessionVariableDictionary = require("../../dictionary/web/variable/SessionVariableDictionary");
const AlertDictionary = require("../../dictionary/web/alert/AlertDictionary");
const SupervisorModel = require("../../model/children/SupervisorModel");
const SupervisorController = require("../../controller/children/SupervisorController");

const express = require("express");
const router = express.Router();

router.get(ClientRouterDictionary.LOGIN, (request, response) => {
    return response.render("supervisor/login", {
        layout: "static/main",
        page_title: "Login"
    });
});

router.post(ClientRouterDictionary.LOGIN, async (request, response) => {
    let model = new SupervisorModel();
    model.username = request.body[WebVariableDictionary.USERNAME];

    let controller = new SupervisorController();
    model = await controller.findOne(model);
    if (model === null || model === undefined) {
        response[SessionVariableDictionary.ALERT] = AlertDictionary.LOGIN_FAILED;
        return response.redirect(ClientRouterDictionary.LOGIN);
    } else {
        request.session[SessionVariableDictionary.SUPERVISOR_MODEL] = model;
        return response.redirect(ClientRouterDictionary.HOME);
    }
});