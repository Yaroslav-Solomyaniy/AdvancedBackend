import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @IsString({ message: 'Всегда должно быть строкой' })
  readonly value: string;
  @IsNumber({}, { message: 'Всегда должно быть числом' })
  readonly userId: number;
}
