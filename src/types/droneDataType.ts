import { z } from "zod";
import { droneSchema } from "../schemas/droneSchema";

export type DroneData = z.infer<typeof droneSchema>;
