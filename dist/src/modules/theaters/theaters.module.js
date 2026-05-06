"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TheatersModule = void 0;
// src/modules/theaters/theaters.module.ts
const common_1 = require("@nestjs/common");
const theater_controller_1 = require("./controllers/theater.controller");
const room_controller_1 = require("./controllers/room.controller");
const theater_service_1 = require("./services/theater.service");
const room_service_1 = require("./services/room.service");
const prisma_service_1 = require("../../../prisma/prisma.service");
let TheatersModule = class TheatersModule {
};
exports.TheatersModule = TheatersModule;
exports.TheatersModule = TheatersModule = __decorate([
    (0, common_1.Module)({
        controllers: [theater_controller_1.TheaterController, room_controller_1.RoomController],
        providers: [theater_service_1.TheaterService, room_service_1.RoomService, prisma_service_1.PrismaService],
        exports: [theater_service_1.TheaterService, room_service_1.RoomService],
    })
], TheatersModule);
//# sourceMappingURL=theaters.module.js.map