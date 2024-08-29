import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeasureService } from './measure.service';
import { MeasureController } from './measure.controller';
import { Measure } from './measure.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Measure])],
  providers: [MeasureService],
  controllers: [MeasureController],
})
export class MeasureModule {}
