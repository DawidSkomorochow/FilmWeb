import { Controller, Get } from '@nestjs/common';

import { Movie } from './entities/movie.entity';
import { MoviesService } from './services/movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get()
  async getAllMovies(): Promise<Movie[]> {
    return this.moviesService.getMovies();
  }
}
