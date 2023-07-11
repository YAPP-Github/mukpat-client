import { yearMonthCaption } from './caption';

describe('DayPicker caption 테스트', () => {
  test('yearMonthCaption 테스트', () => {
    const date = new Date('2023-06-01');
    expect(yearMonthCaption(date)).toBe('2023.06');
  });
});
