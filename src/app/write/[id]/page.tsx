import { notFound } from 'next/navigation';
import { HydratedInput, InputLoading } from '../components';
import { Suspense } from 'react';

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
      <HydratedInput boardId={boardId} />
    </Suspense>
  );
};

export default BoardEditPage;
