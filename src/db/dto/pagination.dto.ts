import { IsInt, IsOptional } from 'class-validator';

export class PaganationDto {
  @IsOptional()
  @IsInt()
  page?: number;

  @IsOptional()
  @IsInt()
  limit?: number;
}
