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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
var web3_service_1 = require("../web3/web3.service");
var IndexController = /** @class */ (function () {
    function IndexController(web3) {
        this.web3 = web3;
    }
    IndexController.prototype.getIndexId = function (indexId) {
        return this.web3.getIndex(indexId);
    };
    __decorate([
        common_1.Get(':indexId'),
        __param(0, common_1.Param('indexId')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], IndexController.prototype, "getIndexId", null);
    IndexController = __decorate([
        common_1.UseInterceptors(common_1.CacheInterceptor),
        common_1.Controller('index'),
        __metadata("design:paramtypes", [web3_service_1.Web3Service])
    ], IndexController);
    return IndexController;
}());
exports.IndexController = IndexController;
//# sourceMappingURL=index.controller.js.map