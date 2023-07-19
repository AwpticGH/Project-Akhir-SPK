const RouterDictionary = require("../../dictionary/web/router/RouterDictionary");
const WebVariableDictionary = require("../../dictionary/web/variable/WebVariableDictionary");
const SessionVariableDictionary = require("../../dictionary/web/variable/SessionVariableDictionary");
const AlertDictionary = require("../../dictionary/web/alert/AlertDictionary");
const StringGenerator = require("../../helper/generator/StringGenerator");
const MatrixScoreModel = require("../../model/children/database/MatrixScoreModel");
const MatrixScoreController = require("../../controller/children/database/MatrixScoreController");
const TopsisModel = require("../../model/children/algorithm/benaya/TopsisModel");
const TopsisController = require("../../controller/children/algorithm/rafi/TopsisController");

const express = require("express");
const router = express.Router();

router.get(RouterDictionary.MATRIX_SCORE_SHOW, async (request, response) => {
    let controller = new TopsisController();
    let topsisModels = await controller.readAll(request);

    return response.render("perhitungan", {
        layout: "static/main",
        page_title: "Perhitungan",
        topsis_models: topsisModels
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