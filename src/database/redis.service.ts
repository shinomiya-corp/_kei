import { Injectable } from '@nestjs/common';
import Redis from 'redis';

@Injectable()
export class RedisService extends Redis {}
