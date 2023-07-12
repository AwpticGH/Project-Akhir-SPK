const SessionVariableDictionary = require("../dictionary/web/variable/SessionVariableDictionary");

class AuthenticationFlag {
    static isAuthenticated(request) {
        return request.session[SessionVariableDictionary.SUPERVISOR_MODEL] !== undefined && request.session[SessionVariableDictionary.SUPERVISOR_MODEL] !== null;
    }
}

module.exports = AuthenticationFlag;