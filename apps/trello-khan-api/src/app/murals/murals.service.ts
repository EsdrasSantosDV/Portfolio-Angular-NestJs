import { Injectable } from '@nestjs/common';
import { CreateMuralDto } from './dto/create-mural.dto';
import { UpdateMuralDto } from './dto/update-mural.dto';
import {MuralRepository} from "./repositories/mural.repository";
import {MuralEntity} from "./entities/mural.entity";

@Injectable()
export class MuralsService {

  constructor(private readonly muralRepository:MuralRepository)
  {

  }

  create(createMuralDto: CreateMuralDto):Promise<MuralEntity> {
    return this.muralRepository.create(createMuralDto);
  }

  findAll() {
    return  this.muralRepository.findAll();
  }

  async findOne(id: number):Promise<MuralEntity> {
    return this.muralRepository.findOne(id);
  }

  update(id: number, updateMuralDto: UpdateMuralDto) {
    return this.muralRepository.update(id, updateMuralDto);
  }

  remove(id: number) {
    return this.muralRepository.remove(id);
  }
}
