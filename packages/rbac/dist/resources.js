"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = exports.Resource = void 0;
var Resource;
(function (Resource) {
    Resource["COURSE"] = "COURSE";
    Resource["USER"] = "USER";
    Resource["BILLING"] = "BILLING";
    Resource["RESOURCE_CENTER"] = "RESOURCE_CENTER";
    Resource["SUPPORT_TICKET"] = "SUPPORT_TICKET";
    Resource["SYSTEM_SETTINGS"] = "SYSTEM_SETTINGS";
    Resource["ANALYTICS"] = "ANALYTICS";
    Resource["AUDIT_LOG"] = "AUDIT_LOG";
})(Resource || (exports.Resource = Resource = {}));
var Action;
(function (Action) {
    Action["CREATE"] = "CREATE";
    Action["READ"] = "READ";
    Action["UPDATE"] = "UPDATE";
    Action["DELETE"] = "DELETE";
    Action["APPROVE"] = "APPROVE";
    Action["EXPORT"] = "EXPORT";
    Action["ASSIGN"] = "ASSIGN";
})(Action || (exports.Action = Action = {}));
