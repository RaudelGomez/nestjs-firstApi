import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TaskModule } from './task/task.module';
import { PostModule } from './post/post.module';
import { HouseModule } from './house/house.module';
import { UserHouseModule } from './user-house/user-house.module';

@Module({
  imports: [UsersModule, TaskModule, PostModule, HouseModule, UserHouseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
