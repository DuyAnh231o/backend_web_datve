import { PrismaService } from '../../../../prisma/prisma.service';
import { CreateTheaterDto, UpdateTheaterDto } from '../dto/theater.dto';
export declare class TheaterService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        rooms: {
            id: string;
            name: string;
        }[];
        name: string;
        location: string;
    }[]>;
    findOne(id: number): Promise<{
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
    update(id: number, dto: UpdateTheaterDto): Promise<{
        id: string;
        name: string;
        location: string;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
//# sourceMappingURL=theater.service.d.ts.map