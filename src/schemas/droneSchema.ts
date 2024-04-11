import { z } from "zod";
import { cameraSchema } from "./cameraSchema";

const droneSchema = z.object({
  drone_code: z
    .string()
    .min(3, { message: "Drone code has to be a minimum of 3 characters" }),
  name: z.string().min(1, { message: "Drone name is required" }),
  range: z
    .string()
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val) && val > 0, {
      message: "Range must be a positive number",
    }),
  release_date: z.preprocess(
    (arg) => {
      if (typeof arg === "string" || arg instanceof Date) {
        return new Date(arg);
      }
    },
    z.date({
      required_error: "Release date is required",
      invalid_type_error: "Invalid date format",
    })
  ),
  image: z
    .string()
    .min(1, { message: "Drone image is required" })
    .refine((val) => /^data:image\/[a-z]+;base64,/.test(val), {
      message: "Invalid image format. Image must be a Base64 encoded string.",
    }),
  cameras: z.array(cameraSchema).refine((cameras) => cameras.length > 0, {
    message: "At least one camera is required",
  }),
});

export { droneSchema };
