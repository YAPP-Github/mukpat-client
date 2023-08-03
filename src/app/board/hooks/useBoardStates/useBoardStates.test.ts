import { vi } from 'vitest';
import { BoardDetail, Profile } from '@/api/types';
import { renderHook } from '@/tests/test-utils';
import useRecruitStates from './useBoardStates';
import * as apiHooksModule from '@/api/hooks';
import { UseQueryResult } from '@tanstack/react-query';

const 작성자_프로필 = {
  userId: 128,
  writer: true,
} as Profile;

const 비작성자_프로필 = {
  userId: 127,
} as Profile;

const 모집_중 = {
  status: '모집중',
};

const 모집_마감 = {
  status: '모집마감',
};

const 참가자 = (...rest: Profile[]) => {
  return {
    participants: rest,
  };
};

const 나이제한_존재 = {
  minAge: 20,
  maxAge: 25,
  userAge: 32,
};

const 나이제한_없음 = {
  minAge: null,
  maxAge: null,
  userAge: null,
};

const 인원_가득참 = {
  maxApply: 2,
  currentApply: 2,
};

const 인원_차지않음 = {
  maxApply: 2,
  currentApply: 1,
};

const 마감날짜_지남 = {
  isOutOfDate: true,
};

const 마감날짜_지나지않음 = {
  isOutOfDate: false,
};

describe('useRecruitStates 테스팅 1 - 작성자가 조회중인 경우', () => {
  beforeAll(() => {
    const spy = vi.spyOn(apiHooksModule, 'useProfile');
    spy.mockReturnValue({
      data: 작성자_프로필,
    } as UseQueryResult<Profile | undefined>);
  });

  test('모집중이고 인원이 꽉차지 않은 먹팟', () => {
    const {
      result: { current },
    } = renderHook(() =>
      useRecruitStates({
        ...참가자(작성자_프로필),
        ...모집_중,
        ...인원_차지않음,
      } as BoardDetail),
    );
    expect(current.isWriter).toBe(true);
    expect(current.isEditable).toBe(true);
    expect(current.isJoinable).toBe(false);
    expect(current.isClosable).toBe(true);
    expect(current.isJoinCancellable).toBe(false);
    expect(current.isNotPossibleAge).toBe(false);
    expect(current.isAgainRecruitable).toBe(false);
    expect(current.isJoined).toBe(true);
  });

  test('모집마감, 나이 제한 없음, 인원이 꽉차 있지 않음, 마감날짜가 지나지 않은 먹팟', () => {
    const {
      result: { current },
    } = renderHook(() =>
      useRecruitStates({
        ...참가자(작성자_프로필),
        ...모집_마감,
        ...나이제한_없음,
        ...인원_차지않음,
        ...마감날짜_지나지않음,
      } as BoardDetail),
    );

    expect(current.isWriter).toBe(true);
    expect(current.isEditable).toBe(false);
    expect(current.isJoinable).toBe(false);
    expect(current.isClosable).toBe(false);
    expect(current.isJoinCancellable).toBe(false);
    expect(current.isNotPossibleAge).toBe(false);
    expect(current.isAgainRecruitable).toBe(true);
    expect(current.isJoined).toBe(true);
  });

  test('모집마감, 나이 제한 없음, 인원이 꽉차 있지 않음, 마감날짜가 지나 있음', () => {
    const {
      result: { current },
    } = renderHook(() =>
      useRecruitStates({
        ...참가자(작성자_프로필),
        ...모집_마감,
        ...나이제한_없음,
        ...인원_차지않음,
        ...마감날짜_지남,
      } as BoardDetail),
    );

    expect(current.isWriter).toBe(true);
    expect(current.isEditable).toBe(false);
    expect(current.isJoinable).toBe(false);
    expect(current.isClosable).toBe(false);
    expect(current.isJoinCancellable).toBe(false);
    expect(current.isNotPossibleAge).toBe(false);
    expect(current.isAgainRecruitable).toBe(false);
    expect(current.isJoined).toBe(true);
  });
});

describe('useRecruitStates 테스팅 2 - 작성자가 아닌 사람이 조회중인 경우', () => {
  beforeAll(() => {
    const spy = vi.spyOn(apiHooksModule, 'useProfile');
    spy.mockReturnValue({
      data: 비작성자_프로필,
    } as UseQueryResult<Profile | undefined>);
  });

  test('모집중, 참여중, 나이 제한 없음, 인원이 꽉차지 않음', () => {
    const {
      result: { current },
    } = renderHook(() =>
      useRecruitStates({
        ...참가자(작성자_프로필, 비작성자_프로필),
        ...모집_중,
        ...나이제한_없음,
        ...인원_차지않음,
      } as BoardDetail),
    );
    expect(current.isWriter).toBe(false);
    expect(current.isEditable).toBe(false);
    expect(current.isJoinable).toBe(false);
    expect(current.isClosable).toBe(false);
    expect(current.isJoinCancellable).toBe(true);
    expect(current.isNotPossibleAge).toBe(false);
    expect(current.isAgainRecruitable).toBe(false);
    expect(current.isJoined).toBe(true);
  });

  test('모집중, 참여 하고있지 않음, 나이 제한 없음, 인원이 꽉차지 않음', () => {
    const {
      result: { current },
    } = renderHook(() =>
      useRecruitStates({
        ...참가자(작성자_프로필),
        ...모집_중,
        ...나이제한_없음,
        ...인원_차지않음,
      } as BoardDetail),
    );

    expect(current.isWriter).toBe(false);
    expect(current.isEditable).toBe(false);
    expect(current.isJoinable).toBe(true);
    expect(current.isClosable).toBe(false);
    expect(current.isJoinCancellable).toBe(false);
    expect(current.isNotPossibleAge).toBe(false);
    expect(current.isAgainRecruitable).toBe(false);
    expect(current.isJoined).toBe(false);
  });

  test('모집중, 참여 하고있지 않음, 나이 제한 존재, 인원이 꽉차지 않음', () => {
    const {
      result: { current },
    } = renderHook(() =>
      useRecruitStates({
        ...참가자(작성자_프로필),
        ...모집_중,
        ...나이제한_존재,
        ...인원_차지않음,
      } as BoardDetail),
    );

    expect(current.isWriter).toBe(false);
    expect(current.isEditable).toBe(false);
    expect(current.isJoinable).toBe(false);
    expect(current.isClosable).toBe(false);
    expect(current.isJoinCancellable).toBe(false);
    expect(current.isNotPossibleAge).toBe(true);
    expect(current.isAgainRecruitable).toBe(false);
    expect(current.isJoined).toBe(false);
  });

  test('모집마감, 작성자 아니지만 참여중, 나이 제한 없음, 인원이 꽉차 있음, 마감날짜가 지나있음', () => {
    const {
      result: { current },
    } = renderHook(() =>
      useRecruitStates({
        ...참가자(작성자_프로필, 비작성자_프로필),
        ...모집_마감,
        ...나이제한_없음,
        ...인원_가득참,
        ...마감날짜_지남,
      } as BoardDetail),
    );

    expect(current.isWriter).toBe(false);
    expect(current.isEditable).toBe(false);
    expect(current.isJoinable).toBe(false);
    expect(current.isClosable).toBe(false);
    expect(current.isJoinCancellable).toBe(false);
    expect(current.isNotPossibleAge).toBe(false);
    expect(current.isAgainRecruitable).toBe(false);
    expect(current.isJoined).toBe(true);
  });
});
