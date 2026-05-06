import { TheaterService } from '../services/theater.service';
import { CreateTheaterDto, UpdateTheaterDto } from '../dto/theater.dto';
export declare class TheaterController {
    private readonly theaterService;
    constructor(theaterService: TheaterService);
    findAll(): Promise<{
        id: string;
        rooms: {
            id: string;
            name: string;
        }[];
        name: string;
        location: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        rooms: {
            id: string;
            theaterId: string;
            seats: {
                id: string;
                seatNumber: string;
            }[];
            name: string;
        }[];
        name: string;
        location: string;
    }>;
    create(dto: CreateTheaterDto): Promise<{
        id: string;
        name: string;
        location: string;
    }>;
    update(id: string, dto: UpdateTheaterDto): Promise<{
        id: string;
        name: string;
        location: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
//# sourceMappingURL=theater.controller.d.ts.map