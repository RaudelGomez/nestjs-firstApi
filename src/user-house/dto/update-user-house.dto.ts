import { PartialType } from '@nestjs/mapped-types';
import { CreateUserHouseDto } from './create-user-house.dto';

export class UpdateUserHouseDto extends PartialType(CreateUserHouseDto) {}
