import { Module } from '@nestjs/common';
import { HttpRequestsService } from './http-requests.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [HttpRequestsService],
  imports: [HttpModule],
  exports: [HttpRequestsService],
})
export class HttpRequestsModule {}
