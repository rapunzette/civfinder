import { Technology } from 'src/app/models/technology.model';
import { chemistry } from './chemistry';
import { archery_range } from './archery_range';

export const hand_cannoneer: Technology = {
  "name": "hand cannoneer",
  "age": "imperial",
  "color": "blue",
  dependencies: [chemistry.name, archery_range.name],
}