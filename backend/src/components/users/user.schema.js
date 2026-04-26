import { z } from 'zod';

const userSchemaInput = z.object({
  name: z.string().trim().min(1),
  surname: z.string().trim().min(1),
  email: z.email(),
  password: z.string().trim().min(1),
  cpf: z.string().trim().min(1),
  organization: z.int().min(1),
});

export { userSchemaInput };
