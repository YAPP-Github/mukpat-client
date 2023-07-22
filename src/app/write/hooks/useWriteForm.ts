import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useFormStore from '@/app/write/store/useFormStore';
import { boardSchema, BoardSchema, StepOneSchema, stepOneSchema } from '@/app/write/lib/schema';

export const useWriteForm = () => {
  const { stepOne, stepTwo } = useFormStore();

  const stepOneMethod = useForm<StepOneSchema>({
    resolver: zodResolver(stepOneSchema),
    mode: 'onChange',
    defaultValues: { ...stepOne },
  });

  const stepTwoMethod = useForm<BoardSchema>({
    resolver: zodResolver(boardSchema),
    defaultValues: { ...stepOne, ...stepTwo },
  });

  return { stepOneMethod, stepTwoMethod };
};
