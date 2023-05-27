export interface ExerciseThumbnail {
  id: string;
  thumbnail: string;
  created: Date;
  name: string;
  type: string;
}

export interface ExerciseAnalyze {
  score: number;
  correct: string[];
  incorrect: string[];
}
export interface ExerciseFile {
  file_id: string;
  file: string;
  view: string;
  analyze: ExerciseAnalyze;
}
export interface Exercise {
  name: string;
  type: string;
  created: Date;
  files: ExerciseFile[];
}
