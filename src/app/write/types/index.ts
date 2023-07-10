export type StepOneData = {
  meetingDate: Date;
  timezone: string;
  meetingTime: string;
  maxApply: number;
  minAge: number | null;
  maxAge: number | null;
  locationName: string;
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

export type ParsedData = Omit<StepOneData, 'meetingDate'> & StepTwoData & { meetingDate: string | Date };
