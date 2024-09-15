import { Transform } from "class-transformer";
import { IsString, MinLength } from "class-validator";

export class CreatePostDto {

  @Transform(({value})=> value.trim())
  @IsString()
  @MinLength(1)
  title: string;

  @IsString()
  content?: string;

  @IsString()
  authorId: string
}
