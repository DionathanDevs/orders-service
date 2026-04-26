import { z } from 'zod';

const orderInputSchema = z.object({
  requestingUser: z.number().int().positive(),
  observation: z.string().max(90),
  status: z.number().int().default(1),
  coin: z.string().default('BRL'),
  carClientId: z.number().int().positive(),
  cancellationDate: z.coerce.date().nullish(),
  cancellationUser: z.number().int().positive().nullish(),
  cancellationReason: z.string().max(90).nullish(),
  responsibleGroup: z.number().int().positive().nullish(),
  creationDate: z.coerce.date().optional(),
  updateDate: z.coerce.date().optional(),
  scheduling: z.string().datetime().nullish(),
  headOffice: z.number().int().positive().nullish(),
  branch: z.number().int().positive().nullish(),
  organization: z.number().int().positive(),
});

export default orderInputSchema;
