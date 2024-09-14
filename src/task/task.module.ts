import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from './auth/auth.middleware';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(
      /**
       * Specific routes without anything more /task/greet => that doesnt wok
       */
      // {path: '/task',method: RequestMethod.GET}
      /**
       * For every routes that beginn with task. for example /task but also
       * /task/greet
       */
      'task'
    ).apply(AuthMiddleware).forRoutes('task');
  }
}
