import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TaskModule } from './task/task.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [UsersModule, TaskModule, PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
