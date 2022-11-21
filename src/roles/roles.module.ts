import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './model/roles.model';
import { User } from '../users/model/users.model';
import { UsersRoles } from '../users-roles/user-roles.model';

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [SequelizeModule.forFeature([Role, User, UsersRoles])],
  exports: [RolesService],
})
export class RolesModule {}
