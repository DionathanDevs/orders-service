import { z } from 'zod';

export const createItemSchema = z.object({
  description: z.string({
    required_error: 'A descrição é obrigatória.',
    invalid_type_error: 'A descrição deve ser um texto.',
  }).min(1, 'A descrição não pode estar vazia.'),
  ncm: z.string({
    invalid_type_error: 'O NCM deve ser um texto.',
  }).optional(),
});

export const updateItemSchema = z.object({
  description: z.string({
    required_error: 'A descrição é obrigatória.',
    invalid_type_error: 'A descrição deve ser um texto.',
  }).min(1, 'A descrição não pode estar vazia.'),
  ncm: z.string({
    invalid_type_error: 'O NCM deve ser um texto.',
  }).optional(),
  active: z.boolean({
    invalid_type_error: 'O campo active deve ser um booleano.',
  }).optional(),
});
