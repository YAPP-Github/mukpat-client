export type StepOneData = {
  meetingDate: string;
  meetingTime: string;
  maxApply: number;
  minAge?: number;
  maxAge?: number;
  locationName: string;
  x?: number;
  y?: number;
  locationDetail?: string;
};

export type StepTwoData = {
  title: string;
  content?: string;
  chatLink: string;
};

export type FormData = StepOneData & StepTwoData;
