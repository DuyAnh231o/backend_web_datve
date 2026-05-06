export declare class CreateMovieDto {
    title: string;
    description?: string;
    duration: number;
    releaseDate: string;
    posterUrl?: string;
}
export declare class UpdateMovieDto {
    title?: string;
    description?: string;
    duration?: number;
    releaseDate?: string;
    posterUrl?: string;
}
export declare class MovieQueryDto {
    page?: number;
    limit?: number;
    search?: string;
}
//# sourceMappingURL=movie.dto.d.ts.map