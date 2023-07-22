import { notFound } from 'next/navigation';
import { InputLoading } from '../components';
import { Suspense } from 'react';
import BoardForm from '../components/Form/BoardForm';

const BoardEditPage = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const boardId = Number(id);
  if (Number.isNaN(boardId)) notFound();

  return (
    <Suspense fallback={<InputLoading />}>
      <BoardForm />
    </Suspense>
  );
};

export default BoardEditPage;
