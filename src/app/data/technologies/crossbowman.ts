import { Technology } from 'src/app/models/technology.model';
import { archer } from './archer';
import { castle_age } from './castle_age';

export const crossbowman: Technology = {
  "name": "crossbowman",
  "age": "castle",
  "color": "blue",
  dependencies: [archer.name,],
}