export interface ExerciseInfo {
  name: string;
  description: string;
  instructions: string[];
  benefits: string[];
  primaryMuscles: string[];
}
export interface ExercisesInfo {
  [key: string]: ExerciseInfo;
}
