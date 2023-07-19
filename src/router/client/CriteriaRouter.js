const RouterDictionary = require("../../dictionary/web/router/RouterDictionary");
const CriteriaModel = require("../../model/children/database/CriteriaModel");
const CriteriaController = require("../../controller/children/database/CriteriaController");
const CriteriaTypeModel = require("../../model/children/database/CriteriaTypeModel");
const CriteriaTypeController = require("../../controller/children/database/CriteriaTypeController");

const express = require("express");
const router = express.Router();

router.get(RouterDictionary.CRITERIA_SHOW, async (request, response) => {
    let typeController = new CriteriaTypeController();
    let types = await typeController.readAll();

    let controller = new CriteriaController();
    let criterias = await controller.readAll();

    return response.render("criteria", {
        layout: "static/main",
        page_title: "Show Criteria",
        criterias: criterias,
        criteria_types: types
    });
});

module.exports = router;