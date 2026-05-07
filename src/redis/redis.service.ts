import { Injectable, OnModuleInit } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit {
  private client!: Redis;

  onModuleInit() {
    this.client = process.env.REDIS_URL
      ? new Redis(process.env.REDIS_URL)
      : new Redis({
          host: process.env.REDIS_HOST || 'localhost',
          port: parseInt(process.env.REDIS_PORT || '6379'),
        });
  }

  // ✅ set thường
  async set(key: string, value: any, ttl: number) {
    return this.client.set(key, value, 'EX', ttl);
  }

  // ✅ set NX (dùng cho lock)
  async setNX(key: string, value: any, ttl: number) {
    return this.client.set(key, value, 'EX', ttl, 'NX');
  }

  async get(key: string) {
    return this.client.get(key);
  }

  async del(key: string) {
    return this.client.del(key);
  }

  async keys(pattern: string) {
    return this.client.keys(pattern);
  }
}