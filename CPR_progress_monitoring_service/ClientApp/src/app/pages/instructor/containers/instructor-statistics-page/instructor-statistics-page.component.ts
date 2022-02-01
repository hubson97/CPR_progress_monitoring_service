import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { InstructorService } from '../../services';
import { ChestCompressQualityChartData, QualityDispersionChartData, CompressionDepthChartData } from '../../models';

@Component({
  selector: 'app-instructor-statistics-page',
  templateUrl: './instructor-statistics-page.component.html',
  styleUrls: ['./instructor-statistics-page.component.scss']
})
export class InstructorStatisticsPageComponent implements OnInit {

  public chestCompressQualityChartData$: Observable<ChestCompressQualityChartData>;
  public compressionDepthChartData$: Observable<CompressionDepthChartData>;
  public qualityDispersionChartData$: Observable<QualityDispersionChartData>;


  constructor(private instrService: InstructorService) {
    this.chestCompressQualityChartData$ = instrService.loadChestCompressQualityChartData();
    this.compressionDepthChartData$ = instrService.loadCompressionDepthChartData();
    this.qualityDispersionChartData$ = instrService.loadQualityDispersionChartData();
  }

  ngOnInit(): void {
  }

}
