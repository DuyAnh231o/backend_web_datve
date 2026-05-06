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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../../prisma/prisma.service");
let AdminService = class AdminService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    // Thống kê tổng quan cho dashboard
    async getDashboardStats() {
        const [totalMovies, totalUsers, totalBookings, totalRevenue, recentBookings] = await Promise.all([
            this.prisma.movie.count(),
            this.prisma.user.count(),
            this.prisma.booking.count({ where: { status: 'CONFIRMED' } }),
            this.prisma.booking.aggregate({
                where: { status: 'CONFIRMED' },
                _sum: { totalPrice: true },
            }),
            this.prisma.booking.findMany({
                where: { status: 'CONFIRMED' },
                take: 10,
                orderBy: { createdAt: 'desc' },
                include: {
                    user: { select: { id: true, name: true, email: true } },
                    showtime: {
                        include: {
                            movie: { select: { id: true, title: true } },
                        },
                    },
                    seats: {
                        include: { seat: { select: { seatNumber: true } } },
                    },
                },
            }),
        ]);
        return {
            totalMovies,
            totalUsers,
            totalBookings,
            totalRevenue: totalRevenue._sum.totalPrice ?? 0,
            recentBookings: recentBookings.map((b) => ({
                id: b.id.toString(),
                totalPrice: b.totalPrice,
                status: b.status,
                createdAt: b.createdAt,
                user: { ...b.user, id: b.user.id.toString() },
                movie: b.showtime.movie.title,
                seats: b.seats.map((s) => s.seat.seatNumber),
            })),
        };
    }
    // Danh sách user
    async getUsers(query) {
        const page = Number(query.page) || 1;
        const limit = Number(query.limit) || 10;
        const skip = (page - 1) * limit;
        const where = {};
        if (query.role)
            where.role = query.role;
        if (query.search) {
            where.OR = [
                { name: { contains: query.search } },
                { email: { contains: query.search } },
            ];
        }
        const [users, total] = await Promise.all([
            this.prisma.user.findMany({
                where,
                skip,
                take: limit,
                select: {
                    id: true,
                    name: true,
                    email: true,
                    role: true,
                    createdAt: true,
                    _count: { select: { bookings: true } },
                },
                orderBy: { createdAt: 'desc' },
            }),
            this.prisma.user.count({ where }),
        ]);
        return {
            data: users.map((u) => ({
                ...u,
                id: u.id.toString(),
                bookingCount: u._count.bookings,
            })),
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    // Đổi role user
    async updateUserRole(userId, role) {
        const user = await this.prisma.user.update({
            where: { id: BigInt(userId) },
            data: { role },
            select: { id: true, name: true, email: true, role: true },
        });
        return { ...user, id: user.id.toString() };
    }
    // Xóa user
    async deleteUser(userId) {
        await this.prisma.user.delete({ where: { id: BigInt(userId) } });
        return { message: `Đã xóa user #${userId}` };
    }
    // Danh sách booking
    async getBookings(query) {
        const page = Number(query.page) || 1;
        const limit = Number(query.limit) || 10;
        const skip = (page - 1) * limit;
        const where = {};
        if (query.status)
            where.status = query.status;
        const [bookings, total] = await Promise.all([
            this.prisma.booking.findMany({
                where,
                skip,
                take: limit,
                include: {
                    user: { select: { id: true, name: true, email: true } },
                    showtime: {
                        include: {
                            movie: { select: { id: true, title: true } },
                            room: {
                                select: {
                                    name: true,
                                    theater: { select: { name: true } },
                                },
                            },
                        },
                    },
                    seats: {
                        include: { seat: { select: { seatNumber: true } } },
                    },
                },
                orderBy: { createdAt: 'desc' },
            }),
            this.prisma.booking.count({ where }),
        ]);
        return {
            data: bookings.map((b) => ({
                id: b.id.toString(),
                totalPrice: b.totalPrice,
                status: b.status,
                createdAt: b.createdAt,
                user: { ...b.user, id: b.user.id.toString() },
                movie: b.showtime.movie.title,
                theater: b.showtime.room.theater.name,
                room: b.showtime.room.name,
                startTime: b.showtime.startTime,
                seats: b.seats.map((s) => s.seat.seatNumber),
            })),
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminService);
//# sourceMappingURL=admin.service.js.map