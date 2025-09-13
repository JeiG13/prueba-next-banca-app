import { z } from "zod";

const accountSchema = z.object({
  id: z.number(),
  account_number: z.number(),
  balance: z.number(),
  currency: z.string(),
}, { error: 'La cuenta es obligatoria' });

const transferValidationSchema = z.object({
  origin: accountSchema.nullable().refine(val => val !== null, {
    message: "La cuenta de origen es obligatoria",
  }),
  destination: accountSchema.nullable().refine(val => val !== null, {
    message: "La cuenta de destino es obligatoria",
  }),
  transactionType: z.string().nullable().refine(val => val !== null, {
    message: "El tipo de transacción es obligatoria",
  }),
  debitConcept: z.string({ error: 'El concepto de débito es obligatorio' }).min(1, 'El concepto de débito es obligatorio'),
  creditConcept: z.string({ error: 'El concepto de crédito es obligatorio' }).min(1, 'El concepto de crédito es obligatorio'),
  reference: z.string().optional(),
  confirmation: z.string().optional(),
  amount: z
    .string({ error: 'El monto es requerido' })
    .min(1, 'El monto es obligatorio')
    .refine((value) => !Number.isNaN(Number(value)), { message: 'El monto debe ser un numero' })
}).superRefine((data, ctx) => {
    if (data.amount && data.origin?.balance != null) {
      const amountNumber = Number(data.amount);

      if (amountNumber > data.origin.balance) {
        ctx.addIssue({
          code: 'custom',
          path: ['amount'],
          message: "Su saldo es insuficiente para realizar esta transacción",
        });
      }
    }
  });

export type TransferFormInfer = z.infer<typeof transferValidationSchema>;

export default transferValidationSchema;

