import { Controller, Post, Patch, Get, Param, Query, Body } from '@nestjs/common';
import { MeasureService } from './measure.service';

@Controller('measures')
export class MeasureController {
  constructor(private readonly measureService: MeasureService) {}

  @Post('upload')
  upload(@Body() body: any) {
    return this.measureService.uploadImage(body);
  }

  @Patch('confirm')
  confirm(@Body() body: any) {
    return this.measureService.confirmMeasure(body.measure_uuid, body.confirmed_value);
  }

  @Get(':customerCode/list')
  list(@Param('customerCode') customerCode: string, @Query('measure_type') measureType?: string) {
    return this.measureService.listMeasures(customerCode, measureType);
  }
}
