import { HTTPError } from 'ky';
import { MutationFunction, useMutation as useQueryMutation, UseMutationOptions } from '@tanstack/react-query';

const useMutation = <TData = unknown, TError = HTTPError, TVariables = unknown, TContext = unknown>(
  mutationFunc: MutationFunction<TData, TVariables>,
  options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationFn'>,
) => useQueryMutation<TData, TError, TVariables, TContext>(mutationFunc, options);

export default useMutation;
