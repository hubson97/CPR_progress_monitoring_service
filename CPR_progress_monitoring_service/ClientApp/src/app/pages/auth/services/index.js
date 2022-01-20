"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpInterceptorProviders = void 0;
var http_1 = require("@angular/common/http");
var auth_interceptor_service_1 = require("./auth-interceptor.service");
__exportStar(require("./auth.service"), exports);
__exportStar(require("./email.service"), exports);
exports.httpInterceptorProviders = [
    { provide: http_1.HTTP_INTERCEPTORS, useClass: auth_interceptor_service_1.AuthInterceptorService, multi: true },
];
//# sourceMappingURL=index.js.map