import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MuralsService } from './murals.service';
import { CreateMuralDto } from './dto/create-mural.dto';
import { UpdateMuralDto } from './dto/update-mural.dto';

@Controller('murals')
export class MuralsController {
  constructor(private readonly muralsService: MuralsService) {}

  @Post()
  create(@Body() createMuralDto: CreateMuralDto) {
    return this.muralsService.create(createMuralDto);
  }

  @Get()
  findAll() {
    return this.muralsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.muralsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMuralDto: UpdateMuralDto) {
    return this.muralsService.update(+id, updateMuralDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.muralsService.remove(+id);
  }
}
