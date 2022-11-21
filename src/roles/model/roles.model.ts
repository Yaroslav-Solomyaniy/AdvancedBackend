import {
  Model,
  Column,
  DataType,
  Table,
  BelongsToMany,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/model/users.model';
import { UsersRoles } from '../../users-roles/user-roles.model';

interface RolesCreationAttrs {
  value: string;
  description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RolesCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({
    example: 'admin',
    description: 'Уникальное значение роли пользователя',
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string;
  @ApiProperty({ example: 'Администратор', description: 'Описание роли' })
  @Column({ type: DataType.STRING })
  description: string;

  @BelongsToMany(() => User, () => UsersRoles)
  users: User[];
}
