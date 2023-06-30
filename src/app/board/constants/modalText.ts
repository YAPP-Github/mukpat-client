export const JOIN_MODAL_TEXT = {
  INSTURCTION: {
    CHAT_INFO_TITLE: '카카오톡 오픈 채팅방에 입장해 주세요.',
    CHAT_INFO_DETAIL:
      '베타서비스에서는 채팅 기능이 제공되지 않아요.\n효율적인 소통을 위해 오픈 채팅방에 입장해 주세요.',
    ETIQUETTE_TITLE: '오픈 채팅방 이용 규칙',
    ETIQUETTE_DETAIL:
      '꼭 참여할 수 있는 모임에만 신청해 주세요.\n모임 참여가 어려운 경우 반드시 멤버분들에게\n해당 사실을 알린 후 모임 신청을 취소해 주세요.',
  } as const,

  CHECKBOX: {
    CHECK_CHATLINK: '오픈 채팅방 링크를 확인했어요.',
    CHECK_INSTRUCTION: '안내 및 주의 사항을 확인했어요.',
  } as const,

  BUTTON: {
    OPENCHAT_SHORTCUT: '오픈 채팅방 바로가기',
    JOIN: '참여하기',
  } as const,
} as const;

export const DELETE_MODAL_TEXT = {
  TITLE: '게시글 삭제',
  INSTRUCTION: '게시글 삭제 시 참여 멤버들에게\n모임 취소 메일이 전송됩니다.',
  CANCEL: '취소',
  DELETE: '삭제하기',
} as const;

export const CANCEL_JOIN_MODAL_TEXT = {
  TITLE: '참여 취소',
  INSTRUCTION: '참여 취소 시 멤버들에게\n안내 메일이 전송됩니다.',
  NOT_CANCEL: '참여하기',
  CANCEL: '취소하기',
} as const;
