import {
  CacheInterceptor,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Web3Service } from './web3/web3.service';

@UseInterceptors(CacheInterceptor)
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly web3: Web3Service,
  ) {}
  @Get('group-ids')
  public getGroupIds() {
    return this.web3.getGroupIds();
  }
  @Get('last-block')
  public getLastBlock() {
    return this.web3.getLastRopstenBlock();
  }
}
