

export interface UsersLoggingHeatmapChartData {
  series: Serie[];
}

interface Serie {
  name: string;
  data: number[];
}
