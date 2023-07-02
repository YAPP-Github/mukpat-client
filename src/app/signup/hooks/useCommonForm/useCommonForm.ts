import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

interface CommonFormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema: any;
  checkMode: 'onChange' | 'onSubmit';
}

export const useCommonForm = ({ schema, checkMode }: CommonFormProps) => {
  const method = useForm({
    resolver: zodResolver(schema),
    mode: checkMode,
  });

  return {
    method,
  };
};
