const RouterDictionary = require("../dictionary/web/router/RouterDictionary");
const SessionVariableDictionary = require("../dictionary/web/variable/SessionVariableDictionary");
const AlertDictionary = require("../dictionary/web/alert/AlertDictionary");
const AuthenticationFlag = require("../flag/AuthenticationFlag");

const express = require("express");
const router = express.Router();

const middleware = (request, response, next) => {
    if (AuthenticationFlag.isAuthenticated(request)) {
        next();
    } else {
        request.session[SessionVariableDictionary.ALERT] = AlertDictionary.AUTHENTICATE;
        response.redirect(RouterDictionary.LOGIN);
    }
}

router.get(RouterDictionary.HOME, (request, response, next) => {
    middleware(request, response, next);
});

router.get(RouterDictionary.LOGOUT, (request, response, next) => {
    middleware(request, response, next);
});

router.post(RouterDictionary.SUPERVISOR_UPDATE, (request, response, next) => {
    middleware(request, response, next);
});

router.get(RouterDictionary.EMPLOYEE_CREATE, (request, response, next) => {
    middleware(request, response, next);
});

router.post(RouterDictionary.EMPLOYEE_CREATE, (request, response, next) => {
    middleware(request, response, next);
});

router.get(RouterDictionary.EMPLOYEE_SHOW, (request, response, next) => {
    middleware(request, response, next);
});

router.get(RouterDictionary.EMPLOYEE_UPDATE, (request, response, next) => {
    middleware(request, response, next);
});

router.get(RouterDictionary.EMPLOYEE_DELETE, (request, response, next) => {
    middleware(request, response, next);
});

router.get(RouterDictionary.CRITERIA_SHOW, (request, response, next) => {
    middleware(request, response, next);
});

router.get(RouterDictionary.MATRIX_SCORE_CREATE, (request, response, next) => {
    middleware(request, response, next);
});

router.post(RouterDictionary.MATRIX_SCORE_CREATE, (request, response, next) => {
    middleware(request, response, next);
});

router.get(RouterDictionary.MATRIX_SCORE_SHOW, (request, response, next) => {
    middleware(request, response, next);
});

module.exports = router;