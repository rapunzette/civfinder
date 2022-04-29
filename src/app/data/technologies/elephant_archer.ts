import { Technology } from 'src/app/models/technology.model';
import { archery_range } from './archery_range';

export const elephant_archer: Technology = {
  "name": "elephant archer",
  "age": "castle",
  "color": "blue",
  dependencies: [archery_range.name],
}