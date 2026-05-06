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
exports.RoomService = void 0;
// src/modules/theaters/services/room.service.ts
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../../prisma/prisma.service");
let RoomService = class RoomService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findByTheater(theaterId) {
        const rooms = await this.prisma.room.findMany({
            where: { theaterId: BigInt(theaterId) },
            include: {
                seats: {
                    select: { id: true, seatNumber: true },
                    orderBy: { seatNumber: 'asc' },
                },
            },
        });
        return rooms.map((r) => ({
            ...r,
            id: r.id.toString(),
            theaterId: r.theaterId.toString(),
            seats: r.seats.map((s) => ({ ...s, id: s.id.toString() })),
        }));
    }
    async findOne(id) {
        const room = await this.prisma.room.findUnique({
            where: { id: BigInt(id) },
            include: {
                theater: { select: { id: true, name: true, location: true } },
                seats: {
                    select: { id: true, seatNumber: true },
                    orderBy: { seatNumber: 'asc' },
                },
            },
        });
        if (!room)
            throw new common_1.NotFoundException(`Phòng #${id} không tồn tại`);
        return {
            ...room,
            id: room.id.toString(),
            theaterId: room.theaterId.toString(),
            theater: { ...room.theater, id: room.theater.id.toString() },
            seats: room.seats.map((s) => ({ ...s, id: s.id.toString() })),
        };
    }
    async create(dto) {
        const room = await this.prisma.room.create({
            data: {
                name: dto.name,
                theaterId: BigInt(dto.theaterId),
            },
        });
        return { ...room, id: room.id.toString(), theaterId: room.theaterId.toString() };
    }
    async update(id, dto) {
        await this.findOne(id);
        const room = await this.prisma.room.update({
            where: { id: BigInt(id) },
            data: { ...(dto.name !== undefined && { name: dto.name }) },
        });
        return { ...room, id: room.id.toString(), theaterId: room.theaterId.toString() };
    }
    async remove(id) {
        await this.findOne(id);
        await this.prisma.room.delete({ where: { id: BigInt(id) } });
        return { message: `Đã xóa phòng #${id}` };
    }
    // Tạo ghế hàng loạt cho phòng
    async createSeats(roomId, seatNumbers) {
        await this.findOne(roomId);
        const seats = await this.prisma.seat.createMany({
            data: seatNumbers.map((seatNumber) => ({
                seatNumber,
                roomId: BigInt(roomId),
            })),
            skipDuplicates: true,
        });
        return { created: seats.count, message: `Đã tạo ${seats.count} ghế` };
    }
};
exports.RoomService = RoomService;
exports.RoomService = RoomService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RoomService);
//# sourceMappingURL=room.service.js.map