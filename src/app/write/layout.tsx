import { Content } from '@/components';
import { Header } from '@/components/server';
import { ReactNode } from 'react';

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header actionRequired={true} />
      <Content>{children}</Content>
    </>
  );
}
