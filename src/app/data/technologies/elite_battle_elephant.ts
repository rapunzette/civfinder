import { Technology } from 'src/app/models/technology.model';
import { imperial_age } from './imperial_age';
import { battle_elephant } from './battle_elephant';

export const elite_battle_elephant: Technology = {
  "name": "elite battle elephant",
  "age": "imperial",
  "color": "blue",
  dependencies: [imperial_age.name, battle_elephant.name]
}