export interface Review {
  id: string;
  fullName: string;
  email?: string;
  starRating: number;
  usabilityRating: string;
  comment: string;
  wantsToMake: boolean;
  createdAt: string;
  isUserSubmitted?: boolean;
}


export interface CraftStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  materialsUsed: string[];
  techniqueTip: string;
  duration: string;
}
