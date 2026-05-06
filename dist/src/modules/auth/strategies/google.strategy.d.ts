import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { PrismaService } from '../../../../prisma/prisma.service';
declare const GoogleStrategy_base: new (...args: any[]) => Strategy;
export declare class GoogleStrategy extends GoogleStrategy_base {
    private readonly prisma;
    constructor(prisma: PrismaService);
    validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<void>;
}
export {};
//# sourceMappingURL=google.strategy.d.ts.map