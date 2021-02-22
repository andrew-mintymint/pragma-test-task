"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
var app_service_1 = require("./app.service");
var web3_service_1 = require("./web3/web3.service");
var AppController = /** @class */ (function () {
    function AppController(appService, web3) {
        this.appService = appService;
        this.web3 = web3;
    }
    AppController.prototype.getGroupIds = function () {
        return this.web3.getGroupIds();
    };
    AppController.prototype.getLastBlock = function () {
        return this.web3.getLastRopstenBlock();
    };
    __decorate([
        common_1.Get('group-ids'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppController.prototype, "getGroupIds", null);
    __decorate([
        common_1.Get('last-block'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppController.prototype, "getLastBlock", null);
    AppController = __decorate([
        common_1.UseInterceptors(common_1.CacheInterceptor),
        common_1.Controller(),
        __metadata("design:paramtypes", [app_service_1.AppService,
            web3_service_1.Web3Service])
    ], AppController);
    return AppController;
}());
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map