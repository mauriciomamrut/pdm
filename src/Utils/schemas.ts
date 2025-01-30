import { z } from "zod";

export const patientSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
});

export type PatientFormData = z.infer<typeof patientSchema>;
