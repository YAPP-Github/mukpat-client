export type StepOneData = {
  meetingDate: Date;
  timezone: string;
  meetingTime: string;
  maxApply: number;
  minAge: number | null;
  maxAge: number | null;
  locationName: string;
  addressName: string;
  x: number;
  y: number;
  region_1depth_name: string;
  region_2depth_name: string;
  locationDetail: string | null;
};

export type StepTwoData = {
  title: string;
  content?: string | null;
  chatLink: string;
};

export type PostResponse = {
  boardId: number;
};

export type BoardData = Omit<StepOneData, 'meetingDate'> & StepTwoData & { meetingDate: string | Date };
export type ParsedData = Omit<BoardData, 'timezone'>;
