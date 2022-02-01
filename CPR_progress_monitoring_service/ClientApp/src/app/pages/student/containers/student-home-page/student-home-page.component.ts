import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


import { StudentService } from '../../services';
import { ChestCompressQualityChartData, CompressionDepthChartData } from '../../models';


@Component({
  selector: 'app-student-home-page',
  templateUrl: './student-home-page.component.html',
  styleUrls: ['./student-home-page.component.scss']
})
export class StudentHomePageComponent implements OnInit {

  public chestCompressQualityChartData$: Observable<ChestCompressQualityChartData>;
  public compressionDepthChartData$: Observable<CompressionDepthChartData>;


  constructor(private studentService: StudentService) {
    this.chestCompressQualityChartData$ = studentService.loadChestCompressQualityChartData();
    this.compressionDepthChartData$ = studentService.loadCompressionDepthChartData();
  }

  ngOnInit(): void {
  }

}
