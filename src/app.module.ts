import { Module } from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Lesson } from './lesson/lesson.entity';

@Module({
  imports: [
    GraphQLModule.forRoot({autoSchemaFile:true}), 
    LessonModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url:'mongodb://localhost/school',
      synchronize:true,
      useUnifiedTopology:true,
      entities:[
        Lesson
      ]
    })
  ],
})
export class AppModule {}
