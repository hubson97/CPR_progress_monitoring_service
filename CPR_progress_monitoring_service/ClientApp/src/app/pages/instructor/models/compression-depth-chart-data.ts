
export interface CompressionDepthChartData {
  series: Series[],
  categories: string[]
}

interface Series {
  name: string,
  data: number[]
}
