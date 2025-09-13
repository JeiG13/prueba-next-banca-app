import { z } from 'zod';

const dateFiltersValidationSchema = z.object({
  startDate: z.date().nullable().optional(),
  endDate: z.date().nullable().optional()
}).refine(({ startDate, endDate }) => {
  if (!startDate || !endDate) return true;
  return endDate >= startDate;
}, {
  error: 'La fecha final debe ser anterior a la fecha inicial',
  path: ['endDate'],
});

export default dateFiltersValidationSchema;
