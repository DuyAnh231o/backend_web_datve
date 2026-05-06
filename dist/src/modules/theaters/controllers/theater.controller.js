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
exports.TheaterController = void 0;
// src/modules/theaters/controllers/theater.controller.ts
const common_1 = require("@nestjs/common");
const theater_service_1 = require("../services/theater.service");
const theater_dto_1 = require("../dto/theater.dto");
const public_decorator_1 = require("../../../common/decorators/public.decorator");
const roles_decorator_1 = require("../../../common/decorators/roles.decorator");
let TheaterController = class TheaterController {
    constructor(theaterService) {
        this.theaterService = theaterService;
    }
    // GET /theaters
    findAll() {
        return this.theaterService.findAll();
    }
    // GET /theaters/:id
    findOne(id) {
        return this.theaterService.findOne(Number(id));
    }
    // POST /theaters
    create(dto) {
        return this.theaterService.create(dto);
    }
    // PUT /theaters/:id
    update(id, dto) {
        return this.theaterService.update(Number(id), dto);
    }
    // DELETE /theaters/:id
    remove(id) {
        return this.theaterService.remove(Number(id));
    }
};
exports.TheaterController = TheaterController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TheaterController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TheaterController.prototype, "findOne", null);
__decorate([
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [theater_dto_1.CreateTheaterDto]),
    __metadata("design:returntype", void 0)
], TheaterController.prototype, "create", null);
__decorate([
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, theater_dto_1.UpdateTheaterDto]),
    __metadata("design:returntype", void 0)
], TheaterController.prototype, "update", null);
__decorate([
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TheaterController.prototype, "remove", null);
exports.TheaterController = TheaterController = __decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Controller)('theaters'),
    __metadata("design:paramtypes", [theater_service_1.TheaterService])
], TheaterController);
//# sourceMappingURL=theater.controller.js.map