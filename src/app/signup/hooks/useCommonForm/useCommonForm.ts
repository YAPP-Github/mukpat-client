import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

interface CommonFormProps {
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
