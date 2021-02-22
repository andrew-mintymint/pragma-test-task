import {
  CacheInterceptor,
  Controller,
  Get,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { Web3Service } from '../web3/web3.service';

@UseInterceptors(CacheInterceptor)
@Controller('group')
export class GroupController {
  constructor(private readonly web3: Web3Service) {}
  @Get(':groupId')
  public getGroupId(@Param('groupId') groupId: number) {
    return this.web3.getGroup(groupId);
  }
}
