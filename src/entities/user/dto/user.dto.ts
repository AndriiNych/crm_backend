import { ApiExtraModels, OmitType } from '@nestjs/swagger';
import { UserBaseDto } from './user.base.dto';

@ApiExtraModels(UserBaseDto)
export class UserDto extends OmitType(UserBaseDto, ['id']) {}
