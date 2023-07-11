const WebVariableDictionary = require("../dictionary/web/variable/WebVariableDictionary");
const SessionVariableDictionary = require("../dictionary/web/variable/SessionVariableDictionary");
const AlertDictionary = require("../dictionary/web/alert/AlertDictionary");
const RouterDictionary = require("../dictionary/web/router/RouterDictionary");
const CriteriaSchemaDictionary = require("../dictionary/database/schema/CriteriaSchemaDictionary");
const CriteriaTypeSchemaDictionary = require("../dictionary/database/schema/CriteriaTypeSchemaDictionary");
const DivisionSchemaDictionary = require("../dictionary/database/schema/DivisionSchemaDictionary");
const EmployeeSchemaDictionary = require("../dictionary/database/schema/EmployeeSchemaDictionary");
const MatrixScoreSchemaDictionary = require("../dictionary/database/schema/MatrixScoreSchemaDictionary");
const SupervisorSchemaDictionary = require("../dictionary/database/schema/SupervisorSchemaDictionary");

const middleware = (request, response, next) => {
    response.locals.request = request;
    response.locals.WebVariableDictionary = WebVariableDictionary;
    response.locals.SessionVariableDictionary = SessionVariableDictionary;
    response.locals.AlertDictionary = AlertDictionary;
    response.locals.RouterDictionary = RouterDictionary;
    response.locals.CriteriaSchemaDictionary = CriteriaSchemaDictionary;
    response.locals.CriteriaTypeSchemaDictionary = CriteriaTypeSchemaDictionary;
    response.locals.DivisionSchemaDictionary = DivisionSchemaDictionary;
    response.locals.EmployeeSchemaDictionary = EmployeeSchemaDictionary;
    response.locals.MatrixScoreSchemaDictionary = MatrixScoreSchemaDictionary;
    response.locals.SupervisorSchemaDictionary = SupervisorSchemaDictionary;
    response.locals.css_file = [];

    next();
}

module.exports = middleware;