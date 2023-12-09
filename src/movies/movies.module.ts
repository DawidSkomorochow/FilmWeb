import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './services/movies.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
