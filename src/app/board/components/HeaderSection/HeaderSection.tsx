'use client';

import { Typography, SvgIcon, Dropdown } from '@/components';
import { useBoardDetail } from '@/app/board/hooks';
import { useProfile } from '@/hooks';
import { useParams } from 'next/navigation';
import { header, headerText, headerMenu } from './HeaderSection.css';

// TODO
// [ ] 드랍다운 버튼 기능 연결

const HeaderSection = () => {
  const { id: boardId } = useParams();
  const {
    data: { participants, status, title },
  } = useBoardDetail(boardId);
  const { data: profile } = useProfile();

  const writer = participants.find(({ writer }) => writer);
  const isWriterProfile = writer?.userId === profile?.userId;

  return (
    <div className={header}>
      <div className={headerText}>
        <Typography variant="heading1" color="primary500">
          {status}
        </Typography>
        <Typography variant="heading1">{title}</Typography>
      </div>
      <Dropdown>
        <Dropdown.Toggle>
          <SvgIcon id="dot" width={36} height={36} />
        </Dropdown.Toggle>
        <Dropdown.Menu className={headerMenu} placement="bottomRight">
          <Dropdown.Item itemKey="share">
            <Typography variant="label2">공유하기</Typography>
          </Dropdown.Item>
          {isWriterProfile && (
            <>
              <Dropdown.Item itemKey="change">수정하기</Dropdown.Item>
              <Dropdown.Item itemKey="delete">삭제하기</Dropdown.Item>
            </>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default HeaderSection;
