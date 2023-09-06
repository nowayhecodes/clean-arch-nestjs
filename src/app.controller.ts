import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './domain/entities/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  user(): Promise<User[]> {
    return this.appService.findAll();
  }
}
