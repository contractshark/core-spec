import { Stage } from './stage';
import { Context } from './context';
declare type StageHandler<Data> = (stage: Stage<Data>) => void | Promise<void>;
declare type ContextHandler<Data> = (
  context: Context<Data>,
  stage: Stage<Data>
) => void | Promise<void>;
interface PerformRecipes<Data> {
  message: string;
  handler?: ContextHandler<Data>;
  spec?: Spec<Data>;
}
export declare class Spec<Data = {}> {
  protected beforeHandlers: StageHandler<Data>[];
  protected beforeEachHandlers: ContextHandler<Data>[];
  protected afterHandlers: StageHandler<Data>[];
  protected afterEachHandlers: ContextHandler<Data>[];
  protected performRecipes: PerformRecipes<Data>[];
  protected onlyEnabled: boolean;
  protected _stage: Stage<Data>;
  parent: Spec<Data>;
  constructor(stage?: Stage<Data>, parent?: Spec<Data>);
  set stage(s: Stage<Data>);
  get stage(): Stage<Data>;
  hasOnly(): boolean;
  isRoot(): boolean;
  before(handler: StageHandler<Data>, append?: boolean): this;
  beforeEach(handler: ContextHandler<Data>, append?: boolean): this;
  after(handler: StageHandler<Data>, append?: boolean): this;
  afterEach(handler: ContextHandler<Data>, append?: boolean): this;
  spec(message: string, spec: Spec<Data>): this;
  test(message: string, handler: ContextHandler<Data>): this;
  skip(message: string, handler?: ContextHandler<Data>): this;
  only(message: string, handler: ContextHandler<Data>): this;
  perform(): Promise<void>;
  protected performBegin(): Promise<void>;
  protected performEnd(): Promise<void>;
  protected performSpec(recipe: PerformRecipes<Data>): Promise<void>;
  protected performTest(recipe: PerformRecipes<Data>): Promise<void>;
  protected performBefore(): Promise<void>;
  protected performAfter(): Promise<void>;
  protected performBeforeEach(context: Context<Data>): Promise<void>;
  protected performAfterEach(context: Context<Data>): Promise<void>;
  protected createStage(): Stage<Data>;
  protected createContext(): Context<Data>;
}
export {};
