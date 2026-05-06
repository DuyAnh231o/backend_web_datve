import { RoomService } from '../services/room.service';
import { CreateRoomDto, UpdateRoomDto } from '../dto/theater.dto';
export declare class RoomController {
    private readonly roomService;
    constructor(roomService: RoomService);
    findByTheater(theaterId: string): Promise<{
        id: string;
        theaterId: string;
        seats: {
            id: string;
            seatNumber: string;
        }[];
        name: string;
    }[]>;
    findOne(id: string): Promise<{
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
    update(id: string, dto: UpdateRoomDto): Promise<{
        id: string;
        theaterId: string;
        name: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
    createSeats(id: string, body: {
        seatNumbers: string[];
    }): Promise<{
        created: number;
        message: string;
    }>;
}
//# sourceMappingURL=room.controller.d.ts.map