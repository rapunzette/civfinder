import { Technology } from 'src/app/models/technology.model';
import { steppe_lancer } from './steppe_lancer';
import { imperial_age } from './imperial_age';

export const elite_steppe_lancer: Technology = {
  "name": "elite steppe lancer",
  "age": "imperial",
  "color": "blue",
  dependencies: [steppe_lancer.name, imperial_age.name]
}