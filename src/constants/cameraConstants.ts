import { CameraOptions } from "../types/cameraType";

export enum CameraEnum {
  Color = "Color",
  Thermal = "Thermal",
  Zoom = "Zoom",
  Multi_Spectral = "Multi-Spectral",
}

export const cameraOptions: CameraOptions[] = [
  { label: CameraEnum.Color, value: CameraEnum.Color },
  { label: CameraEnum.Thermal, value: CameraEnum.Thermal },
  { label: CameraEnum.Zoom, value: CameraEnum.Zoom },
  { label: CameraEnum.Multi_Spectral, value: CameraEnum.Multi_Spectral },
];
