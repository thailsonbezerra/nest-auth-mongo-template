import {
  Body,
  Controller,
  Post,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDto } from './dtos/login-dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UsePipes(ValidationPipe)
  @Post('login')
  signIn(@Body() { email, password }: loginDto) {
    return this.authService.signIn(email, password);
  }
}
