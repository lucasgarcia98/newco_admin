import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(authDto: AuthDto) {
    const hashedPassword = await bcrypt.hash(authDto.password, 10);
    const user = await this.prisma.user.create({
      data: {
        email: authDto.email,
        password: hashedPassword,
      },
    });
    return this.generateToken(user.id, user.email);
  }

  async login(authDto: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: authDto.email },
    });

    if (!user || !(await bcrypt.compare(authDto.password, user.password))) {
      throw new Error('Invalid credentials');
    }

    return this.generateToken(user.id, user.email);
  }

  private generateToken(userId: number, email: string) {
    return this.jwtService.sign({ userId, email });
  }
}