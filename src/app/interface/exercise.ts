export interface ExerciseThumbnail {
  id: string;
  thumbnail: string;
  created: Date;
  name: string;
  type: string;
}

export interface ExerciseAnalysis {
  score: number;
  correct: string[];
  incorrect: string[];
}
export interface ExerciseMovement {
  file_id: string;
  file: string;
  view: string;
  analysis: ExerciseAnalysis;
}
export interface Exercise {
  name: string;
  type: string;
  created: Date;
  movements: ExerciseMovement[];
}
