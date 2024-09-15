import { Module } from '@nestjs/common';
import { UserHouseService } from './user-house.service';
import { UserHouseController } from './user-house.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UserHouseController],
  providers: [UserHouseService, PrismaService],
})
export class UserHouseModule {}
