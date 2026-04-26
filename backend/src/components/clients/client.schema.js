import { z } from 'zod';

const clientSchemaInput = z.object({
  name: z.string().trim().min(1),
  surname: z.string().trim().min(1),
  email: z.email(),
  cpf: z.string().trim().min(1),
});

export { clientSchemaInput };
