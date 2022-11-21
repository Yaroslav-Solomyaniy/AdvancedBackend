import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './model/users.model';
import { Role } from '../roles/model/roles.model';
import { UsersRoles } from '../users-roles/user-roles.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([User, Role, UsersRoles])],
})
export class UsersModule {}
