import {
  SpecStartNote,
  SpecEndNote,
  TestStartNote,
  TestEndNote,
  AssertionNote,
} from './types';
export declare type ReporterNote =
  | SpecStartNote
  | SpecEndNote
  | TestStartNote
  | TestEndNote
  | AssertionNote;
export interface ReporterRecipe {
  onBegin?: () => void;
  onEnd?: () => void;
  onNote?: (note: ReporterNote, change: ReporterLevelChange) => void;
  onSpecStartNote?: (note: SpecStartNote) => void;
  onSpecEndNote?: (note: SpecEndNote) => void;
  onTestStartNote?: (note: TestStartNote) => void;
  onTestEndNote?: (note: TestEndNote) => void;
  onAssertionNote?: (note: AssertionNote) => void;
}
export declare type ReporterLevelChange = -1 | 0 | 1;
export declare class Reporter {
  protected recipe: ReporterRecipe;
  level: number;
  constructor(recipe?: ReporterRecipe);
  begin(): void;
  end(): void;
  note(note: ReporterNote): void;
  reset(): void;
  protected onBegin(): void;
  protected onEnd(): void;
  protected onSpecStartNote(note: SpecStartNote): void;
  protected onSpecEndNote(note: SpecEndNote): void;
  protected onTestStartNote(note: TestStartNote): void;
  protected onTestEndNote(note: TestEndNote): void;
  protected onAssertionNote(note: AssertionNote): void;
  protected onNote(note: ReporterNote, change: ReporterLevelChange): void;
}
