export interface ExerciseThumbnail {
  id: string;
  thumbnail: string;
  created: Date;
  name: string;
  type: string;
}

export interface ExerciseFile {
  file: string;
}
export interface Exercise {
  name: string;
  type: string;
  files: ExerciseFile[];
}
