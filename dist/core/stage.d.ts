import { Reporter } from './reporter';
import { AxiosRequestConfig } from '../methods/request';
export declare class Stage<Data = {}> {
  protected data: Data;
  reporter: Reporter;
  constructor(reporter: Reporter);
  set<Key extends string, Value>(k: Key, v: Value): void;
  get<Key extends keyof Data>(k: Key): Data[Key];
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
}
