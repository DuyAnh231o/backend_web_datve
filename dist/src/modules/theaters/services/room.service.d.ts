import { PrismaService } from '../../../../prisma/prisma.service';
import { CreateRoomDto, UpdateRoomDto } from '../dto/theater.dto';
export declare class RoomService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByTheater(theaterId: number): Promise<{
        id: string;
        theaterId: string;
        seats: {
            id: string;
            seatNumber: string;
        }[];
        name: string;
    }[]>;
    findOne(id: number): Promise<{
        id: string;
        theaterId: string;
        theater: {
            id: string;
            name: string;
            location: string;
        };
        seats: {
            id: string;
            seatNumber: string;
        }[];
        name: string;
    }>;
    create(dto: CreateRoomDto): Promise<{
        id: string;
        theaterId: string;
        name: string;
    }>;
    update(id: number, dto: UpdateRoomDto): Promise<{
        id: string;
        theaterId: string;
        name: string;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
    createSeats(roomId: number, seatNumbers: string[]): Promise<{
        created: number;
        message: string;
    }>;
}
//# sourceMappingURL=room.service.d.ts.map