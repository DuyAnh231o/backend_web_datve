import { PrismaService } from '../../../../prisma/prisma.service';
export declare class AdminService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getDashboardStats(): Promise<{
        totalMovies: number;
        totalUsers: number;
        totalBookings: number;
        totalRevenue: number;
        recentBookings: {
            id: string;
            totalPrice: number;
            status: import(".prisma/client").$Enums.BookingStatus;
            createdAt: Date;
            user: {
                id: string;
                name: string | null;
                email: string;
            };
            movie: string;
            seats: string[];
        }[];
    }>;
    getUsers(query: {
        page?: number;
        limit?: number;
        search?: string;
        role?: string;
    }): Promise<{
        data: {
            id: string;
            bookingCount: number;
            createdAt: Date;
            name: string | null;
            _count: {
                bookings: number;
            };
            email: string;
            role: import(".prisma/client").$Enums.Role;
        }[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    updateUserRole(userId: number, role: 'USER' | 'ADMIN'): Promise<{
        id: string;
        name: string | null;
        email: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    deleteUser(userId: number): Promise<{
        message: string;
    }>;
    getBookings(query: {
        page?: number;
        limit?: number;
        status?: string;
    }): Promise<{
        data: {
            id: string;
            totalPrice: number;
            status: import(".prisma/client").$Enums.BookingStatus;
            createdAt: Date;
            user: {
                id: string;
                name: string | null;
                email: string;
            };
            movie: string;
            theater: string;
            room: string;
            startTime: Date;
            seats: string[];
        }[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
}
//# sourceMappingURL=admin.service.d.ts.map