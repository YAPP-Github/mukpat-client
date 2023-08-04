import { selectedDateCaption } from './caption';

describe('DateInput caption 테스트', () => {
  test('selectedDateCaption 테스트', () => {
    const date1 = new Date('2023-06-01');
    expect(selectedDateCaption(date1)).toBe('2023년 06월 01일');

    const today = new Date();
    expect(selectedDateCaption(today)).toMatch(/(오늘)/i);

    const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
    expect(selectedDateCaption(tomorrow)).toMatch(/(내일)/i);
  });
});
