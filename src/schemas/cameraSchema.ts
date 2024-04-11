import { z } from "zod";

const cameraSchema = z.object({
  name: z.string().min(1, { message: "Camera name is required" }),
  megapixels: z
    .string()
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val) && val > 0, {
      message: "Megapixels must be a positive number",
    }),
  type: z.string().min(1, { message: "Camera type is required" }),
});

export { cameraSchema };
