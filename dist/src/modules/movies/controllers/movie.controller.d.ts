import { MovieService } from '../services/movie.service';
import { CreateMovieDto, UpdateMovieDto, MovieQueryDto } from '../dto/movie.dto';
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    findAll(query: MovieQueryDto): Promise<{
        data: {
            id: string;
            description: string | null;
            title: string;
            duration: number;
            releaseDate: Date;
            posterUrl: string | null;
        }[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findOne(id: string): Promise<{
        id: string;
        showtimes: {
            id: string;
            room: {
                id: string;
                theater: {
                    id: string;
                    name: string;
                    location: string;
                };
                name: string;
            };
            startTime: Date;
            price: number;
        }[];
        reviews: {
            id: string;
            user: {
                id: string;
                name: string | null;
            };
            createdAt: Date;
            rating: number;
            comment: string | null;
        }[];
        description: string | null;
        title: string;
        duration: number;
        releaseDate: Date;
        posterUrl: string | null;
    }>;
    create(dto: CreateMovieDto): Promise<{
        id: string;
        description: string | null;
        title: string;
        duration: number;
        releaseDate: Date;
        posterUrl: string | null;
    }>;
    update(id: string, dto: UpdateMovieDto): Promise<{
        id: string;
        description: string | null;
        title: string;
        duration: number;
        releaseDate: Date;
        posterUrl: string | null;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
//# sourceMappingURL=movie.controller.d.ts.map