import config from '../config/config.json';

export type ConfigName = keyof typeof config;

export const Config = (name: ConfigName) => {
  console.log(name)
}
