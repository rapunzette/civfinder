import { Technology } from 'src/app/models/technology.model';
import { man_at_arms } from './man_at_arms';
import { castle_age } from './castle_age';

export const long_swordsman: Technology = {
  "name": "long swordsman",
  "age": "castle",
  "color": "blue",
  "dependencies": [man_at_arms.name, castle_age.name],
}