import { z } from 'zod';

const SchemaOrganizationInput = z.object({
  identifier: z.string().trim().min(1),
  corporateName: z.string().trim().min(1),
  businessName: z.string().trim().min(1),
});

export { SchemaOrganizationInput };
