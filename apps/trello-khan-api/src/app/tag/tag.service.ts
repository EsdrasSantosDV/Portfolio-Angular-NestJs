import {Injectable} from '@nestjs/common';
import {CreateTagDto} from './dto/create-tag.dto';
import {UpdateTagDto} from './dto/update-tag.dto';

import {TagRepository} from "./repositories/tag.repository";

@Injectable()
export class TagService {

  constructor(private readonly tagsRepository: TagRepository) {
  }
  create(createTagDto: CreateTagDto) {
    return this.tagsRepository.create(createTagDto);
  }

  findAll() {
    return this.tagsRepository.findAll();
  }

  async findOne(id: number) {
    return await this.tagsRepository.findOne(id);
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return this.tagsRepository.update(id,updateTagDto);
  }

  remove(id: number) {
    return this.tagsRepository.remove(id);
  }
}
