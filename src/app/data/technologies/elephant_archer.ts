import { Technology } from 'src/app/models/technology.model';
import { archery_range } from './archery_range';

export const elephant_archer: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "elephant archer",
  "age": "castle",
  "color": "blue",
  dependencies: [archery_range.name],
}