import { Profile } from '@/types/data';

export interface BoardDetail {
  boardId: number;
  title: string;
  status: string;
  content: string;
  meetingDate: string;
  meetingTime: string;
  createDate: string;
  maxApply: number;
  currentApply: number;
  minAge: number;
  maxAge: number;
  locationName: string;
  x: number;
  y: number;
  locationDetail: string;
  views: number;
  participants: Profile[];
}
