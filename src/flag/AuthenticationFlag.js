const SessionVariableDictionary = require("../dictionary/web/variable/SessionVariableDictionary");

class AuthenticationFlag {
    static isAuthenticated(request) {
        return request.session[SessionVariableDictionary.SUPERVISOR_MODEL] !== undefined;
    }
}

module.exports = AuthenticationFlag;