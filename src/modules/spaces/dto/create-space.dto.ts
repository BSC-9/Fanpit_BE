import { IsArray, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateSpaceDto {
  @IsMongoId()
  @IsNotEmpty()
  ownerId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @IsOptional()
  amenities?: string[];

  @IsNumber()
  @IsOptional()
  capacity?: number;

  @IsArray()
  @IsOptional()
  location?: number[]; // [lng, lat]
}
