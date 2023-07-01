export type StepOneData = {
  meetingDate: string;
  meetingTime: string;
  maxApply: number;
  minAge: number | null;
  maxAge: number | null;
  locationName: string;
  x: number;
  y: number;
  locationDetail: string | null;
};

export type StepTwoData = {
  title: string;
  content?: string | null;
  chatLink: string;
};

export type BoardData = StepOneData & StepTwoData;
