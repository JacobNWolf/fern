"use strict";
/**
 * This file was auto-generated by Fern from our API Definition.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
function register(expressApp, services) {
    expressApp.use("/container", services.endpoints.container.toRouter());
    expressApp.use("/enum", services.endpoints.enum.toRouter());
    expressApp.use("/http-methods", services.endpoints.httpMethods.toRouter());
    expressApp.use("/object", services.endpoints.object.toRouter());
    expressApp.use("/params", services.endpoints.params.toRouter());
    expressApp.use("/primitive", services.endpoints.primitive.toRouter());
    expressApp.use("/union", services.endpoints.union.toRouter());
    expressApp.use("/req-bodies", services.inlinedRequests.toRouter());
    expressApp.use("/no-auth", services.noAuth.toRouter());
    expressApp.use("/no-req-body", services.noReqBody.toRouter());
    expressApp.use("/test-headers", services.reqWithHeaders.toRouter());
}
exports.register = register;