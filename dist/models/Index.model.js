"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var sequelize_typescript_1 = require("sequelize-typescript");
var typeorm_1 = require("typeorm");
var Group_model_1 = require("./Group.model");
var IndexModel = /** @class */ (function (_super) {
    __extends(IndexModel, _super);
    function IndexModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], IndexModel.prototype, "id", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", String)
    ], IndexModel.prototype, "name", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", Number)
    ], IndexModel.prototype, "ethPriceInWei", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", Number)
    ], IndexModel.prototype, "usdPriceInCents", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", Number)
    ], IndexModel.prototype, "usdCapitalization", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", Number)
    ], IndexModel.prototype, "percentageChange", void 0);
    __decorate([
        sequelize_typescript_1.BelongsTo(function () { return Group_model_1.GroupModel; }),
        __metadata("design:type", Group_model_1.GroupModel)
    ], IndexModel.prototype, "team", void 0);
    IndexModel = __decorate([
        sequelize_typescript_1.Table
    ], IndexModel);
    return IndexModel;
}(sequelize_typescript_1.Model));
exports.IndexModel = IndexModel;
//# sourceMappingURL=Index.model.js.map