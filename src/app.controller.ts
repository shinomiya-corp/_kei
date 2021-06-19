import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { ITrackInfo } from './database/shapes/track-info.shape';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('add_track')
  addTrack(payload: { guildId: string; url: string }) {
    return this.appService.addTrack(payload.guildId, payload.url);
  }

  @MessagePattern('get_tracks')
  getTracks(payload: { guildId: string; take: number }): ITrackInfo[] {
    return this.appService.getTracks(payload.guildId, payload.take);
  }
}
