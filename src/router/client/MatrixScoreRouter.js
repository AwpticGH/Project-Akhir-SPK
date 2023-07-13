const RouterDictionary = require("../../dictionary/web/router/RouterDictionary");
const AuthenticationFlag = require("../../flag/AuthenticationFlag");

const express = require("express");
const router = express.Router();

router.get(RouterDictionary.MATRIX_SCORE_SHOW, async (request, response) => {
    /* TODO:
    *   Write matrix-score read logic
    * */

    return response.render("perhitungan", {
        layout: "static/main",
        page_title: "Perhitungan"
    });
});

module.exports = router;