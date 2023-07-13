const RouterDictionary = require("../../dictionary/web/router/RouterDictionary");
const AuthenticationFlag = require("../../flag/AuthenticationFlag");

const express = require("express");
const router = express.Router();

router.get(RouterDictionary.CRITERIA_SHOW, async (request, response) => {
    /* TODO:
    *   Write criteria-read logic
    * */

    return response.render("criteria", {
        layout: "static/main",
        page_title: "Show Criteria"
    });
});

module.exports = router;