import { z } from "zod";

const CameraType = z
  .enum(["Color", "Thermal", "Zoom", "Multi-Spectral"])
  .refine(
    (type) => ["Color", "Thermal", "Zoom", "Multi-Spectral"].includes(type),
    {
      message:
        "Invalid camera type. Valid types are 'Color', 'Thermal', 'Zoom', 'Multi-Spectral'",
    }
  );
const cameraSchema = z.object({
  name: z.string().min(1, { message: "Camera name is required" }),
  megapixels: z
    .string()
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val) && val > 0, {
      message: "Megapixels must be a positive number",
    }),
  type: CameraType,
});

export { cameraSchema };
