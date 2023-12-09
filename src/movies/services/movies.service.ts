import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Movie } from '../entities/movie.entity';
import { firstValueFrom } from 'rxjs';

const apiKey = 'b6ff2c6383a821fb1e9ce5cda0a9b394';

const apiUrl = 'https://api.themoviedb.org/3/movie/popular';

@Injectable()
export class MoviesService {
  constructor(private httpService: HttpService) {}

  async getMovies(): Promise<Movie[]> {
    const response = await firstValueFrom(
      this.httpService.get(apiUrl, {
        params: { api_key: apiKey },
      }),
    );

    return response.data as Movie[];
  }
}
