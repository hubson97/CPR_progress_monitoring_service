
export interface ChestCompressQualityChartData {
  series: Series[],
  categories: string[]
}

interface Series {
  name: string,
  data: number[]
}

