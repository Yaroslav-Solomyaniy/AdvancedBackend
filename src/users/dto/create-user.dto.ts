import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'user@gmail.com',
    description: 'Почта пользователя',
  })
  @IsString({ message: 'Всегда должно быть строкой' })
  @IsEmail({}, { message: 'Некоректный емейл' })
  readonly email: string;
  @Length(4, 16, { message: 'Не меньше 4 и не больше 16 символов' })
  @ApiProperty({
    example: '43232614312',
    description: 'Пароль пользователя',
  })
  readonly password: string;
}
