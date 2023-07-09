const RouterDictionary = require("../../dictionary/web/router/RouterDictionary");
const AuthenticationFlag = require("../../flag/AuthenticationFlag");

const express = require("express");
const router = express.Router();

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

module.exports = router;