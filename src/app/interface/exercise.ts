export interface ExerciseThumbnail {
  id: string;
  thumbnail: string;
  created: Date;
  name: string;
  type: string;
}

export interface ExerciseFile {
  file: string;
  view: string;
}
export interface Exercise {
  name: string;
  type: string;
  created: Date;
  files: ExerciseFile[];
}

export enum ExerciseType {
  BENCH_PRESS = 'Bench press',
  SQUAT = 'Squat',
  SKULL_CRUSH = 'Skull crush',
}
