import { Model, Column, DataType, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({
    example: 'su@Mfsa.com',
    description: 'Почтовый адрес',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  email: string;
  @ApiProperty({ example: '433563411', description: 'Пароль пользователя' })
  @Column({ type: DataType.STRING })
  password: string;
  @ApiProperty({ example: 'true', description: 'Забанен или нет' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;
  @ApiProperty({
    example: 'За хулиганство',
    description: 'Причина бана',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;
}
