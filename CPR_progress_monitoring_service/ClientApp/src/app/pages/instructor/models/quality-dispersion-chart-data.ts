
export interface QualityDispersionChartData {
  series: Series[],
  //categories: string[]
}


interface Series {
  name: string,
  data: DataPortion[]
}

interface DataPortion {
  x: Date,
  y: number[]
}
