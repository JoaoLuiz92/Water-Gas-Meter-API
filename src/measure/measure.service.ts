import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Measure } from './measure.entity';
import axios from 'axios';

@Injectable()
export class MeasureService {
  constructor(
    @InjectRepository(Measure)
    private readonly measureRepository: Repository<Measure>,
  ) {}

  async uploadImage(data: any) {
    // Validação dos dados recebidos
    // Chamada à API do Google Gemini para extrair a leitura
    // Salvar no banco de dados e retornar a resposta conforme necessário
  }

  async confirmMeasure(uuid: string, confirmedValue: number) {
    // Implementação da confirmação de medida
  }

  async listMeasures(customerCode: string, measureType?: string) {
    // Implementação da listagem de medidas
  }
}
