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
exports.TheaterService = void 0;
// src/modules/theaters/services/theater.service.ts
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../../prisma/prisma.service");
let TheaterService = class TheaterService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        const theaters = await this.prisma.theater.findMany({
            include: {
                rooms: {
                    select: { id: true, name: true },
                },
            },
            orderBy: { name: 'asc' },
        });
        return theaters.map((t) => ({
            ...t,
            id: t.id.toString(),
            rooms: t.rooms.map((r) => ({ ...r, id: r.id.toString() })),
        }));
    }
    async findOne(id) {
        const theater = await this.prisma.theater.findUnique({
            where: { id: BigInt(id) },
            include: {
                rooms: {
                    include: {
                        seats: {
                            select: { id: true, seatNumber: true },
                            orderBy: { seatNumber: 'asc' },
                        },
                    },
                },
            },
        });
        if (!theater)
            throw new common_1.NotFoundException(`Rạp #${id} không tồn tại`);
        return {
            ...theater,
            id: theater.id.toString(),
            rooms: theater.rooms.map((r) => ({
                ...r,
                id: r.id.toString(),
                theaterId: r.theaterId.toString(),
                seats: r.seats.map((s) => ({ ...s, id: s.id.toString() })),
            })),
        };
    }
    async create(dto) {
        const theater = await this.prisma.theater.create({
            data: { name: dto.name, location: dto.location },
        });
        return { ...theater, id: theater.id.toString() };
    }
    async update(id, dto) {
        await this.findOne(id);
        const theater = await this.prisma.theater.update({
            where: { id: BigInt(id) },
            data: {
                ...(dto.name !== undefined && { name: dto.name }),
                ...(dto.location !== undefined && { location: dto.location }),
            },
        });
        return { ...theater, id: theater.id.toString() };
    }
    async remove(id) {
        await this.findOne(id);
        await this.prisma.theater.delete({ where: { id: BigInt(id) } });
        return { message: `Đã xóa rạp #${id}` };
    }
};
exports.TheaterService = TheaterService;
exports.TheaterService = TheaterService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TheaterService);
//# sourceMappingURL=theater.service.js.map