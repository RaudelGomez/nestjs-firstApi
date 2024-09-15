import { IsString } from "class-validator";

export class CreateUserHouseDto {
  @IsString()
  "ownerId": string;
  
  @IsString()
  "houseId": string;
}
