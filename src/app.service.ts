import { Injectable } from '@nestjs/common';
import { RedisService } from './database/redis.service';
import { ITrackInfo } from './database/shapes/track-info.shape';
import ytdl from 'ytdl-core';
import ms from 'ms';

@Injectable()
export class AppService {
  constructor(private readonly redis: RedisService) {}

  async addTrack(guildId: string, url: string): Promise<ITrackInfo | null> {
    const trackInfo = await this.getTrackInfo(url);
    this.redis.
  }

  getTracks(guildId: string, take: number): ITrackInfo[] {
    return { title: 'Lemon', artist: 'Yonezu Kenshi' };
  }

  private async getTrackInfo(url: string): Promise<null | ITrackInfo> {
    let res: ytdl.videoInfo;
    if (!ytdl.validateURL(url)) return null;
    try {
      res = await ytdl.getBasicInfo(url);
    } catch (err) {
      return null;
    }
    const { videoDetails } = res;
    if (!videoDetails) return null;
    return {
      title: videoDetails.title,
      duration: ms(parseInt(videoDetails.lengthSeconds, 10) * 1000),
      url: videoDetails.video_url,
      thumbnailUrl: videoDetails.thumbnails[0].url,
    };
  }
}
