import { CacheModule, Module, CacheInterceptor } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { GroupController } from './group/group.controller';
import { IndexController } from './index/index.controller';
import { Web3Service } from './web3/web3.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
// import { GroupEntity } from './entity/Group.entity';
// import { IndexModel } from './models/Index.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupService } from './group/group.service';

@Module({
  imports: [
    CacheModule.register(),
    TypeOrmModule.forRoot(),
    // TypeOrmModule.forFeature([GroupEntity]),
  ],
  controllers: [AppController, GroupController, IndexController],
  providers: [
    AppService,
    Web3Service,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
    GroupService,
  ],
})
export class AppModule {}
