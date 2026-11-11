import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VoitureService } from './voiture.service';
import { CreateVoitureDto } from './dto/create-voiture.dto';
import { UpdateVoitureDto } from './dto/update-voiture.dto';

@Controller('voiture')
export class VoitureController {
  constructor(private readonly voitureService: VoitureService) {}

  @Get()
  findAll() {
    return this.voitureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.voitureService.findOne(+id);
  }
}
