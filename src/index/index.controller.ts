import {
  CacheInterceptor,
  Controller,
  Get,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { Web3Service } from '../web3/web3.service';

@UseInterceptors(CacheInterceptor)
@Controller('index')
export class IndexController {
  constructor(private readonly web3: Web3Service) {}

  @Get(':indexId')
  public getIndexId(@Param('indexId') indexId: number) {
    return this.web3.getIndex(indexId);
  }
}
