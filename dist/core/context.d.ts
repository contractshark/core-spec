import { Stage } from './stage';
import { AssertionNote } from './types';
import { AxiosRequestConfig } from '../methods/request';
interface AssertionRecipe {
  assertion: string;
  handler: () => boolean | Promise<boolean>;
  message?: string;
}
export declare class Context<Data = {}> {
  protected data: Data;
  stage: Stage<Data>;
  constructor(stage: Stage<Data>);
  get<Key extends keyof Data>(k: Key): Data[Key];
  set<Key extends string, Value>(k: Key, v: Value): void;
  pass(message?: string): AssertionNote | Promise<AssertionNote>;
  fail(message?: any): AssertionNote | Promise<AssertionNote>;
  truthy(value: any, message?: any): AssertionNote | Promise<AssertionNote>;
  falsy(value: any, message?: any): AssertionNote | Promise<AssertionNote>;
  true(value: any, message?: any): AssertionNote | Promise<AssertionNote>;
  false(value: any, message?: any): AssertionNote | Promise<AssertionNote>;
  is(
    value: any,
    expected: any,
    message?: any
  ): AssertionNote | Promise<AssertionNote>;
  not(
    value: any,
    expected: any,
    message?: any
  ): AssertionNote | Promise<AssertionNote>;
  throws(fn: () => any, message?: any): AssertionNote | Promise<AssertionNote>;
  notThrows(
    fn: () => any,
    message?: any
  ): AssertionNote | Promise<AssertionNote>;
  regex(
    exp: RegExp,
    value: string,
    message?: any
  ): AssertionNote | Promise<AssertionNote>;
  notRegex(
    exp: RegExp,
    value: string,
    message?: any
  ): AssertionNote | Promise<AssertionNote>;
  deepEqual(
    value: any,
    expected: any,
    message?: any
  ): AssertionNote | Promise<AssertionNote>;
  notDeepEqual(
    value: any,
    expected: any,
    message?: any
  ): AssertionNote | Promise<AssertionNote>;
  sleep(time: number): Promise<void>;
  request(
    config: AxiosRequestConfig
  ): Promise<import('axios').AxiosResponse<any>>;
  exec(
    command: string
  ): Promise<{
    stdout: string;
    stderr: string;
  }>;
  protected assert(
    recipe: AssertionRecipe
  ): AssertionNote | Promise<AssertionNote>;
}
export {};
