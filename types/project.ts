export type ColorScheme = "blue" | "green" | "amber" | "purple" | "coral";

export type IconKey = "grid" | "spark" | "house" | "pin" | "bars";

export type MetricColor = "default" | "green" | "purple";

export interface ProjectMetric {
  value: string;
  label: string;
  color: MetricColor;
}

export interface Project {
  id: string;
  order_index: number;
  reverse: boolean;
  icon_key: IconKey;
  color_scheme: ColorScheme;
  pill_label: string;
  name: string;
  description: string;
  tags: string[];
  metrics: ProjectMetric[];
  video_path: string;
}
