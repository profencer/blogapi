import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth(): object {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
    };
  }

  getInfo(): object {
    return {
      name: 'BlogAPI',
      version: '1.0.0',
      description: 'Blog platform API generated with CodeForge',
      documentation: '/api/docs',
    };
  }
}
