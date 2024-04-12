export type CameraType = "Color" | "Thermal" | "Zoom" | "Multi-Spectral";

export type Camera = {
  megapixels: number;
  name: string;
  type: CameraType;
};
