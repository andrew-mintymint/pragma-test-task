"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var sequelize_1 = require("@nestjs/sequelize");
var group_controller_1 = require("./group/group.controller");
var index_controller_1 = require("./index/index.controller");
var web3_service_1 = require("./web3/web3.service");
var core_1 = require("@nestjs/core");
var Group_model_1 = require("./models/Group.model");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [
                common_1.CacheModule.register(),
                sequelize_1.SequelizeModule.forFeature([Group_model_1.GroupModel]),
            ],
            controllers: [app_controller_1.AppController, group_controller_1.GroupController, index_controller_1.IndexController],
            providers: [
                app_service_1.AppService,
                web3_service_1.Web3Service,
                {
                    provide: core_1.APP_INTERCEPTOR,
                    useClass: common_1.CacheInterceptor,
                },
            ],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map