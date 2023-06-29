import { Color } from '@/components/Chip/Chip.css';

const chipColorMap = new Map<string, Color>([
  ['모집중', 'primary'],
  ['모집마감', 'grey'],
  ['모집종료', 'grey'],
  ['오늘', 'skyblue'],
  ['내일', 'yellow'],
]);

export const getChipColor = (text: string): Color => chipColorMap.get(text) ?? 'primary';
