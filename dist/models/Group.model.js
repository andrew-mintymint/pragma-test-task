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
var Index_model_1 = require("./Index.model");
var typeorm_1 = require("typeorm");
var GroupModel = /** @class */ (function (_super) {
    __extends(GroupModel, _super);
    function GroupModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], GroupModel.prototype, "id", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", String)
    ], GroupModel.prototype, "name", void 0);
    __decorate([
        sequelize_typescript_1.ForeignKey(function () { return Index_model_1.IndexModel; }),
        sequelize_typescript_1.Column,
        __metadata("design:type", Number)
    ], GroupModel.prototype, "index_id", void 0);
    __decorate([
        sequelize_typescript_1.HasMany(function () { return Index_model_1.IndexModel; }),
        __metadata("design:type", Array)
    ], GroupModel.prototype, "indexes", void 0);
    GroupModel = __decorate([
        sequelize_typescript_1.Table
    ], GroupModel);
    return GroupModel;
}(sequelize_typescript_1.Model));
exports.GroupModel = GroupModel;
//# sourceMappingURL=Group.model.js.map