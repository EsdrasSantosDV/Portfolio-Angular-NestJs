import { PartialType } from '@nestjs/mapped-types';
import { CreateMuralDto } from './create-mural.dto';

export class UpdateMuralDto extends PartialType(CreateMuralDto) {}
