import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const validTerms = ['Fall', 'Winter', 'Spring'] as const;

export const Course = z.object({
  title: z.string().min(2, 'Course title must be at least 2 characters'),
  term: z.enum(validTerms, {
    message: 'Term must be Fall, Winter, or Spring'
  }),
  number: z.string().regex(/^\d{3}(-\d)?$/, {
    message: 'Course number must be like 213 or 213-2'
  }),
  meeting: z.string().refine(
    (val) => {
      if (val === '') return true;
      return /^(?:(?:Tu|Th|[MTWRF])+)\s+\d{1,2}:\d{2}-\d{1,2}:\d{2}$/.test(val);
    },
    {
      message: 'Must contain days and start-end, e.g., MWF 12:00-13:20'
    }
  )
});

export type Course = z.infer<typeof Course>;

export const courseResolver = zodResolver(Course);
