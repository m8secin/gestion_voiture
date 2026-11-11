import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVoitureDto } from './dto/create-voiture.dto';
import { UpdateVoitureDto } from './dto/update-voiture.dto';
import { Voiture } from './entities/voiture.entity';

@Injectable()
export class VoitureService {
  private voitures: Voiture[] = [
    {
      id: 1,
      modele: 'bmw',
      cv: 80,
    },
    {
      id: 2,
      modele: 'audi',
      cv: 35,
    },
    {
      id: 3,
      modele: 'mercedes',
      cv: 420,
    },
  ];
  private nextId = 4;
  findAll(category?: string, search?: string): Voiture[] {
    return this.voitures.filter((voiture) => {
      const categoryOk =
        !category || voiture.modele.toLowerCase() === category.toLowerCase();
      const searchOk =
        !search || voiture.modele.toLowerCase().includes(search.toLowerCase());
      return categoryOk && searchOk;
    });
  }
  findOne(id: number): Voiture {
    const voiture = this.voitures.find((v) => v.id === id);
    if (!voiture) {
      throw new NotFoundException(`Voiture ${id} introuvable`);
    }
    return voiture;
  }
}
