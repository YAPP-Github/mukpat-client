import { BoardDetail, Profile } from '@/api/types';
import { format, addDays } from 'date-fns';
import { ko } from 'date-fns/locale';

export const SAMPLE_BOARD_IDS = [1000000000, 1000000001, 1000000002, 1000000003];

const SAMPLE_PARTICIPANTS: Profile[] = [
  { userId: 1000000000, nickName: 'MOUNTAIN', jobGroupMain: '개발', writer: true },
  { userId: 1000000001, nickName: '퇴근하고싶어', jobGroupMain: '디자인', writer: false },
  { userId: 1000000002, nickName: '아빠', jobGroupMain: '법률/법무', writer: false },
  { userId: 1000000003, nickName: 'rachel', jobGroupMain: '개발', writer: false },
  { userId: 1000000003, nickName: '조정디디', jobGroupMain: '교육', writer: false },
];

export const SAMPLE_BOARDDETAIL_1: BoardDetail = {
  boardId: SAMPLE_BOARD_IDS[0],
  prevId: null,
  nextId: SAMPLE_BOARD_IDS[1],
  title: '[샘플] 삼성 디자이너 모여라~!',
  status: '모집중',
  content: `안녕하세요, 디자이너 먹팟땡이에요.
  
삼성에 입사한 지 어느덧 3년이 되었는데, 연차가 쌓일수록 커리어를 어떻게 계획하면 좋을지 고민이 커지더라고요.

그래서 비슷한 고민을 하고 계신 분들이랑 얘기해보고 싶어서 먹팟 만들었어요ㅎㅎ

같이 점심 먹으면서 편하게 얘기해봐요.

디자이너시라면 연차 상관없이 누구나 환영입니다!

*샘플 먹팟입니다.`,
  chatLink: 'https://open.kakao.com/o/g8Q4XqKc',
  meetingDate: format(new Date(), 'yyyy년 MM월 dd일', {
    locale: ko,
  }),
  meetingTime: '오후 12:00',
  createDate: '2023년 07월 30일',
  maxApply: 4,
  currentApply: 3,
  minAge: null,
  maxAge: null,
  userAge: null,
  locationName: '삼성전자 R&D 캠퍼스',
  addressName: '서울특별시 서초구 성촌길 67',
  x: 127.022,
  y: 37.466,
  locationDetail: 'A, B동 1층 로비',
  views: 100,
  participants: SAMPLE_PARTICIPANTS.slice(0, 3),
  isSample: true,
  isOutOfDate: false,
};

export const SAMPLE_BOARDDETAIL_2: BoardDetail = {
  boardId: SAMPLE_BOARD_IDS[1],
  prevId: SAMPLE_BOARD_IDS[0],
  nextId: SAMPLE_BOARD_IDS[2],
  title: '[샘플] 최근에 이직하신 분들 !',
  status: '모집중',
  content: `안녕하세요. 최근에 다른 기업에서 삼성전자로 이직했는데 적응이 쉽지 않네요 😅

최근에 이직한 사람들끼리 모여서 얘기하면 의지도 되고, 서로서로 도움도 많이 주고 받을 수 있을 것 같아요. 

같이 밥먹어요 ~~`,
  chatLink: 'https://open.kakao.com/o/g8Q4XqKc',
  meetingDate: format(addDays(new Date(), 1), 'yyyy년 MM월 dd일', { locale: ko }),
  meetingTime: '오후 01:00',
  createDate: '2023년 07월 30일',
  maxApply: 3,
  currentApply: 2,
  minAge: null,
  maxAge: null,
  userAge: null,
  locationName: '봉평 메밀 막국수',
  addressName: '서울특별시 서초구 서초동 1307-4',
  x: 127.025,
  y: 37.468,
  locationDetail: '식당 앞',
  views: 100,
  participants: SAMPLE_PARTICIPANTS.slice(0, 2),
  isSample: true,
  isOutOfDate: false,
};

export const SAMPLE_BOARDDETAIL_3: BoardDetail = {
  boardId: SAMPLE_BOARD_IDS[2],
  prevId: SAMPLE_BOARD_IDS[1],
  nextId: SAMPLE_BOARD_IDS[3],
  title: '[샘플] 미친 닭볶음탕집 같이 가요.',
  status: '모집중',
  content: `안녕하세요~! 
최근에 회사 근처에서 어마어마한 맛집을 발견했습니다. 

청국장 닭볶음탕을 파는 곳인데 계속 생각나요

혼자 먹기엔 양이 많아서 퇴근 후에 같이 한 잔 하실 분들 구합니다. 

*샘플 먹팟입니다.`,
  chatLink: 'https://open.kakao.com/o/g8Q4XqKc',
  meetingDate: format(addDays(new Date(), 3), 'yyyy년 MM월 dd일', { locale: ko }),
  meetingTime: '오후 09:00',
  createDate: '2023년 07월 30일',
  maxApply: 5,
  currentApply: 4,
  minAge: null,
  maxAge: null,
  userAge: null,
  locationName: '닭볶음탕집',
  addressName: '서울 서초구 우면동 740',
  x: 127.039,
  y: 37.501,
  locationDetail: '식당 앞',
  views: 100,
  participants: SAMPLE_PARTICIPANTS.slice(0, 4),
  isSample: true,
  isOutOfDate: false,
};

export const SAMPLE_BOARDDETAIL_4: BoardDetail = {
  boardId: SAMPLE_BOARD_IDS[3],
  prevId: SAMPLE_BOARD_IDS[2],
  nextId: null,
  title: '[샘플]🚀💪 러닝크루 대모집 🚀🙌',
  status: '모집중',
  content: `혹시 러닝크루 관심 있으신 분들 계신가요?
혼자 운동하기 싫어서 러닝크루 모집 중입니다 -!

일시 : 매주 목요일 밤 9시
장소 : 양재천
길이 및 속도 : 참가자들 실력에 따라 대략 5-10km 정도의 거리를 조절하면서 달리려고 해요
준비물 : 편안한 운동복, 운동화 물, 수건

더 자세한 내용은 오픈채팅방에서 알려드릴게요 😆 
* 샘플 먹팟입니다.`,
  chatLink: 'https://open.kakao.com/o/g8Q4XqKc',
  meetingDate: '2023년 07월 20일',
  meetingTime: '오후 07시 00분',
  createDate: '2023년 07월 30일',
  maxApply: 10,
  currentApply: SAMPLE_PARTICIPANTS.length,
  minAge: 23,
  maxAge: 30,
  userAge: 25,
  locationName: '섬들근린공원',
  addressName: '서울 서초구 우면동 740',
  x: 127.027,
  y: 37.462,
  locationDetail: 'gs25 앞',
  views: 100,
  participants: SAMPLE_PARTICIPANTS,
  isSample: true,
  isOutOfDate: false,
};

export const SAMPLE_BOARDDETAILS: BoardDetail[] = [
  SAMPLE_BOARDDETAIL_1,
  SAMPLE_BOARDDETAIL_2,
  SAMPLE_BOARDDETAIL_3,
  SAMPLE_BOARDDETAIL_4,
];
