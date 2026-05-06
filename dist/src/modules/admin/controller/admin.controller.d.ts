import { AdminService } from '../service/admin.service';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    getDashboard(): Promise<{
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
    getUsers(query: any): Promise<{
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
    updateUserRole(id: string, body: {
        role: 'USER' | 'ADMIN';
    }): Promise<{
        id: string;
        name: string | null;
        email: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    deleteUser(id: string): Promise<{
        message: string;
    }>;
    getBookings(query: any): Promise<{
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
//# sourceMappingURL=admin.controller.d.ts.map